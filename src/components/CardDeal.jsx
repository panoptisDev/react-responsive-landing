import React from "react";
import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => {
	return (
		<section className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Find a better card deal <br className="sm:block hidden" /> in few easy
					steps.
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					At vero eos et accusamus et iusto odio dignissimos ducimus qui
					blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
					et quas molestias excepturi sint occaecati cupiditate non provident.
				</p>
				<Button styles="mt-10"></Button>
			</div>
			<div className={layout.sectionImg}>
				<img src={card} alt="card" className="w-[100%] h-[100%]" />
			</div>
		</section>
	);
};

export default CardDeal;
