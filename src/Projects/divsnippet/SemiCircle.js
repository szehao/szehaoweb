import React, { useState, useEffect } from 'react';
import Settings, { Slider } from './Components/Settings';
import MultiTab from './Components/MultiTab';
import TabContent, { CopyButton, Content } from './Components/TabContent';
import TabHeader, { Tabs } from './Components/TabHeader';
import { primaryColor, backgroundColor, setRootVariables } from './constants';

export default function SemiCircle () {
	const [ width, setWidth ] = useState(25);
	const [ height, setHeight ] = useState(80);
	const [ borderRadius, setBorderRadius ] = useState(50);
	const [ top, setTop ] = useState(50);
	const [ left, setLeft ] = useState(50);
	const [ reversed, setReversed ] = useState(false);

	const handleChange = ({ target: { value } }, title) => {
		switch (title) {
			case 'Width':
				setWidth(value);
				break;
			case 'Height':
				setHeight(value);
				break;
			case 'Border Radius':
				setBorderRadius(value);
				break;
			case 'Top':
				setTop(value);
				break;
			case 'Left':
				setLeft(value);
				break;
			default:
				console.error('Missing title for Slider component');
				break;
		}
	};

	const handleReversion = () => {
		setReversed((prevReversed) => !prevReversed);
	};

	const html = `<section class="semicircle"></section>`;
	const css = `.semicircle {\
			\n	position: relative;\
			\n	width : 100%;\
			\n	height : 40vh;\
			\n	background-color : ${primaryColor};\
			\n}\n
			\n.semicircle:before {\
			\n	content: '';\
			\n	position: absolute;\
			\n	bottom: 0;\
			\n	left: ${left}%;\
			\n	width: ${width}%;\
			\n	height: ${height}%;\
			\n	border-radius: ${borderRadius}%;\
			\n	background : ${reversed ? backgroundColor : primaryColor};\
			\n	transform : translateX(-50%) translateY(${top}%);\
			\n}`;

	useEffect(
		() => {
			let property = [
				{
					name  : '--sc-width',
					value : `${width}%`
				},
				{
					name  : '--sc-height',
					value : `${height}%`
				},
				{
					name  : '--sc-border-radius',
					value : `${borderRadius}%`
				},
				{
					name  : '--sc-top',
					value : `${top}%`
				},
				{
					name  : '--sc-left',
					value : `${left}%`
				},
				{
					name  : '--sc-background',
					value : reversed ? backgroundColor : primaryColor
				}
			];

			setRootVariables(property);
		},
		[ reversed, width, height, borderRadius, left, top ]
	);
	return (
		<main className="divsnippet-main">
			<section className="semicircle" />
			<aside>
				<Settings reversed={reversed} handleCheck={handleReversion} show="1" checkbox>
					<Slider title="Width" change={handleChange} max="50" value={width} />
					<Slider title="Height" change={handleChange} value={height} />
					<Slider title="Border Radius" change={handleChange} max="50" value={borderRadius} />
					<Slider title="Top" change={handleChange} max="50" value={top} />
					<Slider title="Left" change={handleChange} min="25" max="75" value={left} />
				</Settings>
				<MultiTab>
					<TabHeader style={{ height: '50px' }}>
						<Tabs title="HTML" content="html" />
						<Tabs title="CSS" content="css" />
					</TabHeader>
					<TabContent tabId="html" init="true">
						<Content id="html-content" content={html} />
						<CopyButton content="html-content" />
					</TabContent>
					<TabContent tabId="css">
						<Content id="css-content" content={css} />
						<CopyButton content="css-content" />
					</TabContent>
				</MultiTab>
			</aside>
		</main>
	);
}
