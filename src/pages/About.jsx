import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
	return (
		<div>
			<div className="text-2xl text-center pt-8 border-t">
				<Title text1={"ABOUT"} text2={"US"} />
			</div>

			<div className="my-10 flex flex-col md:flex-row gap-16">
				<img
					className="w-full md:max-w-[450px]"
					src={assets.about_img}
					alt="about me image"
				/>
				<div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Earum autem in ex. Accusamus dolores vero
						assumenda ea laboriosam. Incidunt, obcaecati voluptatem.
						Sunt sit illum provident corrupti inventore repellendus
						laudantium fugiat.
					</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Iusto possimus similique vero dolorem fuga iste,
						perferendis iure animi atque maxime quasi adipisci
						molestiae ipsam autem consequuntur ratione laboriosam
						tempore corporis.
					</p>
					<b className="text-gray-800">Our Mission</b>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis eius ipsum porro sequi incidunt! Similique
						eveniet aut facere sit aperiam accusamus sapiente,
						aspernatur voluptas eligendi, repudiandae quidem
						suscipit nostrum reiciendis.
					</p>
				</div>
			</div>
			<div className="text-4xl py-4">
				<Title text1={"WHY"} text2={"CHOOSE US"} />
			</div>

			<div className="flex flex-xol md:flex-row text-sm mb-20">
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
					<b>Quality Assurance:</b>
					<p className="text-gray-600">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Cumque sequi possimus nisi, adipisci quo fuga
						optio in. Cupiditate dolor aliquid quia cumque possimus,
						cum delectus magni? Dolorem voluptatem dignissimos
						impedit!
					</p>
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
					<b>Convenience:</b>
					<p className="text-gray-600">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Cumque sequi possimus nisi, adipisci quo fuga
						optio in. Cupiditate dolor aliquid quia cumque possimus,
						cum delectus magni? Dolorem voluptatem dignissimos
						impedit!
					</p>
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
					<b>Exceptional Customer Service:</b>
					<p className="text-gray-600">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Cumque sequi possimus nisi, adipisci quo fuga
						optio in. Cupiditate dolor aliquid quia cumque possimus,
						cum delectus magni? Dolorem voluptatem dignissimos
						impedit!
					</p>
				</div>
			</div>
			<NewsletterBox />
		</div>
	);
};

export default About;
