import { CSSProperties } from 'react'
import '../styles/header.css'
import Countdown from './Countdown'
import WalletButton from './WalletButton'

const Header = () => {
	const header: CSSProperties = {
		position: 'relative',
		height: '100vh',
		padding: '48px',
		background: 'linear-gradient(0deg,#e7f5ff,#d0f7ff)',
		overflow: 'hidden'
	}
	const buttonHeader: CSSProperties = {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		zIndex: 50
	}
	const buttons: CSSProperties = {
		marginLeft: '32px'
	}
	const wallet: CSSProperties = {
		position: 'relative'
	}
	return (
		<div style={header}>
			<div style={buttonHeader}>
				<a href="https://twitter.com" style={buttons}>twitter</a>
				<a href="https://discord.com" style={buttons}>Discord</a>
				<div style={wallet}>
					<WalletButton />
				</div>
			</div>
			<h1 className="title">ZebraPunk</h1>
			<h3 className="subtitle">10,000 cute & cruel zebras living on the Solana lands. Each of them are randomly
				generated with more than 90+ hand drawn traits!</h3>
			<p className="text text-caption">Vamos a vender fleje</p>
			<Countdown />
			<div className="bottom-image"/>
		</div>
	)
}
export default Header
