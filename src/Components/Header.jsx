import '../CSS/Header.css'

const Header = () => {
	const header = {
		position: 'relative',
		height: '100vh',
		padding: '48px',
		background: 'linear-gradient(0deg,#e7f5ff,#d0f7ff)',
		overflow: 'hidden'
	}
	const buttonHeader = {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		zIndex: '50'
	}
	const buttons = {
		marginLeft: '32px'
	}
	const wallet = {
		position: 'relative'
	}
	const walletButton = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		padding: '24px',
		background: '#18acff',
		border: '2px solid rgba(0,0,0,.1)',
		boxSizing: 'border-box',
		borderRadius: '16px',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '20px',
		lineHeight: '24px',
		color: '#fff',
		marginLeft: '32px',
		maxHeight: '72px'
	}
	return (
		<div style={header}>
			<div style={buttonHeader}>
				<a href="https://twitter.com" style={buttons}>twitter</a>
				<a href="https://discord.com" style={buttons}>Discord</a>
				<div style={wallet}>
					<div style={walletButton}>Wallet</div>
				</div>
			</div>
			<h1 className="title">ZebraPunk</h1>
			<h3 className="subtitle">10,000 cute & cruel zebras living on the Solana lands. Each of them are randomly
				generated with more than 90+ hand drawn traits!</h3>
			<p className="text text-caption">Vamos a vender fleje</p>
			<div className="bottom-image"/>
		</div>
	)
}
export default Header