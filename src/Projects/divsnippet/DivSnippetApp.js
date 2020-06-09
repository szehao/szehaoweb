import React, { useState, Fragment } from 'react';
import Skewed from './Skewed';
import SideCurve from './SideCurve';
import Triangle from './Triangle';
import SemiCircle from './SemiCircle';
import BoxOption from './Components/BoxOption';
import skewedDiv from '../../img/divsnippet/skewed.png';
import curvedDiv from '../../img/divsnippet/curve.png';
import triangleDiv from '../../img/divsnippet/triangle.png';
import semicircleDiv from '../../img/divsnippet/semicircle.png';
import '../../Scss/divsnippet/style.scss';

export default function DivSnippetApp () {
	const [ component, setComponent ] = useState(<Skewed />);
	const [ active, setActive ] = useState('skewed');

	const click = (name) => {
		document.getElementsByTagName('section')[0].style.background = 'none';
		switch (name) {
			case 'skewed':
				setComponent(<Skewed />);
				break;
			case 'curved':
				setComponent(<SideCurve />);
				break;
			case 'triangle':
				setComponent(<Triangle />);
				break;
			case 'semicircle':
				setComponent(<SemiCircle />);
				break;
			default:
				setComponent(<Skewed />);
		}
		setActive(name);
	};

	return (
		<Fragment>
			{component}
			<BoxOptionContainer>
				<BoxOption
					img={skewedDiv}
					imgAlt="skewed div"
					click={click}
					data="skewed"
					active={active === 'skewed'}
				/>
				<BoxOption
					img={curvedDiv}
					imgAlt="curved div"
					click={click}
					data="curved"
					active={active === 'curved'}
				/>
				<BoxOption
					img={triangleDiv}
					imgAlt="triangle div"
					click={click}
					data="triangle"
					active={active === 'triangle'}
				/>
				<BoxOption
					img={semicircleDiv}
					imgAlt="semicircle div"
					click={click}
					data="semicircle"
					active={active === 'semicircle'}
				/>
			</BoxOptionContainer>
		</Fragment>
	);
}

const BoxOptionContainer = ({ children }) => {
	return <div className="option-container">{children}</div>;
};
