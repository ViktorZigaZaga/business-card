import { MyCarousel } from "/src/components/Carousel";
import { certificates } from "/src/helpers/certificatesList";

const Skills = () => {
    return (
		<main className="section">
			<div className="container">
				<MyCarousel certificates={certificates}/>
			</div>
		</main>
	);
}

export default Skills;