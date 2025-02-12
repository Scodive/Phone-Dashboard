export default async function handler(req, res) {
  // 设置 CORS 头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const bvid = req.query.bvid || 'BV1TpNNewE4W'; // 设置默认值或从查询参数获取
    const response = await fetch(`https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`);
    const data = await response.json();
    
    // 只返回需要的数据
    res.status(200).json({
      title: data.data.title,
      view: data.data.stat.view,
      like: data.data.stat.like
    });
  } catch (error) {
    res.status(500).json({ error: '获取数据失败' });
  }
} 