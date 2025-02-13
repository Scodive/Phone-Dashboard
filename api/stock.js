export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    try {
        // 腾讯股票API - sh000001为上证指数
        const response = await fetch('https://qt.gtimg.cn/q=s_sh000001');
        const text = await response.text();
        
        // 返回格式：v_s_sh000001="1~上证指数~3087.73~-0.29~-9.01~27847~2306";
        // 分别是：名称、当前点数、涨跌幅、涨跌点数、成交量等
        const data = text.split('~');
        
        res.status(200).json({
            price: parseFloat(data[2]),
            change: parseFloat(data[3])
        });
    } catch (error) {
        res.status(500).json({ error: '获取股票数据失败' });
    }
} 