// export default async function handler(req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET');

//     try {
//         const username = 'Scodive';
//         const response = await fetch(`https://api.github.com/users/${username}/repos`);
//         const repos = await response.json();
        
//         // 计算所有仓库的 star 总数
//         const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        
//         res.status(200).json({ stars: totalStars });
//     } catch (error) {
//         res.status(500).json({ error: '获取 Star 数据失败' });
//     }
// } 