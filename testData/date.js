/**
 * 2017年6月9日
 * 获取近 30天日期方法
 * 
 * @returns dateAxis[] 近30天日期数组
 */
function getDate() {
  var date = new Date()
  var year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate()
  var dateAxis = []

  for (var i = 0; i < 30; i++) {
    var preDate = new Date(year, month, day - i)
    dateAxis.unshift(preDate.getMonth() + 1 + '月' + preDate.getDate() + '日')
  }
  return dateAxis
}

/**
 * 2017年6月9日
 * 获取随机数 对应 30天日期
 * 
 * @returns data[] 30个随机数 最小值200 最大值450
 */
function getRandomData() {
  var data = []
  var i = 0
  while(i < 30) {
    data.unshift(Math.floor(Math.random() * 250) + 200)
    i++
  }
  return data
}

/**
 * 2017年6月9日
 * 设置饼图数据
 * 
 * @param {any} params 点击项的数据
 * @param {any} options 
 * @param {any} chart 
 * @param {any} items 展示的数据名称
 * @param {any} name 饼图标题名
 */
function setPieData(params, options, chart, items, name) {
  pieChart.hideLoading()
  console.log(params, 'barChart params')
  var i = 0
  var top5 = []
  var leftValue = params.value
  var minValue = params.value >= 200 ? 33 : 3

  while(i < 5) {
    var itemValue = Math.floor(Math.random() * (params.value/6 - minValue) + minValue)
    top5.push({
      value: itemValue,
      name: items[i]
    }) 
    leftValue -= itemValue
    i++
  }
  top5.push({
    value: leftValue,
    name: '其他'
  })
  pieOptions.title.text = name
  pieOptions.series[0].data = top5
  pieChart.setOption(pieOptions)
  document.querySelector(".close").style.display = "block"
  console.log(pieOptions, 'pieOptions')
}

/**
 * 2017年6月9日
 * 关闭模态框
 * 
 */
function closeModal () {
  document.querySelector('.modal').style.display = 'none'
  document.querySelector(".close").style.display = "none"
  document.querySelector('.modal-drop').style.display = 'none'
}

