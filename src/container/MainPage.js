import React from "react";
import {apexItems, nivoItems, rechartsItems} from "../components/LinkMenuBox";
import BreadcrumbLink from "../components/BreadcrumLink";
export default () => {

	return (
		<div className="main-container">
			<div className="content-container">
				<h1>Aplikácia o grafoch</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet. Vitae aliquet nec ullamcorper sit. Sed risus pretium quam vulputate dignissim suspendisse in. Lobortis mattis aliquam faucibus purus in massa tempor nec. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Amet commodo nulla facilisi nullam vehicula. Ut pharetra sit amet aliquam id. Morbi blandit cursus risus at ultrices.
					<br/><br/>
					Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Neque viverra justo nec ultrices dui sapien eget mi proin. Sed arcu non odio euismod lacinia at quis. Eu feugiat pretium nibh ipsum consequat nisl. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Eu lobortis elementum nibh tellus molestie nunc non. Duis at tellus at urna condimentum. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Massa id neque aliquam vestibulum morbi blandit cursus risus. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. At lectus urna duis convallis convallis tellus id interdum. Arcu cursus euismod quis viverra nibh. Pretium lectus quam id leo in vitae turpis massa. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Nec dui nunc mattis enim ut tellus elementum.
				</p>
			</div>
			<div className="breadcrumb-container">
				<BreadcrumbLink name="Nivo:" itemList={nivoItems}/>
				<BreadcrumbLink name="Recharts:" itemList={rechartsItems}/>
				<BreadcrumbLink name="Apex:" itemList={apexItems}/>
			</div>
		</div>
	)
};
