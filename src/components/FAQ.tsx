import "../styles/faq.css";

const FAQ = () => {
	return (
		<section className="FAQ">
			<h2 className="Text-faq Text-title-faq FAQ-Title">
				Frequently Asked Questions
			</h2>
			<div className="FAQ-List">
				<div className="Question">
					<div className="Question-Row">
						<h3 className="Text-faq Text-subtitle-faq QuestionTitle">
							What is Golf Sol?
						</h3>
					</div>
					<p className="Text-faq Text-body-faq QuestionAnswer">
						Golf Sol is a collection of 10,000 randomly generated classic Golf
						cars running on the Solana Roads.
					</p>
				</div>
				<div className="Question">
					<div className="Question-Row">
						<h3 className="Text-faq Text-subtitle QuestionTitle">
							How long will it take to get my Golf?
						</h3>
					</div>
					<p className="Text-faq Text-body-faq QuestionAnswer">
						Your Golf will be sent immediately after the mint is completed.
					</p>
				</div>
				<div className="Question">
					<div className="Question-Row">
						<h3 className="Text-faq Text-subtitle-faq QuestionTitle">
							Which Solana wallets can I use?
						</h3>
					</div>
					<p className="Text-faq Text-body-faq QuestionAnswer">
						You may use either Phantom or Solflare wallets for minting.
					</p>
				</div>
				<div className="Question">
					<div className="Question-Row">
						<h3 className="Text-faq Text-subtitle-faq QuestionTitle">
							When is the launch?
						</h3>
					</div>
					<p className="Text-faq Text-body-faq QuestionAnswer">
						The launch date will be public soon. For now check out our twitter
						account for more information.
					</p>
				</div>
				<div className="Question">
					<div className="Question-Row">
						<h3 className="Text-faq Text-subtitle-faq QuestionTitle">
							Who are you?
						</h3>
					</div>
					<p className="Text-faq Text-body-faq QuestionAnswer">
						We are a team of three different people who share their love for
						technology and decided to commit themselves to bring the most
						special cars of the history to Solana.
					</p>
				</div>
			</div>
		</section>
	);
};
export default FAQ;
