import request from '@/utils/request'
const qs = require('qs')
export function login(data) {
  request.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  return request({
    url: 'commonAction!commJsonLogin.action?common.applyType=1',
    method: 'get',
    params: { 'common.loginName': data.username, 'common.password': data.password }
  })
}
// 综合统计分析 告警统计
export function analyzeAlarmFrom() {
  return request({
    url: 'statisticalAnalysisAction!eachJsonAlarmFromComprehensive.action',
    method: 'get'
  })
}
// 综合统计分析 投诉统计
export function analyzeComplaintFrom() {
  return request({
    url: 'statisticalAnalysisAction!eachJsonComplaintFromComprehensive.action',
    method: 'get'
  })
}
// 综合统计分析 维修统计
export function analyzeRepairFrom() {
  return request({
    url: 'statisticalAnalysisAction!eachJsonRepairFromComprehensive.action',
    method: 'get'
  })
}
// type 1:本月  2:本年  3:全部
// 综合统计分析 告警排行
export function analyzeAlarmRank(type) {
  return request({
    url: 'statisticalAnalysisAction!eachJsonAlarmFromComprehensiveRank.action?type=' + type,
    method: 'get'
  })
}
// 综合统计分析 投诉排行
export function analyzeTaskRank(type) {
  return request({
    url: 'statisticalAnalysisAction!eachJsonComplaintFromComprehensiveRank.action?type=' + type,
    method: 'get'
  })
}
// 综合统计分析 维修排行
export function analyzeRepairRank(type) {
  return request({
    url: 'statisticalAnalysisAction!eachJsonRepairFromComprehensiveRank.action?type=' + type,
    method: 'get'
  })
}
// 综合统计分析 水流量均值排行
export function analyzeWaterFlowRank(type) {
  return request({
    url: 'statisticalAnalysisAction!eachJsonMeanWaterFlowRank.action?type=' + type,
    method: 'get'
  })
}
// 综合统计分析 水位均值排行
export function analyzeWaterFlowLevel(type) {
  return request({
    url: 'statisticalAnalysisAction!eachJsonMeanWaterLevelRank.action?type=' + type,
    method: 'get'
  })
}
// 综合统计分析 水质图表
export function analyzeWaterQuality() {
  return request({
    url: 'statisticalAnalysisAction!eachJsonOutWaterQualit.action',
    method: 'get'
  })
}
// 机构树
export function queryListForTreeByRole(query) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: 'adminiVillageAction!eachJsonQueryAllListForTreeByRole.action',
    method: 'post',
    data: qs.stringify(query)
  })
}
// 综合统计分析 列表
export function analyzeComprehensiveStatisticsList(query) {
  return request({
    url: 'statisticalAnalysisAction!eachJsonComprehensiveStatisticsList.action?townId=' + query.townId +
    '&adminiVillageId=' + query.adminiVillageId +
    '&terminalInformationId=' + query.terminalInformationId +
    '&beginTime=' + query.beginTime +
    '&endTime=' + query.endTime +
    '&page=' + query.page +
    '&rows=' + query.rows,
    method: 'get'
  })
}
// 综合统计分析 导出列表
export function analyzeComprehensiveStatisticsListExcel(query) {
  return request({
    url: 'statisticalAnalysisAction!eachJsonExportComprehensiveStatisticsExcel.action?townId=' + query.townId +
    '&adminiVillageId=' + query.adminiVillageId +
    '&terminalInformationId=' + query.terminalInformationId +
    '&beginTime=' + query.beginTime +
    '&endTime=' + query.endTime +
    '&page=' + query.page +
    '&rows=' + query.rows,
    method: 'get'
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'post'
  })
}

// params: { userId: 100003 }

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
// 获取json文件
export function fecthjsondata() {
  return request({
    url: '/jsonfile/geojson.json',
    method: 'get'
  })
}
