import React from "react"

export default class Header extends React.Component{
    
    constructor(props){
		super(props);
		this.headerRef = React.createRef();
		this.handleScroll = this.handleScroll.bind(this);
		this.state = {
			active : "home",
		}
	}
	
	componentDidUpdate(){
		window.addEventListener("scroll", this.handleScroll);
		this.home = this.props.offset.home;
		this.about = this.props.offset.about;
		this.portfolio = this.props.offset.portfolio;
		this.contact = this.props.offset.contact;
		
	}


	handleScroll = () => {
		if(window.innerWidth < 425 && window.pageYOffset > 50){
			this.setState({display : "block"});
		}else if(window.innerWidth < 425){
			this.setState({display : "none"});
		}
		if(window.innerWidth < 425){
			
		}else{
			if(window.pageYOffset >= this.state.fixed){
				this.headerRef.current.classList.add("fixed");
			}else{
				this.headerRef.current.classList.remove("fixed");
			}
		}
			
		if(this.home >= window.pageYOffset){
			this.setState({active : "home"});
		}else if(this.home + this.about >= window.pageYOffset){
			this.setState({active : "about"});
		}else if(this.home + this.about + this.portfolio >= window.pageYOffset){
			this.setState({active : "portfolio"});
		}else{
			this.setState({active : "contact"});
		}
	}

	componentDidMount() {
		const navbar = this.headerRef.current;
		this.setState({
			fixed : navbar.offsetTop
		});

		window.innerWidth <425? 
		this.setState({display : "none"}) : 
		this.setState({display : "block"});
	}

    render(){
        return(
            <header ref={this.headerRef} className={this.props.className} style={{display : this.state.display}}>
                <nav>
                    <ul>
                        <li onClick={() => this.props.click("home")} className={this.state.active === "home"? "active" : ""}>            
                            <svg className="nav-icon" height="16px" id="Layer_1"  version="1.1" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z"/></svg>
                            <div>HOME</div>
                        </li>
                        <li onClick={() => this.props.click("about")} className={this.state.active === "about"? "active" : ""}>            
                            <svg className="nav-icon" height="17px" data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M64,32A32,32,0,1,0,32,64,32,32,0,0,0,64,32Zm-5.57,0A26.43,26.43,0,1,1,32,5.57,26.45,26.45,0,0,1,58.43,32Z" data-name="&lt;Compound Path&gt;" id="_Compound_Path_"/><rect height="6.96" width="6.96" x="28.52" y="12.19"/><polygon points="35.48 44.39 35.48 30.85 35.48 23.89 28.88 23.89 25.65 23.89 25.65 30.85 28.88 30.85 28.88 44.39 25.65 44.39 25.65 51.35 28.88 51.35 35.48 51.35 38.35 51.35 38.35 44.39 35.48 44.39"/></svg>
                            <div>ABOUT</div>
                        </li>
                         <li onClick={() => this.props.click("home")}>
                            <div id="logo">
                                <img src={require("./../img/logo.png")} alt="Page Logo"/>
                            </div>
                        </li>
                        <li onClick={() => this.props.click("portfolio")} className={this.state.active === "portfolio"? "active" : ""}>
                            <svg className="nav-icon" height="18px" width="18px" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="M430.1,192H81.9c-17.7,0-18.6,9.2-17.6,20.5l13,183c0.9,11.2,3.5,20.5,21.1,20.5h316.2c18,0,20.1-9.2,21.1-20.5l12.1-185.3   C448.7,199,447.8,192,430.1,192z"/><g><path d="M426.2,143.3c-0.5-12.4-4.5-15.3-15.1-15.3c0,0-121.4,0-143.2,0c-21.8,0-24.4,0.3-40.9-17.4C213.3,95.8,218.7,96,190.4,96    c-22.6,0-75.3,0-75.3,0c-17.4,0-23.6-1.5-25.2,16.6c-1.5,16.7-5,57.2-5.5,63.4h343.4L426.2,143.3z"/></g></g></svg>
                            <div>PORTFOLIO</div>
                        </li>
                        <li onClick={() => this.props.click("contact")} className={this.state.active === "contact"? "active" : ""}>      
                            <svg className="nav-icon" height="16px" id="Layer_1"  version="1.1" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M16.189,16.521L27.463,6H2.537l11.273,10.521C14.477,17.145,15.523,17.145,16.189,16.521z"/><polygon points="8.906,14.68 1,7.301 1,22.586 "/><polygon points="21.094,14.68 29,22.586 29,7.301 "/><path d="M19.631,16.045l-2.077,1.938c-0.717,0.669-1.636,1.003-2.555,1.003s-1.838-0.334-2.555-1.003l-2.077-1.938L2.414,24h25.172  L19.631,16.045z"/></svg>
                            <div>CONTACT</div>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

}