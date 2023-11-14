const BUILD = 'TEST'
const LIVE  = 'http://mg.flowglobal.net'
const TEST = 'http://13.234.42.35:8000' //UAT server ip
const HOST  = BUILD == 'TEST' ? TEST : LIVE
const Date  = '20231110'
const APK_VERSION = '1.3.0'

export const config = {
  // HOST_NAME : `https://webbitech.co.in/testing/public/api/`,
  HOST_NAME : `${HOST}/api/mobile/`,
  FILE_HOST : HOST,
  IMAGE_FROM : BUILD == 'TEST' ? 'camera': 'gallery' ,
  HOST : BUILD,
  APP_VERSION : `${BUILD}-${Date}`,
  APK_VERSION :  `${APK_VERSION}`,
  APP_SUPPORT : 'Biz Ops (App support)',
  UNKNOWN_ERROR: 'Unknown error occurred. Please report the issue to Biz Ops (App support)',
  COUNTRY:"IND"
};
