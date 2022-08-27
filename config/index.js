export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx2185c84c3bfba67a",
    // 公众号appSecret
    appSecret: "bf11c424cc004ac4246639a906155ebc",
    // 模板消息id
    templateId: "HyiBVDFhjas9yk0EABpTj4TzcCaK38aYQgU0hYQg7lk",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["ortR-53grrITj1a5ZULJI6xWvZTc"],
     
    // 信息配置
    // 所在省份
    province: "黑龙江",
    // 所在城市
    city: "哈尔滨",
    birthdays: [
      {"name": "老婆", "year": "2001", "date": "8-28", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-05-20",
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// {{note_en.DATA}}  
// {{note_ch.DATA}}
