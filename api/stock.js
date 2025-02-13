export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    try {
        // 腾讯股票API - sh000001为上证指数
        const response = await fetch('https://qt.gtimg.cn/q=s_sh000001');
        const text = await response.text();
        
        // 返回格式：v_s_sh000001="1~上证指数~000001~3332.48~-13.91~-0.42~568631161~70579979~~635547.07~ZS"
        // 我们需要的是第4个值(点数)和第6个值(涨跌幅)
        const data = text.split('~');
        
        res.status(200).json({
            price: parseFloat(data[3]),    // 3332.48
            change: parseFloat(data[5])    // -0.42
        });
    } catch (error) {
        res.status(500).json({ error: '获取股票数据失败' });
    }
} 