import AlertLink from './AlertLink';
import Card from './Card';

function Main() {
	let alertLinkList = [
	{
		id: 1,
		title: "關西小小兵！",
		desc: "環球影城、哈利波特、星光派對五日！"
	},
	{
		id: 2,
		title: "沖繩五星！",
		desc: "海洋博公園、玉泉王國村、五星住宿四日！"
	},
	{
		id: 3,
		title: "消暑一起GO！",
		desc: "峇里島五日遊四人同行一人免費！"
	}
];

let cardList = [
	{
		id: 1,
		imgSrc: "J-3.jpg",
		title: "寒假暢遊北海道",
		desc: "暢遊北海道函館、小樽、旭川、札幌、摩周湖七日遊！"
	},
	{
		id: 2,
		imgSrc: "E-4.jpg",
		title: "西葡雙牙深呼吸",
		desc: "聖家堂、馬德里王宮、太陽門廣場、羅馬水道橋、熱羅尼莫斯修道院遊十日！"
	},
	{
		id: 3,
		imgSrc: "E-5.jpg",
		title: "奧地利人文旅行",
		desc: "哈斯塔特小鎮、薩爾茨堡、美景宮、霍夫堡皇宮、百水公寓、納許市場五日！"
	},
	{
		id: 4,
		imgSrc: "E-6.jpg",
		title: "夏遊布拉格",
		desc: "布拉格天文鐘、查理大橋、庫倫洛夫、人骨教堂、伏爾塔瓦河遊船五日！"
	}
];

return (
	<>
        <div className="row">
				{
					cardList.map(card =>
					<Card key={card.id} cardData={card}/>
					)
				}
			</div>
		
        <div className="container-fluid mt-3">
			{
				alertLinkList.map(link =>
					<AlertLink key={link.id} linkData={link}/>
				)
			}
		</div>
		</>
	)

}

export default Main;