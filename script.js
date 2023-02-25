'use strict'

const labelIp = document.querySelector('.ip')
const labelLocation = document.querySelector('.location')
const labelTimezone = document.querySelector('.timezone')
const labelIsp = document.querySelector('.isp')

const inpSearch = document.querySelector('.inp-search')
const btnSearch = document.querySelector('.btn--search')

let map = L.map('map').setView([51.505, -0.09], 13)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)
let marker = L.marker([51.5, -0.09]).addTo(map)

const fetchIp = async ip => {
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_yYsqsyIMVk6Vj1cF0WoIw030s0dgQ&ipAddress=${ip}`
  )
  const data = await res.json()
  console.log(data)

  labelIp.textContent = data?.ip
  labelLocation.textContent = data.location.region
  labelTimezone.textContent = data.location.timezone
  labelIsp.textContent = data.isp

  displayMap(data)
}

btnSearch.addEventListener('click', function () {
  const inputIP = inpSearch.value
  fetchIp(inputIP)
})

const displayMap = res => {
  map.setView([res.location?.lat, res.location?.lng], 13)
  marker.setLating([res.location?.lat, res.location?.lng])
}
