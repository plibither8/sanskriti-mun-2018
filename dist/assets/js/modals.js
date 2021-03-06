// INITIALISING MODALS HERE. DON'T MESS WITH THIS IF YOU DON'T KNOW WHAT YOU'RE DOING

var modal = new tingle.modal({
	footer: true,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['modal'],
	onOpen: function () {
		console.log('modal open');
	},
	onClose: function () {
		console.log('modal closed');
	},
	beforeClose: function () {
		return true; 
		return false; 
	}
});


var secModals = [];
for (var i = 0; i < 5; i++) {
	secModals[i] = new tingle.modal({
		footer: true,
		stickyFooter: false,
		closeMethods: ['overlay', 'button', 'escape'],
		closeLabel: "Close",
		cssClass: ['modal'],
		onOpen: function () {
			console.log('modal open');
		},
		onClose: function () {
			console.log('modal closed');
		},
		beforeClose: function () {
			return true; 
			return false; 
		}
	});
}

var commModals = [];
for (var i = 0; i < 8; i++) {
	commModals[i] = new tingle.modal({
		footer: true,
		stickyFooter: false,
		closeMethods: ['overlay', 'button', 'escape'],
		closeLabel: "Close",
		cssClass: ['modal'],
		onOpen: function () {
			console.log('modal open');
		},
		onClose: function () {
			console.log('modal closed');
		},
		beforeClose: function () {
			return true; 
			return false; 
		}
	});
}

var resourcesModal = new tingle.modal({
	footer: true,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['modal'],
	onOpen: function () {
		console.log('modal open');
	},
	onClose: function () {
		console.log('modal closed');
	},
	beforeClose: function () {
		return true;
		return false;
	}
});

var electronicsPolicyModal = new tingle.modal({
	footer: true,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['modal'],
	onOpen: function () {
		console.log('modal open');
	},
	onClose: function () {
		console.log('modal closed');
	},
	beforeClose: function () {
		return true;
		return false;
	}
});

var posPaperModal = new tingle.modal({
	footer: true,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['modal'],
	onOpen: function () {
		console.log('modal open');
	},
	onClose: function () {
		console.log('modal closed');
	},
	beforeClose: function () {
		return true;
		return false;
	}
});

var dressCodeModal = new tingle.modal({
	footer: true,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['modal'],
	onOpen: function () {
		console.log('modal open');
	},
	onClose: function () {
		console.log('modal closed');
	},
	beforeClose: function () {
		return true;
		return false;
	}
});

var commEmailModal = new tingle.modal({
	footer: true,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['modal'],
	onOpen: function () {
		console.log('modal open');
	},
	onClose: function () {
		console.log('modal closed');
	},
	beforeClose: function () {
		return true;
		return false;
	}
});

var resourcesEl = document.querySelectorAll("div.links a.flex");
var secCards = document.querySelectorAll('div.upper-secretariat div.card');
var commCards = document.querySelectorAll('div.committees div.card');
var electronicsPolicyLink = document.querySelector('#e-policy');
var posPaperLink = document.querySelector('#pos-paper');
var dressCodeLink = document.querySelector('#dress-code');
var commEmailLink = document.querySelector('#comm-email');






// CONTENT THAT WILL REQUIRE CHANGE STARTS HERE:



/*Upper-sec info modals*/

//Lusha
secModals[0].setContent("<h1>Lusha Jetley</h1><h2>Secretary-General</h2><p>Lusha Jetley is a grade 12 student studying Political Science, Mathematics, Economics, Psychology and English. She’s an avid debater, with a keen interest in international relations. She hopes to pursue a career in the public sphere, primarily in the fields of policy making.</p><p>When Lusha is not traversing the globe for Model UN or debate, she can be found with a camera, near the pottery wheel or with a pen, composing a poem.</p>");

//Gautham
secModals[1].setContent("<h1>Gautham Shiva Sreeji</h1><h2>Under-Secretary-General</h2><p>Gautham Shiva Sreeji is a twelfth grade student at Sanskriti School studying Commerce with Mathematics. Apart from serving as the Under-Secretary-General, he will be directing the Social, Humanitarian and Cultural Committee at Sanskriti Model United Nations 2018. He has been involved in Model UN since the seventh grade and has represented Sanskriti at conferences within the Delhi circuit and at the international level.</p><p>Outside of Model UN, Gautham enjoys playing percussion instruments and football.He loves food, travel, literature and his close family and friends.He is looking forward to meeting and providing a wonderful experience to all the delegates this April. </p>");

//Jahnavi
secModals[2].setContent("<h1>Jahnavi Sodhi</h1><h2>Director-General, General Assembly</h2><p>Jahnavi Sodhi is a twelfth grade, humanities student at Sanskriti School.Her subjects include History, Political Science, Mathematics, Economics, and English.Apart from serving as the Director General, General Assembly, she will be directing the Disarmament and International Security Committee at Sanskriti Model United Nations 2018.</p><p>She became involved in Model United Nations in the ninth grade and has ever since pursued it passionately, attending conferences hosted by schools in Delhi as well as international level conferences such as HMUN India and ILMUNC India.She has a keen interest in world politics and history, which has served as a major factor in developing her interest for Model United Nations.She loves reading classic literature, listening to music, watching movies, baking occasionally, and spending time with her family and friends.</p><p>She is looking forward to making SMUN 2018 a wonderful conference and an exciting learning experience for both the delegates as well as their directors.</p>");

//Rahul
secModals[3].setContent("<h1>Rahul Sharma</h1><h2>Director-General, Crisis Committees</h2><p>Rahul Sharma, is the Director General for Crisis Committees at Sanskriti Model United Nations Conference, 2018 and will be serving as the Chairperson for the Cabinet of the Union in the Joint Crisis Committees. He is a student of grade 12, studying Physics, Chemistry, Maths, English and Economics. Other than being a senior member of the Model UN Society at Sanskriti, Rahul is also an avid quizzer, and also enjoys playing Basketball, playing the guitar, and listening to Freddie Mercury and Queen’s music in his free time.</p>");

//Shreya
secModals[4].setContent("<h1>Shreya Singh</h1><h2>Director-General, Conference Operations</h2><p>Shreya is a 12th grader at Sanskriti School studying Science.</p><p>She's been a part of Sanskriti MUN for more than 5 years and is directing the Security Council this year.</p><p>Shreya also passionately believes that Model UN is unique in its ability to inspire leadership and understanding and is extremely excited about promoting its conference philosophy as Director General of Conference for SMUN 2018.</p>");

/*Set event listeners for on upper-sec cards for calling upper-sec modals */
secCards[0].addEventListener("click", function() {secModals[0].open()})
secCards[1].addEventListener("click", function() {secModals[1].open()})
secCards[2].addEventListener("click", function() {secModals[2].open()})
secCards[3].addEventListener("click", function() {secModals[3].open()})
secCards[4].addEventListener("click", function() {secModals[4].open()})





/*Committee Info Modals*/


// DISEC
commModals[0].setContent("<h1>Committee: Disarmament and International Security Committee</h1><h2>Agenda: Situation in Yemen</h2><h2>Size: 60 - 65</h2><h2>Executive Board: Jahnavi Sodhi and Shauryya Vira</h2><p>The First Committee of the General Assembly of the United Nations, the Disarmament and International Security Committee, deals with disarmament, global challenges, and threats to peace that affect the international community and seeks solutions to the challenges in the international security regime.It considers all disarmament and international security matters within the scope of the Charter or relating to the powers and functions of any other organ of the United Nations, the general principles of cooperation in the maintenance of international peace and security as well as those governing disarmament and the regulation of armaments, promotion of cooperative arrangements and measures aimed at strengthening stability through lower levels of armaments.</p><p>On 19 March 2015, the world’s largest humanitarian crisis broke out in Yemen.Ever since, the ongoing civil war has resulted in gross violations of human rights, thousands of deaths and injuries, widespread malnutrition, destruction of civilian infrastructure, and the largest cholera outbreak in the world.What started as an internal struggle for power between the Houthi rebels, in support of the former President Ali Abdullah Saleh, and the internationally recognized government of President Abdrabbuh Mansour Hadi, has now escalated into a proxy war, based on establishing religious hegemony, with large - scale intervention from the Saudi - led coalition, backed by the United States of America, and Iran.The civil war has led to the creation of a power vacuum in Yemen, which has resulted in the growth of both Al - Qaeda in the Arabian Peninsula(AQAP), and the Islamic State of Iraq and the Levant(ISIL).</p><p>Former President Saleh’s assassination has further complicated the situation, as the Houthi’s no longer have a prominent leader, and has thus led to a stalemate in the war.</p><p>The present situation is precarious and, with the recent stalemate, the intervention of the international community has become all the more important in order to save the lives of the millions of innocent souls trapped in this spiraling web of power struggles, which continues to pull Yemen into poverty and destruction.</p><p>As delegates of the DISEC, you will be required to critically analyze the implications of this civil war on international peace and security and decide the best course of action to deal with this escalating humanitarian crisis.</p>");

// SOCHUM
commModals[1].setContent("<h1>Committee: Social, Cultural and Humanitarian Committee</h1><h2>Agenda: A: Proliferation of Counterfeit Medication, B: Rohingya Humanitarian Crisis</h2><h2>Size: 60 - 65</h2><h2>Executive Board: Agastya Pulapaka, Daya Mehrotra, Gautham Shiva Sreeji</h2><p>The Third Committee of the General Assembly, the Social, Cultural and Humanitarian Committee is allocated items which fall under the topic of social and humanitarian affairs as well as human rights issues that affect people across the globe.As one of the main bodies of the General Assembly, the SOCHUM is expected to deliberate and discuss these issues, and provide a list of recommended actions to be taken at the end of each session.This year the SOCHUM will be focusing on two agendas:</p><li>Topic A - The Proliferation of Counterfeit Medication</li><li>Topic B - The Rohingya Humanitarian Crisis </li><h1>Topic A:</h1><p>Over the past decade there has been a notable rise in the proliferation of counterfeit medicines.The World Health Organization defines counterfeit medicines as</p><p>“One which is deliberately and fraudulently mislabeled with respect to identity and / or source.Counterfeiting can apply to both branded and generic products and counterfeit products may include products with the correct ingredients or with the wrong ingredients, without active ingredients, with insufficient active ingredients or with fake packaging.</p><p>However, the previous substandard / spurious / falsely labeled / falsified / counterfeit(SSFFC) terminology suffered from a lack of global understanding and was sometimes confused to be the phenomenon of substandard and falsified products with the protection of intellectual property rights.</p><p>Such medicines pose a threat to humanity as they do not cure any illnesses and may even cause patients’ situations to progressively worsen.Most LEDCs are the quarry markets of such medicines.One such case is that of diethylene glycol being packaged as cough syrup and causing hundreds of deaths in Bangladesh, Haiti, Nigeria, India, and Argentina.</p><p>Fraudulent or counterfeit medicines are relatively cheaper than their unadulterated counterparts, which has drawn several citizens into a trap.Not only do they deprive citizens of quality health care but also cause considerable economic losses: In 2006, $40 billion U.S.D.was lost to the drug counterfeiting business.Many pharmaceutical companies have lost their annual profits due to the allure of cheaper, counterfeit medicines.in fact, many patients look online to find cheaper substitutes.It is estimated that 50 % of fraudulent medicine that patients come in contact with are bought through an online portal.</p><p>With the impacts of globalization, tracking producers and sellers has proven to be difficult, especially in developing countries where security is weak.These medicines are counterintuitive as, Health being a major contributor to the development of human resources and development of a country, these medicines undo all efforts made by governments of these countries.</p><p>Though the mechanisms of the problem are diverse – different regions face different challenges – the proliferation of counterfeit drugs is truly a global public health issue that must be addressed with urgency. </p><h1>Topic B: The Rohingya Humanitarian Crisis</h1><p>Human rights in the Rakhine State of Myanmar have long been regarded as amongst the worst in the world.Forced labour, human trafficking, and child labour have become the norm in modern day Burma and the Burmese Military Regime have become notorious for their use of sexual violence as a method of asserting control and dominance over the men, women and children of Myanmar.This agenda is no stranger to the Third Committee, having repeatedly called upon the Burmese Military Junta to respect and recognise human rights.The Social, Cultural and Humanitarian Committee has further, in previous resolutions, 'strongly condemned the ongoing systematic violations of human rights and fundamental freedoms' and called upon the Burmese Military Regime 'to take urgent measures to put an end to violations of international human rights and humanitarian law.'</p><p>The current situation has been built over several key components, each of which need to be tackled separately.The first being the colossal humanitarian crisis that has broken out in the region.Food shortages, extra judicial killings and malnutrition are just the tip of the iceberg.The second key component to be analysed is the extreme xenophobic nationalist ideology being propagated by the Burmese Military Junta.On face value this agenda looks simple and straightforward but the technical intricacies, and consistent prior failures of the global community to combat the crisis at hand, makes this agenda one of the most complex and most urgent issues for both discussing as well as combating. </p><p>The international community must assemble and collaborate in order to create a definitive strategy to combat the evils of the Burmese Military Regime, and protect the lives of innocent stateless minorities.The question stands as; will we, as the United Nations, truly be able to tackle the conflict which has taken the lives of millions and risked the safety of millions more ?</p>");

// UNSC
commModals[2].setContent("<h1>Committee: Security Council</h1><h2>Agenda: Venezuela</h2><h2>Size: 15 - 20</h2><h2>Executive Board: Nandini Sanyal, Shreya Singh</h2><p>In 1998, socialist leader Hugo Chavez rode a wave of support to the presidency, promising popular democracy and equitable growth.After his death in 2013, Nicolas Màduro of the PSUV edged out a victory in the presidential elections but failed to anticipate the extent of a long overdue debt crisis: by 2014, Venezuela was in a recession.</p><p>Controversial economic and policy decisions have done little to develop the volatile oil - dependant economy's energy and resource sectors. Food and medical shortages have intensified since 2014 as the government struggles to address  a collapsing public health and education system. By 2016, inflation was reported to have reached almost 800%; in November 2017, Venezuela defaulted on a 60 billion dollar debt, confirming fears that it lacks the capacity to correct it's economic paralysis.</p><p>Furthermore, President Maduro's violent crackdown and subsequent  imprisonment of thousands of protesters as political prisoners has invited international outrage, prompting some to label the situation a 'humanitarian crisis'. Protesters accuse the president of attempting to undermine constitutional limits on the presidency; in 2017, attempts to erode the power of Venezuela's national legislature, the National Assembly, resulted in the creation of a new constituent assembly - one that would supersede the National legislature and rewrite Venezuela's constitution to consolidate power in the hands of its president. </p><p>Tasked with preserving the integrity of a democracy in crisis, the Security Council will explore a conflict unique to the ideological divide that has long defined Venezuelan politics.In the process, we will attempt to answer questions that drive some of the most pressing conflicts of this era: What makes a successful balance between populism and economic development ? How can international actors influence struggling regimes to exacerbate or ameliorate domestic crises ? And finally, how must the role of the UN change as the idea of democracy continues to evolve across the globe ?</p><p>NOTE : The security council is a double delegation committee.</p>");

// UNSCOP
commModals[3].setContent("<h1>Committee: United Nations Special Committee on Palestine(UNSCOP)</h1><h2>Agenda: Future of Palestine</h2><h2>Size: 30 - 40</h2><h2>Executive Board: Akanksha Sinha, Madhav Lavakare, Shivam Nanda</h2><p>The United Nations Special Committee on Palestine was created on 15 May 1947 in response to a United Kingdom government request that the General Assembly 'make recommendations under article 10 of the Charter, concerning the future government of Palestine'.The British government had also recommended the establishment of a special committee to prepare a report for the General Assembly.Five Member States(Egypt, Iraq, Syria, Lebanon, and Saudi Arabia) communicated to the Secretary - General the request that the following additional item be placed on the agenda of the special session: 'The termination of the Mandate over Palestine and the declaration of its independence.' The General Assembly eventually adopted the recommendation at its seventieth and seventy - first plenary meetings, and the UNSCOP was established on 15th May 1947 for a fixed period of 3 months(the report was to be submitted by 1st September 1947) to investigate the cause of the conflict in Palestine, and, if possible, devise a solution.</p><p>The Special Committee on Palestine will hold its first meeting at the interim headquarters of the United Nations at Lake Success, New York, on Monday, 26 May 1947. Presiding over the first meeting, the Secretary - General of the United Nations welcomed the Committee and spoke of the importance of its task.The members will receive the first three volumes of the 'Working documentation on Palestine' prepared by the 57 member Secretariat designated by the Secretary General.The UNSCOP will hold several public as well as private meetings until 31st August, 1947, the day on which the report must be signed.These meetings will take place in several locations, ranging from Jerusalem to Beirut to Geneva.The United Nations Special Commission on Palestine is set to reach Palestine on the 14th and 15th of June to investigate Palestine and gather further insight that is imperative in devising a foolproof solution to the situation.</p><p>It is in this emotional atmosphere that UNSCOP was discussing the fate of the Palestinians.The Arab Higher Committee was convinced that the independence of Palestine was not the UNSCOP’s main priority.Now, delegates, it is your responsibility as the leaders of various nations to come up with decisive and resolute actions to decide the fate of Palestine, and perhaps of the entire Middle East.</p>");

// ARAB LEAGUE
commModals[4].setContent("<h1>Committee: The Arab League</h1><h2>Agenda:</h2><li>Topic A - Status quo and future of Oil Market</li><li>Topic B - Unemployment in Arab League members</li><h2>Type: Specialised Agency</h2><h2>Size: 22 members</h2><h2>Executive Board: Abhisri Nath, Sugandhana Ahluwalia and Vidisha Madan</h2><h1>TOPIC A - STATUS QUO AND FUTURE OF OIL MARKET</h1><p>The recent oil prices have noted a drop off the three year high due to a classic imbalance in demand and supply leading to constant fluctuations of oil prices.Demand grew at a moderate rate due to overall economic slowdown around the world, however, supply continued to soar, resulting in a massive drop in Oil Prices.</p><p>US West Texas Intermediate has recorded a highest closing since 2014. The enormous numbers translate to a highest daily average since 1970 in terms of production of crude oil per barrel.Clearly United states is taking over the market that once seemed to be in the grip of the middle eastern countries.The countries like Iraq, Iran, Saudi Arabia and Kuwait have been an integral part of the market ever since they have started as the founders of OPEC.Sixty five percent of the OPEC total of proven oil reserves are situated in the Middle eastern countries.This speaks volume of their potential in the market.There has been a monopoly of these countries which lead to maximum demand being diverted to these suppliers.However, with US emerging as a competitor in the global market, the Middle Eastern countries must look at revised plans and policies.The constant fluctuations of the oil prices have pushed the OPEC countries to begin with their curbing activities but the challenge remains.</p><p>The problem now, is how the Oil producing Middle Eastern / Gulf countries sustain their usual economies and general standards of living that they have been used to.This has had a similar cascading effect on the countries associated with them.The challenge now is how to address this issue without disrupting peace in those countries.</p><h1>TOPIC B - UNEMPLOYMENT IN ARAB LEAGUE ARAB MEMBERS</h1><p>High levels of unemployment are a challenge for the Arab countries’ economies and increasing unemployment over the past two decades has led to frustration among the population, especially the youth and women, due to perceptions of their roles in society.Women in the Arab countries have emerged as the main victims of a festering unemployment problem in the region mainly because of poor investment and social barriers.One of the numerous impacts of such a glaring gap in employment is the increase in the informal economy.This refers to untrackable economic activity.These jobs have horrible conditions, no benefits and negligible regulatory oversight.Youth unemployment along with other factors led to the protests and revolutions in multiple countries and the violent destruction of multiple regimes such as those of Tunisia, Libya and Egypt.</p><p>A recent report sponsored by the International Finance Corporation(IFC) and the Islamic Development Bank shows that the economic loss due to youth unemployment exceeds US$40 - 50 billion annually across the Arab world.This situation is typical in countries where education and training systems are not adequately linked to the skills required by the economy, including its most promising growth sectors.Youth unemployment in countries like Egypt, Syria, Tunisia, and Yemen will rise in the future as a consequence of the current economic and social deadlock they are facing.</p><p>As a community that fosters the well being of its people and systems, whether in the social sphere or the economic sphere, we must address this issue at the earliest and bring in stability.It is us - the Arab League who sail into the glory of development.</p><p>For further queries about MUN, agendas or committee in general, please contact us at arableague2018@sanskritimun.in.We look forward to interacting with all of you.See you in April!</p>");

// AIPPM
commModals[5].setContent("<h1>Committee: All India Political Parties Meet</h1><h2>Size: 45</h2><h2>Executive Board: Natasha Singh, Zinnia Aurora</h2><h2>Agenda: Reviewing the National Security Act</h2><p>The National Security Act, 1980, is an act of the Indian Parliament promulgated on 23 September, 1980 whose purpose is 'to provide for preventive detention in certain cases and for matters connected therewith'.The act extends to the whole of India except the State of Jammu and Kashmir.</p><p>The Charan Singh - era law permits the government to infinitely and criminally detain any person who may be acting in a manner that poses a threat to peace & security in the Indian homeland, a definition that encompasses foreigners in such exceptional circumstances also.</p><p>The exercise of the NSA in recent times has stirred up controversy.Legally ambiguous and unfettered by the either the relevance or the necessity of the criminal detention in question, it stands as a dangerous reminder of the tools of repression used to silence the masses in a pre - independent era.A list of detentions under the NSA reads like a scroll of the some of the fiercest political dissenters, the harshest critics of the executive, the staunch believers in constitutionalism in contemporary times.Is the NSA merely a means for the shifting political agendas of the powers that be ? Or is it an aberration that galvanizes, and indeed, allows the government to use repressive strategies against the racketeers and activists alike ?</p><p>It is time to review what is increasingly being denouncedas an anachronism, and to divest it of these very dangerous gratuities.</p><p>In this simulation, we expect the representatives of the Indian electorate to come forth and collaborate & create, to discuss, debate & dissent, and to seal the fate of the most scrutinized price of legislation in modern history.</p>");

// JCC
commModals[6].setContent("<h1>Committee: Joint Crisis Cabinet</h1><h2>Size: 15 - 20 per cabinet</h2><h2>Agenda: American Civil War</h2><h2>Executive Board: Confederacy - Tanvee Shehrawat, Agastya Singh and Madhav Sharma</h2><h2>Union - Rahul Sharma and Ayushman Somani</h2><h1>THE UNION VS.THE CONFEDERATION</h1><p>The American Civil War, the deadliest war the American soil ever had to witness, the conflict that would define ideals, and redefine the world, is no light matter.The war that finally established that under the virtue of god and all that is his, all men are created equal, and thus deserve to be respected as equals, that every man had the right to life and liberty, that every man so deemed capable shall pursue to better his life and thus shall not be a pawn, an object anymore - this war of men, ideas, beliefs, institutions, leaders, is no light matter</p><p>This war, officially beginning on the 12th of April, 1861, with the invasion of Fort Sumter by the Southern States, was the result of tension, which was very much palpable in American air because of the striking differences in the mindsets of the Northerners and Southerners with regards to the rights of the slave - owners and the slaves themselves, with significant focus on the westward expansion of either of the two sides.One of the major contributing factors, as is in any great conflict, is the economic setup of the fighting sides.USA at this point of time in history was witnessing an unprecedented growth in industry and manufacturing, with main centres in the northern states.The south, an agro - cultivation centred economy, heavily relied on the labour - intensive cotton and tobacco fields as source to livelihood, dependent on slavery to maintain the socio - economic stability of the area</p><p>With the abolitionist movement gaining exponential momentum and rapidly spreading to the western fronts as well, the southern states believed this to be a threat to not just their societal orientation, but to their lives as well.In 1854, the U.S.Congress passed the Kansas - Nebraska Act, which essentially opened all new territories to slavery by asserting the rule of popular sovereignty over congressional edict.Pro - and anti - slavery forces struggled violently in “Bleeding Kansas, ” while opposition to the act in the North led to the formation of the Republican Party, a new political entity with only one motive of existence, and that was to prevent slavery from spreading to the western territories at any cost.This convinced more and more southerners that their northern neighbours were bent on the destruction of the “peculiar institution” that sustained them.Lincoln’s election in November 1860 was the final straw, and within three months seven southern states–South Carolina, Mississippi, Florida, Alabama, Georgia, Louisiana and Texas–had seceded from the United States</p><p>Though on the surface the Civil War may have seemed a lopsided conflict, with the 23 states of the Union enjoying an enormous advantage in population, manufacturing(including arms production) and railroad construction, the Confederates had a strong military tradition, along with some of the best soldiers and commanders in the nation.They also had a cause they believed in: preserving their long - held traditions and institutions, chief among these being slavery.This battle was more than just a violent exchange, it laid the foundation for all out war.At this time in history, the world had never seen the use of modern armaments such as muskets and artillery at this scale and looked on with curiosity to see how this conflict would end, and if it would end at all.These weapons had the ability to annihilate entire platoons, and thus this war was the first time in our history that we were causing more damage under the banner of ideology than we ever had before</p><p>Wield the power to shape the future of present day United States of America, remember to use it wisely if you wish to outsmart the other side</p><p>Prove to the world what you stand for.Remind the people of your nation what it stands for.</p><p>Step out of the grey into the bright and show America the dawn of a new day</p><p>Join the JCC at Sanskriti MUN 2018.</p>");

// UNCA
commModals[7].setContent("<h1>Committee: United Nations Correspondents Association(UNCA) / Press Corps</h1><h2>Type: Specialised Agency</h2><h2>Editor - in -Chief: Ananya Jain</h2><h2>Editors: Diya Srivastva, Bhavya Pandey</h2><h2>Heads of Photography: Samriddhi Dube, Sana Singh</h2><h2>Head of Cartoonists: Jyotsna Pandit</h2><h2>Contact: unca2018 @sanskritimun.in</h2><p>Founded in 1948 with a mere 50 members, the United Nations Correspondents Association is a professional body in charge of representing the United Nations Press Corps and the Secretary General.Today, the UNCA consists of 250 journalists and several major global news agencies and broadcasters from all over the world.</p><p>The UNCA, or the Press Corps, as it is called at most Model United Nations conferences, is perhaps the most unique of the committees at any MUN, in that it allows for unparalleled creativity and flexibility.This year, the committee will consist of journalists, cartoonists and photographers, all of whom form the very backbone of the conference.</p><p>The journalists will be charged with the responsibility of using the myriad media forms at their disposal– both textual and audio - visual– to analyse, critique and spark intellectual debate, hence playing an instrumental role in the shaping of committee discussions and the conference at large.As members of the UNCA, they will be allotted news agencies, and be expected to adhere to the biases and work dynamic of their respective agencies, whilst covering the two committees assigned to them.At Sanskriti MUN, we expect them to strive to rise above being mere reporters transcribing the happenings of committee; proving instead their worth as journalists, with a role as crucial as it is in democratic societies.</p><p>Journalists will also engage in press conferences, giving them the opportunity to hold the delegates accountable for everything they say and do in committee.Furthermore, they will partake in debate and discussion as representatives of their respective news agencies, in response to an exhilarating and intellectually stimulating crisis concerned with the intricacies of the printing press, that will unfold over the course of the conference, and have to be countered as a united organ.</p><p>This year, we introduce a Position Paper requirement through which journalists will be expected to detail the history of their allotted news agency, its relative bias and its relationship with the themes to be addressed during the conference, requiring them to be thoroughly researched in the nuances of their agency, as well as their two allotted committees.</p><p>Witty, satirical and humorous without being directly critical, political cartoons give great perspective in very little space.A cartoon is not simply a piece of artwork– it is a visual form of political analysis that asserts the right to freedom of expression possessed by the press.Cartoonists will be assigned the role of freelance workers, who will provide a bird’ s eye view of the diplomatic quandaries unfolding within the doors of the committees, whilst maintaining a light - hearted and satirical approach.Further, cartoonists shall be presented with a crisis simulation as well, which would require them to create cartoons with the aim of tackling the same.</p><p>Photographers will move from committee to committee, capturing the very essence of the conference by endeavouring to tell a story through each photograph they take.</p><p>The work of the UNCA will be published in the newsletter and be put up on the blog, serving both as a means of information as well as a medium of acquiring perspective.</p><p>In conclusion, know this: the magic you weave through your words, the cartoons you make and photographs you take at Sanskriti MUN 2018 will outlast the faded voices of delegates that once occupied committee rooms– they will remain long after the last of you shuffle out of the school gates and move on to whatever comes next, and in that lies the appeal of this beautifully chaotic committee.</p><p>Feel free to contact us should you have any queries.We look forward to seeing you this April!</p>");

/*Set event listeners for on committee cards for calling upper-sec modals */
commCards[0].addEventListener("click", function () {commModals[0].open()})
commCards[1].addEventListener("click", function () {commModals[1].open()})
commCards[2].addEventListener("click", function () {commModals[2].open()})
commCards[3].addEventListener("click", function () {commModals[3].open()})
commCards[4].addEventListener("click", function () {commModals[4].open()})
commCards[5].addEventListener("click", function () {commModals[5].open()})
commCards[6].addEventListener("click", function () {commModals[6].open()})
commCards[7].addEventListener("click", function () {commModals[7].open()})


// Resources Modal

resourcesModal.setContent("<h1>Background Guides</h1><li><a href='/assets/docs/bgg/sochum-bgg.pdf'>Social, Cultural and Humanitarian Committee</a></li><li><a href='/assets/docs/bgg/disec-bgg.pdf'>Disarmament and International Security Committee</a></li><li><a href='/assets/docs/bgg/unsc-bgg.pdf'>United Nations Security Council</a></li><li><a href='/assets/docs/bgg/unscop-bgg.pdf'>United Nations Special Committee on Palestine</a></li><li><a href='/assets/docs/bgg/aippm-bgg.pdf'>All India Political Parties Meet</a></li><li><a href='/assets/docs/bgg/arableague-bgg.pdf'>The Arab League</a></li><li><a href='/assets/docs/bgg/jcc-bgg.pdf'>Joint Crisis Cabinet</a></li><li><a href='/assets/docs/bgg/unca-bgg.pdf'>United Nations Correspondents Association</a></li><p>Password: <code>mozart18</code></p><ul><li><a href='/assets/docs/bgg/jcc-update-union.pdf'>JCC Union Update Paper</a></li><li><a href='/assets/docs/bgg/jcc-update-confed.pdf'>JCC Confederacy Update Paper</a></li><li><a href='https://drive.google.com/open?id=1490Cfmwk3i8Wg2tUPtcviI3y2VRxaE8p'>JCC Portfolio Dockets</a></li></ul><h1>Matrices</h1><li><a href='https://docs.google.com/spreadsheets/d/16I9BV6eJia4kUK33YcktXbtMST_ODYEsJGTyjXsQiTA/'>Social, Cultural and Humanitarian Committee</a></li><li><a href='https://docs.google.com/spreadsheets/d/1yoV2hv45Dhhd-1GrpErg-ptiGB5ptjTtuOEBCxD6yrY/'>Disarmament and International Security Committee</a></li><li><a href='https://docs.google.com/spreadsheets/d/1eOOOiGjqyU2KRV4sln8_JkbJsPtu1F47pUJOXdxKIlI/'>United Nations Special Committee on Palestine</a></li><li><a href='https://docs.google.com/spreadsheets/d/1xBiJM9Ffr3CTlMNj36roZjX3AeI_WKibbUGxsUB2qTU'>All India Political Parties Meet</a></li><li><a href='https://docs.google.com/spreadsheets/d/1yFl7KP7ZEhzNIj732rrEObSq84S-7FoAm15IP-4vhJM'>The Arab League</a></li><li><a href='https://docs.google.com/spreadsheets/d/1LltqyAHcKNOkwqUbOa-y7_uLoSCqDyyaVGpt0gVRwH8/'>Joint Crisis Cabinet</li><li><a href='https://docs.google.com/spreadsheets/d/1BVt5IEMtss5F5ZxFqs2ypfdKExfTaf5i6QeB2VmdDuc/'>Security Council</a></li><li><a href='https://docs.google.com/spreadsheets/d/16ONAmNTERgHtghCpnMLm2JZTI052g7E5BEViz0Vb_VU/'>United Nations Correspondents Association</a></li>");
resourcesEl[0].addEventListener("click", function() {resourcesModal.open()})

electronicsPolicyModal.setContent("<h1>Electronics Policy</h1><p>Delegates are not allowed to use electronic devices while in committee. They are expected to print their research material and carry it. All paperwork submitted must also be handwritten, not typed (except for position paper). Usage of electronics in committee, unless in the case of emergency and permitted by the executive board, will result in disqualification from the awards process.</p>")
electronicsPolicyLink.addEventListener("click", function() {electronicsPolicyModal.open()})

posPaperModal.setContent("<h1>Position Paper Deadline</h1><p>Individual delegates who received their allotments by the 13th of April are to submit their position papers by <strong>18th April, 2018</strong></p><p>Individual delegates who received their allotments post 13th April may submit their position papers by <strong>24th April, 2018</strong></p>")
posPaperLink.addEventListener("click", function() {posPaperModal.open()})

dressCodeModal.setContent("<h1>Dress Code</h1><p>The dress code to be followed by Sanskriti MUN will be:</p><ul><li>Wednesday, 25th April: Western Formal</li><li>Thursday, 26th April: Western Formal</li><li>Friday, 27th April: Indian</li></ul><p>Nevertheless, the delegates are welcome to wear either Indian or western formals as they like.</p>")
dressCodeLink.addEventListener("click", function() {dressCodeModal.open()})

commEmailModal.setContent("<h1>Committee Email IDs</h1><p>Directly get in contact with your committee directors by mailing them to the respective email ID:</p><ul><li>SOCHUM: <a href='mailto:sochum2018@sanskritimun.in'>sochum2018@sanskritimun.in</a></li><li>DISEC: <a href='mailto:disec2018@sanskritimun.in'>disec2018@sanskritimun.in</a></li><li>UNSC: <a href='mailto:unsc2018@sanskritimun.in'>unsc2018@sanskritimun.in</a></li><li>UNSCOP: <a href='mailto:unscop2018@sanskritimun.in'>unscop2018@sanskritimun.in</a></li><li>League of Arab States: <a href='mailto:arableague2018@sanskritimun.in'>arableague2018@sanskritimun.in</a></li><li>JCC: <a href='mailto:jcc2018@sanskritimun.in'>jcc2018@sanskritimun.in</a></li><li>AIPPM: <a href='mailto:aippm2018@sanskritimun.in'>aippm2018@sanskritimun.in</a></li><li>UNCA: <a href='mailto:unca2018@sanskritimun.in'>unca2018@sanskritimun.in</a></li></ul>")
commEmailLink.addEventListener("click", function() {commEmailModal.open()})