//the indicators
var MenDomIndicator=['Ass Worship','Fellatio','Spanking & Whipping','Hair Pulling','Verbal Humiliation','Face  Slapping','Spitting','Irrumatio','Bondage'];
var WomenDomIndicator=['ass worship','foot worship','Cunnilingus','Spanking & Whipping','Verbal Humiliation','Face  Slapping','Hair Pulling','Spitting','Urolagnia','Pegging','Bondage'];

//data about men dominance/women submission
var mainMenDom=[0,37,38,8,3,3,4,11,5];
var femMenDom=[1,26,2,2,0,0,2,1,1];
var differenceM=[-1,11,36,6,3,3,2,10,4];

//data about women dominance/men submission
var mainWomenDom=[4,1,14,0,2,1,0,7,1,0,1];
var femWomenDom=[7,4,31,4,1,1,2,4,0,4,2];
var differenceW=[-3,-3,-17,-4,1,0,-2,3,1,-4,-1];

var introduction="Feminist Pornography is believed to emerge during the 1980s, challenging the male domination in the pornography industry in the US as well as anti-pornography feminists' argument that pornography is inherently objectifying women. Feminist pornography is about revisionism, changing the myth of men and women, subverting the power dynamics in stereotype.";

//variables
var MenDomData1;
var WomenDomData1;
var betty;
var numShot=-1;

//image of betty boop
var img;

function preload(){
	img=loadImage('images/betty_boop.jpg');
}

function setup(){
    createCanvas(windowWidth,5000);
    MenDomData1=new MenDomData(differenceM);
    WomenDomData1=new WomenDomData(differenceW);
    betty=new BettyBoop();
}

function draw(){
    //the background color of the canvas
    background(15,41,48);
    
    //use intro function
    intro();
    
    //the history part
    titleHistory();
    timeline();
    specificYears();
    
    //the comparison part
    titleComparison();
    lines();
    MenDomData1.disBar();
    WomenDomData1.disBarr();
    
    if(numShot==-1){
		betty.clickMe();
	}
	if(numShot>=0){
		betty.disDef(numShot);
	}
    
	betty.showImg();
}

//the basic introduction of feminist pornography
function intro(){
    noStroke();
    textSize(22);
    textFont('Georgia');
    fill(255);
    text(introduction,90,60,1200,300);
}

//the history part
//the title of the history part
function titleHistory(){
    noStroke();
    textSize(40);
    textFont('Georgia')
    fill(230,167,215);
    var title="History of Pornography";
    text(title,690,300);
    
    //notice
    noStroke();
    textSize(20);
    textFont('Georgia')
    fill(163,117,0);
    var notice="Touch the points on the timeline to know the history of porn";
    text(notice,710,320,300,60)
}

//the timeline of the history of pornography
function timeline(){
    stroke(163,117,0);
    strokeWeight(6);
    line(300,400,300,2410);
}

//the years from ancient Greeks to 2018
function specificYears(){
    
    //the times which I display at the webpage
    var times=["Ancient Greece","Ancient Rome","Christian Church came to power","1748","1821","1873","1915","1930s","1933","1953","1968","1969","1972","late 1970s to early 1980s","1984","1989","1990s","2000s","2006","2007","2018"];
    
    var OneIntro="The Ancient Greek culture is full of sexual expressions.";
    var TwoIntro="Similar to the ancient Greece, the ancient Roman culture is surrounded by sex.";
    var ThreeIntro="When Christian churches came to power, Christianity made sex a taboo.";
    var FourIntro="Even though religions tried to repress sexual expressions, Fanny Hill, the first pornography in the form of novel, was published in 1748 in Britain because of the privatization of print.Later, Fanny Hill was transferred to America.";
    var FiveIntro="In 1821, Photography was invented. After the modern invention of photography, the photographic pornography was also born. According to Linda Williams, when the optical machines firstly came into being, women’s bodies were culturally encoded in images.";
    var SixIntro="Comstock Act, the Act for the 'Suppression of Trade in, and Circulation of, Obscene Literature and Articles of Immoral Use', was passed.";
    var SevenIntro="Stag film emerged. Stag film refers to a type of pornographic film produced secretly due to the strict censorship laws in the first two-thirds of the 20th century. Men made stag films for men.";
    var EightIntro="In 1930s, the American magazine industry was aggressive in its use of sex.";
    var NineIntro="In 1933, James Joyce’s Ulysses was allowed to distribute and print in the US.";
    var TenIntro="In 1953, Playboy was found.";
    var ElevenIntro="The time of Stag film ended.";
    var TwelveIntro="Golden Age of Porn began. Sexual expicit movies were released in cinemas, receiving attentions from the general public.";
    var ThirteenIntro="Deep Throat was released.";
    var FourteenIntro="Feminist sex wars broke out. The argument about pornography is one of the most notorious debates during the wars. Anti-pornography feminists proposed to ban pornography because it insults women. Anti-censorship feminists, also called sex-positive feminists, asserted that the male-dominated way of making pornography leading to the objectification of women, instead of pornography itself.";
    var FifteenIntro="Golden Age of Porn ended due to the increasing availability of videocassette recorders for private viewing in the 1980s. Video supplanted film as the preferred distribution medium for pornography.A group of female porn performers who worked during the golden age—including Annie Sprinkle, Veronica Vera, Candida Royalle, Gloria Leonard, and Veronica Hart—formed a support group called Club 90 in New York City. In 1984, the feminist arts collective Carnival Knowledge asked Club 90 to participate in a festival called The Second Coming, and explore the question, 'Is there a feminist pornography?'At the same year, feminists started their practice in pornography. Club 90 member Candida Royalle established Femme Production.On Our Backs was found by Myrna Elana and Deborah Sundahl, along with Nan Kinney and Susie Bright. It’s a magazine by and for lesbians.";
    var SixteenIntro="Linda Williams’ Hard Core: Power, Pleasure, and the “Frenzy of the Visible” was published, proposing that pornography is a genre.";
    var SeventeenIntro="By the 1990s, Royalle and Hartley’s success had made an impact on the mainstream adult industry. Major studios, including Vivid, VCA, and Wicked, began producing their own lines of couples porn that reflected Royalle’s vision and generally followed a formula of softer, gentler, more romantic porn with storylines and high production values. The growth of the “couples porn” genre signified a shift in the industry: female desire and viewership were finally acknowledged, if narrowly defined. This provided more selection for female viewers and more opportunities for women to direct mainstream heterosexual films, including Veronica Hart and Kelly Holland.The development of Internet led to the emergence of Internet pornography.";
    var EighteenIntro="In the early 2000s, feminist porn begin to take hold in the United States with the emergence of filmmakers who specifically identified themselves and/or their work as feminist including Buck Angel, Dana Dane, Shine Louise Houston, Courtney Trouble, Madison Young, and Tristan Taormino.";
    var NineteenIntro="The Feminist Porn Awards was established.";
    var TwentyIntro="Pornhub was launched in Montreal, providing professional and amateur photography.";
    var TwentyOneIntro="A single company, MindGeek, owns and operates many popular pornographic websites, including video sharing services Pornhub, RedTube, and YouPorn, as well as adult film producers Brazzers, Digital Playground, Men.com, Reality Kings, and Sean Cody, among others.It has been alleged to be a monopoly.";
    
    //the introductions of certain years
    var intros=[OneIntro,TwoIntro,ThreeIntro,FourIntro,FiveIntro,SixIntro,SevenIntro,EightIntro,NineIntro,TenIntro,ElevenIntro,TwelveIntro,ThirteenIntro,FourteenIntro,FifteenIntro,SixteenIntro,SeventeenIntro,EighteenIntro,NineteenIntro,TwentyIntro,TwentyOneIntro];
    
    //For every period of time, the x-coordinates are the same, but the y-coordinates are different. The array is for the y-coordinates of the periods.
    
    //    1.Ancient Greece---------------------------------400
    //    2.Ancient Rome-----------------------------------600
    //    3.Christianity came to power---------------------800
    //    4.1748-------------------------------------------1100
    //    5.1821-------------------------------------------1230
    //    6.1873-------------------------------------------1320
    //    7.1915-------------------------------------------1420
    //    8.1930s------------------------------------------1510
    //    9.1933-------------------------------------------1560
    //    10.1953-------------------------------------------1700
    //    11.1968-------------------------------------------1820
    //    12.1969-------------------------------------------1840
    //    13.1972-------------------------------------------1900
    //    14.late 1970s to early 1980s----------------------1940
    //    15.1984-------------------------------------------2040
    //    16.1989-------------------------------------------2100
    //    17.1990s------------------------------------------2140
    //    18.2000s------------------------------------------2250
    //    19.2006-------------------------------------------2290
    //    20.2007-------------------------------------------2320
    //    21.2018-------------------------------------------2410
    
    var yCoordinates=[400,600,800,1100,1230,1320,1420,1510,1560,1700,1820,1840,1900,1940,2040,2100,2140,2250,2290,2320,2410];
  
    //mouseDis is for measuring the distance between mouse and the points on the timeline
    var mouseDis;
    
    // display the points and the years
    for(i=0;i<=yCoordinates.length;i++){
        stroke(0);
        strokeWeight(10);
        point(300,yCoordinates[i]);
        
        noStroke();
        textSize(15);
        textFont('Georgia');
        fill(163,117,0);
        text(times[i],220,yCoordinates[i],80,90);
        
        mouseDis=dist(mouseX,mouseY,300,yCoordinates[i]);
        if(mouseDis<=7){
            stroke(0);
            fill(0);
            ellipse(300,yCoordinates[i],10,10);
             
            noStroke();
            textSize(18);
            textFont('Georgia');
            fill(230,167,215);
            text(intros[i],500,yCoordinates[i],600,600);
           }
    }  
    
}

//the comparison part
//the title:the comparison between femminist porn and mainstream porn
function titleComparison(){
    noStroke();
    textSize(25);
    textFont('Georgia');
    fill(230,167,215);
    var title="The comparison about gender dynamics in the framework of Dominance/submission";
    text(title,40,2800);
	
	textSize(20);
	fill(163,117,0);
	var subtitle="Male Dominance/ Female Submission";
	text(subtitle,windowWidth/2-150,3100);
	
	textSize(20);
	fill(163,117,0);
	var subtitle="Female Dominance/ Male Submission";
	text(subtitle,windowWidth/2-150,3700);
	
	textSize(30);
	textFont('Georgia');
	fill(163,117,0);
	var titleLeft="More Feminist Porn";
	text(titleLeft,windowWidth/5,2900);
	var titleRight="More Mainstream Porn";
	text(titleRight,windowWidth*3/5,2900);
}

//lines as measures
function lines(){
  
	var xPos=40;
  for(i=1;i<=9;i++){
    //lines
    stroke(255);
    strokeWeight(1);
    line(i*windowWidth/10,3050,i*windowWidth/10,4500);

		//numbers
		var xDis=10;
		
		noStroke();
		textSize(25);
		textFont('Georgia');
		fill(255);
		text(xPos,i*windowWidth/10-15,3000);
		
		if(i<5){
			xDis*=-1;
		}
		
		xPos=xPos+xDis;
  }
}

//data
function MenDomData(difference){
	this.difference=difference;
	this.xSub=0.0;
	this.xLen=0.0;
	
	//this function shows the bars whichh represent the freequency of certain kinds of shoots in porn
	this.disBar=function(){
		push();
		translate(windowWidth/2,3150);
		for(i=0;i<=this.difference.length;i++){
			if(this.difference[i]>0){
                
				//bars
				this.xSub=this.difference[i];
				this.xLen=this.xSub*windowWidth/100;
				noStroke();
				rectMode(CORNER);
				fill(150,178,247);		
				rect(0,i*55,this.xLen,25);

				//text of the names of the shoots
				stroke(255);
				strokeWeight(0);
				fill(255);
				textSize(15);
				textFont('Georgia');
				text(MenDomIndicator[i],this.xLen+10,i*55+15);
				
				//the square showing the difference
				if((mouseX>=windowWidth/2)&&(mouseX<=this.xLen+windowWidth/2)){
					if((mouseY>=i*55+3150)&&(mouseY<=i*55+3175)){
						noStroke();
						rectMode(CORNER);
						fill(0,120,247);		
						rect(0,i*55,this.xLen,25);
						
						//drawing squares
				 		stroke(0);
						strokeWeight(1);
						rectMode(CORNERS);
						fill(255);
						rect(this.xLen/2,i*55+27,this.xLen/2+150,i*55-63);
						
						//text showing the difference between feminist pornography and mainstream pornography
						fill(0);
				        textSize(12);
				        textFont('Georgia');
						rectMode(CORNER);
						strokeWeight(0);
						text("difference: "+differenceM[i],this.xLen/2+10,i*55-53,120,25);
						text("feminist porn: "+femMenDom[i],this.xLen/2+10,i*55-33,120,25);
						text("mainstream porn: "+mainMenDom[i],this.xLen/2+10,i*55-3,120,25);
						
						//if the mouse is pressed, show the definition of the certain shot
						if(mouseIsPressed){
							numShot=i;
						}
				 	}
			     }
				
			
			}else{
				//bars
				this.xSub=this.difference[i]*(-1);
				this.xLen=this.xSub*windowWidth/100;
				noStroke();
				rectMode(CORNER);
				fill(255,170,135);
				rect(-this.xLen,i*55,this.xLen,25);
			
				//text
				stroke(255);
				strokeWeight(0);
				fill(255);
				textSize(15);
				textFont('Georgia');
				text(MenDomIndicator[i],-this.xLen-140,i*55+15);
				
				//the square showing the difference
				if((mouseX>=windowWidth/2-this.xLen)&&(mouseX<=windowWidth/2)){
					if((mouseY>=i*55+3150)&&(mouseY<=i*55+3175)){
						noStroke();
						rectMode(CORNER);
						fill(255,0,135);
						rect(-this.xLen,i*55,this.xLen,25);
						
						//square
				 		stroke(0);
				 		strokeWeight(1);
				 		
						rectMode(CORNERS);
						fill(255);
						rect(-this.xLen/2,i*55+27,-this.xLen/2+150,i*55-73);
						
						//text showing the difference between feminist pornography and mainstream pornography
			 		    fill(0);
				        textSize(12);
                        textFont('Georgia');
						rectMode(CORNER);
						strokeWeight(0);
						text("difference: "+this.xSub,-this.xLen/2+10,i*55-63,110,25);
						text("feminist porn: "+femMenDom[i],-this.xLen/2+10,i*55-33,120,25);
						text("mainstream porn: "+mainMenDom[i],-this.xLen/2+10,i*55-3,120,25);
						
						//if the mouse is pressed, show the definition of the certain shot
						if(mouseIsPressed){
							numShot=i;
						}
				 	}
			 }
           }
			
		}
		pop();
	}
	
}

function WomenDomData(difference){
	this.difference=difference;
	this.xLen=0.0;
	this.xSub=0.0;
	
	this.disBarr=function(){
		push();
		translate(windowWidth/2,3710);

		for(i=0;i<=this.difference.length;i++){
			if(this.difference[i]>0){
				//bars
				this.xSub=this.difference[i];
				this.xLen=this.xSub*windowWidth/100;
				noStroke();
				rectMode(CORNER);
				fill(150,178,247);		
				rect(0,i*55+30,this.xLen,25);
				
				//text
				stroke(255);
				strokeWeight(0);
				fill(255);
				textSize(15);
				textFont('Georgia');
				text(WomenDomIndicator[i],this.xLen+10,i*55+45,50,50);
				
				//text showing the difference
				if((mouseX>=windowWidth/2)&&(mouseX<=this.xLen+windowWidth/2)){
					if((mouseY>=i*55+3740)&&(mouseY<=i*55+3765)){
						//bars
						noStroke();
						rectMode(CORNER);
						fill(0,120,247);		
						rect(0,i*55+30,this.xLen,25);
						
						//squares
				 		stroke(0);
				 		strokeWeight(1);
				 		
						rectMode(CORNERS);
						fill(255);
						rect(this.xLen/2,i*55+42,this.xLen/2+150,i*55-58);
						
						//text showing the difference between feminist pornography and mainstream pornography
			 		    fill(0);
				        textSize(12);
				        textFont('Georgia');
						rectMode(CORNER);
						strokeWeight(0);
						text("difference: "+differenceW[i],this.xLen/2+10,i*55-48,120,25);
						text("feminist porn: "+femWomenDom[i],this.xLen/2+10,i*55-28,120,25);
						text("mainstream porn: "+mainWomenDom[i],this.xLen/2+10,i*55+2,120,25);
						
						//if the mouse is pressed, show the definition of the certain shot
						if(mouseIsPressed){
							numShot=8+i;
						}
				 	}
			 }
				
			}else{
				//bar
				this.xSub=this.difference[i]*(-1);
				this.xLen=this.xSub*windowWidth/100;
				noStroke();
				rectMode(CORNER);
				fill(255,170,135);
				rect(-this.xLen,i*55+30,this.xLen,25);
				

				//text
				stroke(255);
				strokeWeight(0);
				fill(255);
				textSize(15);
				textFont('Georgia');
				text(WomenDomIndicator[i],-this.xLen-110,i*55+45);
				
				//text showing the difference
				if((mouseX>=windowWidth/2-this.xLen)&&(mouseX<=windowWidth/2)){
					if((mouseY>=i*55+3740)&&(mouseY<=i*55+3765)){
						//bars
						noStroke();
						rectMode(CORNER);
						fill(255,0,135);
						rect(-this.xLen,i*55+30,this.xLen,25);
						
						//squares
				 		stroke(0);
				 		strokeWeight(1);
			
						rectMode(CORNERS);
						fill(255);
						rect(-this.xLen/2,i*55+42,-this.xLen/2+150,i*55-58);
						
						//text showing the difference between feminist pornography and mainstream pornography
			 		  fill(0);
				    textSize(12);
				    textFont('Georgia');
						rectMode(CORNER);
						strokeWeight(0);
						text("difference: "+this.xSub,-this.xLen/2+10,i*55-48,120,25);
						text("feminist porn: "+femWomenDom[i],-this.xLen/2+10,i*55-28,120,25);
						text("mainstream porn: "+mainWomenDom[i],-this.xLen/2+10,i*55+2,120,25);
						
						//if the mouse is pressed, show the definition of the certain shot
						if(mouseIsPressed){
							numShot=8+i;
						}
				 	}
			 }
			}
		}
		pop();
	}
}

var definitions=["Body worship is any practice of physically revering a part of another person's body, and is usually done as a submissive act in the context of BDSM. Ass worship refers to the act revering someone’s butt.","Fellatio, also known as blowjob, is an oral sex act involving the use of the mouth or throat, usually performed by a person on the penis of another person.","Spanking is a common form of corporal punishment, involving the act of striking the buttocks of another person to cause physical pain, generally with an open hand.Whipping is the act of beating the human body with special implements such as whips, lashes, rods, switches, the cat o' nine tails, the sjambok, the knout, etc.","Pulling a person’s hair with hands when having sex.","Saying something to cause or attempt to cause psychological harm to someone.","Striking a person with the open palm of the hand when having sex.","Forcibly ejecting saliva (usually to the genitals) when having sex.","Irrumatio is a form of oral sex where a man thrusts his penis into someone else's mouth, in contrast to fellatio where the penis is being actively orally excited by a fellator.","In the BDSM subculture, Bondage is the practice of consensually tying, binding, or restraining a partner for erotic, aesthetic, or somatosensory stimulation.","Body worship is any practice of physically revering a part of another person's body, and is usually done as a submissive act in the context of BDSM. Ass worship refers to the act revering someone’s butt.","Foot worship is also called foot fetishism, foot partialism, foot worshipping or podophilia, which is a pronounced sexual interest in feet. Toe sucking and foot licking is a common way of expressing foot fetishism.","Cunnilingus is an oral sex act performed by a person on the female genitalia.","Spanking is a common form of corporal punishment, involving the act of striking the buttocks of another person to cause physical pain, generally with an open hand.Whipping is the act of beating the human body with special implements such as whips, lashes, rods, switches, the cat o' nine tails, the sjambok, the knout, etc.","Saying something to cause or attempt to cause psychological harm to someone.","Striking a person with the open palm of the hand when having sex.","Pulling a person’s hair with hands when having sex.","Forcibly ejecting saliva (usually to the genitals) when having sex.","Urolagnia (also urophilia, undinism, golden shower and watersports) is a form of salirophilia (which is a form of paraphilia) in which sexual excitement is associated with the sight or thought of urine or urination.","Pegging is a sexual practice in which a woman performs anal sex on a man by penetrating the man's anus with a strap-on dildo.","In the BDSM subculture, Bondage is the practice of consensually tying, binding, or restraining a partner for erotic, aesthetic, or somatosensory stimulation."];

// betty boop
function BettyBoop(){
	this.showImg=function(){
		image(img,60,3500,100,140);
		if((mouseX>=60)&&(mouseX<=160)){
			if((mouseY>=3500)&&(mouseY<=3640)){
				if(mouseIsPressed){
				stroke(0);
				strokeWeight(1);
				fill(255);
				rect(60,3100,250,330);
					
				//text
				strokeWeight(0);
				fill(0);
				textSize(12);
				textFont('Georgia');
				text('All the information from this webpage is from my research analyzing the depictions of men and women in mainstream pornography and feminist pornography in the framework of dominance and submission. I coded 50 mainstream pornographic movies and 50 feminist pornographic movies.',70,3110,230,310);
				}
			}
		}
		
	}
	
	this.clickMe=function(){
		//square
		stroke(0);
		fill(255);
		rect(60,3250,250,180);
		
		//text
		strokeWeight(0);
		fill(0);
		textSize(14);
		text('Click the bar to know the meaning of the objetification and agency indicators.',70, 3280,230,160);
		text('Click Betty without releasing to see the source of the information in the webpage',70,3340,230,80);
	}
	
    //explain the meanings of the indicators
	this.disDef=function(numShot){
		stroke(0);
		fill(255);
		rect(60,3250,250,180);
		this.numShot=numShot;
		strokeWeight(0);
		fill(0);
		textSize(13);
		text(definitions[this.numShot],70,3280,230,160);
	}

}
