const W = (weight, extra = {}) => ({ weight, hunger: -8, ...extra });

export const rosa = {
  id: 'rosa',
  name: 'Rosa Delgado',
  age: 29,
  role: 'Chef and owner of Cazuela',
  hairStyle: 'curls',
  accent: '#c46a3a',
  hair: '#2a140e',
  skin: '#c98462',
  blush: '#e07a62',
  baseWeight: 158,
  startStage: 4,
  metabolism: 6,
  activity: () => 1.2,
  start: { affection: 26, trust: 18, dependency: 16, acceptance: 30 },
  bio: 'Rosa runs Cazuela, a supper club that smells like chile and orange and the kind of butter people write home about. She is warm, curly, already soft from a life of tasting, and incapable of feeding anyone without feeding herself. She calls you honey when she forgets to be careful. She remembers her mother’s mole by heart and will teach it to you with her hands over yours, which is how she says stay.',
  refuseStrong: 'She puts the vial back in your palm and kisses the knuckle to soften it. “I want the pot, not the needle. If you can’t say it with food, it’s not for my kitchen.”',
  refuseExtreme: '“That thing is for a different kind of hunger.” She shakes her head, curls bouncing. “Ask me when I’ve already said yes with my mouth full. Not before. I’m generous, not careless.”',
  reactions: {
    pastry: [
      'She breaks it, critiques the lamination, and eats all the evidence. “Street. Fine. Mine now.”',
      'The tart vanishes between services. She pats the curve under her apron. “Don’t tell the line. Or do. They know.”',
      'You set it where she can reach. She eats slowly, eyes soft. “You brought me something sweet that isn’t a ticket. Come here.”',
    ],
    honey: [
      '“Orange blossom trying to hide clinic sugar.” She licks the spoon. “Pour it in the tea. Then pour me more tea.”',
      'Honey on her lip, she makes you taste it. “See? Too loud. I’ll still finish the jar.”',
      'She drinks from the jar you hold, a hum in her chest that moves the rest of her. “Ay. Again. And don’t be shy with the spoon.”',
    ],
    feast: [
      '“Finally, a board with a spine.” She builds you a bite and then eats three of her own before you finish it.',
      'She unties the apron halfway through and lets her stomach out like a guest. “Eat. I’m not a museum.”',
      'The board rides a tray across her. She clears it, magnificent, and taps the empty wood. “Again tomorrow. Bring someone who can keep up or don’t.”',
    ],
    still: [
      'She turns the capsule over. “A pause is not an insult if you stay for the pause.” She takes it.',
      '“If this is you scared of me, say so. If it’s my knees, fine.” She swallows with tea. “It’s the knees. Good.”',
      '“It won’t make me small. Good, I don’t want small. It will let me breathe while the pot finishes. That’s love. Don’t ruin it.”',
    ],
    nectar: [
      'She drinks and laughs. “Peaches and bad decisions. I should put it in a salsa and I should not. Pour another.”',
      'Two glasses and she is tasting everything in reach, including your thumb. “This is a problem. Leave the bottle.”',
      'You hold the glass. She drinks, throat working, hand on the great swell as it answers. “More. The kitchen can wait. I can’t.”',
    ],
    spike: [
      'She knows hunger; this is hunger with the volume up. She eats standing, then not standing. “You did this. Stir the pot. I’m busy.”',
      '“Stay in the kitchen,” she says, bright-eyed, almost angry with want. “If you leave I’ll eat the mise and I’ll blame you in public.”',
      'It empties the performance. She opens her mouth for the spoon and moans, honest, curls stuck to her cheek. “Again. Don’t make me host.”',
    ],
    keel: [
      '“Hip. The one I lean on. And wash your hands, this is still a kitchen.” The patch goes on. She shivers.',
      'She smooths it over a softness the chef’s coat no longer closes. “So I keep what I cook. That’s honest.”',
      'You need both hands along her side. She watches, fond and huge. “Find skin, honey. I’m mostly result. That’s not a complaint.”',
    ],
    cradle: [
      'She eyes the straps like a new stove. “Looser. And you, where I can scold you. I’m not doing this like a patient.” Then she eats like a feast.',
      'The rig creaks and she laughs, delighted, overflowing the guess. “Tell Liora her measurements are shy. Don’t stop the line.”',
      'Extended, she fills it, a chef in a machine she has decided to love. “Hand. And the next course. I’m not full. I’m occupied.”',
    ],
    bloom: [
      'She reads the label the way she reads a questionable fish. Then she offers her arm. “If it works, we celebrate. If it works too well, we celebrate bigger.”',
      'The serum goes in. She looks down, curious, already hungry. “Ay. Stay. I want a witness with good taste.”',
      'You dose her where she rests. She nods, eyes wet, smile huge. “Let it bloom. I didn’t learn to feed people so I could stay the same size as a photograph.”',
    ],
    loom: [
      'She gossips with the fitter and orders a cook’s wrap in a color that can survive chile. “Measure the belly. It’s not a rumor.”',
      '“Two sizes up from what you think,” she says, cheerful. “I know my own oven.”',
      'They drape her on the chair she lives in. She picks terracotta. “If I can’t stand the line, the line can come to a woman who looks like she meant to be fed.”',
    ],
    sling: [
      '“A winch in my kitchen.” She tries it and goes quiet at the relief. “Okay. Paint it something that isn’t a hospital. I’ll allow the help.”',
      'She lifts her arms as far as they go. “Tighter. I want to stir, not hover. You can do the rest of the reaching.”',
      'Clipping her in is morning service. “This is how I cook now,” she says. “Don’t pity the spoon. Kiss me and hand me the salt.”',
    ],
    aerosol: [
      'She smells the room and grins. “You seasoned the air. I’m staying and I’m making breakfast that will make it worse.”',
      '“Everyone who sleeps here gets hungrier? Honey, that’s just my house.” She stays.',
      'She inhales, vast on the bed, pleased. “Good. Let the room be a cook. Then you be the cook. I want both.”',
    ],
  },
  texts: {
    early: [
      'Come before service. I’ll feed you and pretend it’s a favor you owe me.',
      'The mole is almost right. It needs your mouth on a spoon. Professional reasons.',
      'I tasted the flan four times. This is quality control. Are you coming or not?',
      'Honey. That was accidental. Come anyway.',
    ],
    mid: [
      'The coat doesn’t button and the soup doesn’t care. Neither do I. Come eat.',
      'I got stuck between a crate and my own idea. Funny later. Bring bread.',
      'New coats ordered. I will outgrow the note. You can watch.',
      'Sunday pot. If you are late I start without you and you will hear about it.',
    ],
    late: [
      'I can’t reach the top shelf and I refuse to want less. Come be tall.',
      'Service is from the chair today. The chair is me. You know where.',
      'Bring the market to me. I’ll tell you what to do with it. Bring yourself first.',
      'Don’t be gentle with the portions. Be gentle with me. Different assignments.',
    ],
  },
  ambients: {
    early: [
      {
        title: 'Family meal',
        prose: 'From the alley you see Rosa at the pass, already softer than her coat, eating the family meal standing up and talking a cook through a sauce without looking away from the spoon.',
        choices: [
          { label: 'Go in through the alley.', effects: { affection: 2, weight: 4 }, reply: 'She puts a spoon in your mouth before hello. “Good. You’re on time for once. Eat, then kiss me, the sauce can handle the truth.”' },
          { label: 'Leave a better loaf and go.', effects: { trust: 1, affection: 2 }, reply: 'She texts a photo of the loaf, half gone, and the words: coward, but a useful one. Tomorrow you stay.' },
        ],
      },
      {
        title: 'Flour',
        prose: 'A handprint of flour on her hip, photographed by her own phone and sent without caption. The hip is already rounder than the print.',
      },
    ],
    mid: [
      {
        title: 'The order',
        prose: 'She forwards a tailor’s confirmation: two coats, generous. Under it she has typed, I will need a third. Don’t say I told you so unless you bring lunch.',
        choices: [
          { label: 'Bring lunch and say nothing smug.', effects: { weight: 8, affection: 3, acceptance: 2 }, reply: 'She eats the lunch and kisses you with a clean mouth after, which means she planned the kiss. “Third coat,” she says. “You can be smug in the hallway.”' },
          { label: 'Offer to pay for the third.', effects: { money: -25, affection: 3, trust: 2 }, reply: '“Don’t buy my clothes like I’m a project.” A beat. “Pay half. And stay while I get measured. I want a witness with a crush.”' },
        ],
      },
      {
        title: 'Aisle',
        prose: 'A voice note, laughing: “I’m in the market and the market is smaller than it was in May. If you are nearby, bring your shoulders. I need a path and I need the good cheese.”',
      },
    ],
    late: [
      {
        title: 'Service, seated',
        prose: 'Cazuela’s board lists a note in Rosa’s round hand: the chef is receiving in the kitchen and the kitchen will come to the table. No one is to comment on the chair. Everyone is to eat.',
        choices: [
          { label: 'Show up and eat what she points at.', effects: { weight: 10, affection: 3, dependency: 2 }, reply: 'She points, you eat, she eats more, the room behaves. After close she keeps you. “You didn’t comment,” she says. “That’s why you get the last bite and the walk home. The walk is a car. Don’t ruin it.”' },
          { label: 'Show up early and help her into the chair.', effects: { trust: 3, affection: 4, dependency: 2 }, reply: 'The help is quiet and she is grateful in a way that comes out as extra dessert and your name said softly. “This is the service,” she says. “You’re in it.”' },
        ],
      },
      {
        title: 'Spoon',
        prose: 'She sends a picture of a spoon on a tray on the high curve of her belly, and the text: I can reach this one. Be proud of me. Also come, because I can’t reach the pot.',
      },
    ],
  },
  overnight(woman, day) {
    const early = [
      'She tasted the sauce until the sauce was a meal.',
      'A new softness under the apron. She patted it like a pet.',
      'Family meal twice. She called the second one quality control.',
      'She sent you a spoon emoji and a picture of an empty pot.',
    ];
    const mid = [
      'The chef’s coat stayed open. The soup was perfect.',
      'She sat to finish a prep she used to do standing and did not apologize.',
      'Market bags cut into her hands. She still bought the heavy cream.',
      'Two dinners, one “for the recipe,” both real.',
    ];
    const late = [
      'Service happened around her. She ate the parts the dining room doesn’t see.',
      'She directed a sauce from the chair and napped in the same chair, full.',
      'A cook reached the top shelf. She said thank you and meant it and ate.',
      'The pot came to the bed. So did she, which is to say she never left it, and the pot understood.',
    ];
    const pool = woman.stage >= 9 ? late : woman.stage >= 5 ? mid : early;
    return pool[day % pool.length];
  },
  tableLine(woman) {
    const s = woman.stage;
    if (s >= 9) return 'Rosa is already at the head, because the head is wherever they set her chair. Terracotta cloth over an immense lap, curls pinned, she waves you in with a spoon. “Sit. I cooked. I also started. Those are both love.”';
    if (s >= 5) return 'Rosa sits wide and pleased, chef’s coat open over a belly that has joined the table setting. She pushes the best plate toward you and then takes a larger one without drama.';
    return 'Rosa has flour on one cheek and a soft, sure body already rounding the chair. She taps the empty plate in front of you. “Finally. I was about to feed it to someone less pretty.”';
  },
  stages: [
    {
      outfitName: 'Chef’s coat, double wrap',
      mobilityTag: 'The line, all night',
      mobility: 'She works a service on her feet and still has a sway left for the walk home.',
      body: 'Even at her smallest in this story, Rosa is not small. Soft hips, a stomach that rounds when she laughs, breasts that fill the tank she wears under the coat, thighs that brush in the narrow kitchen. Curls pinned up, gold hoops, a mouth always a second from smiling or tasting. Flour lives in the creases of her knuckles. She is strong from lifting stock pots and generous from lifting them toward other people.',
      clothing: 'The chef’s coat wraps and still meets. Apron strings tie in a bow at the small of a back that is already a curve. Clogs. A tee that doesn’t quite hide the softness when she stretches for a high shelf. She looks like the kitchen’s good idea.',
      talk: {
        line: '“You’re early, which means you want to be fed, which means you’re learning. Taste this and tell me the truth. If you lie I’ll know. I always know.”',
        choices: [
          { label: 'Tell the truth. It needs salt and you need her.', effects: { affection: 3, trust: 2 }, reply: 'She cackles, salts it, and kisses you over the pass. “Correct on both counts. Don’t get cocky. Eat.”' },
          { label: 'Ask for the spoon and a second spoon.', effects: W(5, { affection: 2, dependency: 1 }), reply: 'Two spoons. She eats the larger one without pretending otherwise. “This is how you court me,” she says. “Don’t switch tactics. You’ll only get worse at it.”' },
          { label: 'Offer to wash while she plates.', effects: { trust: 3, affection: 2 }, reply: 'She allows the help, which is intimacy. Halfway through service she bumps your hip with hers, soft, on purpose. “Stay for family meal. That’s not a request from a stranger.”' },
        ],
      },
      event: {
        title: 'The spoon',
        prose: 'After service she eats standing at the pass, coat open, a spoon and the last of the pork. You watch the softness of her stomach move when she laughs at a cook’s story. She catches you. “It’s not a show,” she says, not angry. “It’s dinner. If you want a show, take me home and I’ll give you a better one. If you want dinner, pull up a crate.” The crate creaks. She doesn’t.',
        choices: [
          { label: 'Pull up a crate.', effects: W(6, { affection: 3, trust: 2 }), reply: 'You eat with her in the wreckage of service. She feeds you the best bite and takes the next. “Good,” she says, mouth shining. “Come home. The crate isn’t a bed and I want a bed.”' },
          { label: 'Take her home for the better show.', effects: { affection: 3, acceptance: 1 }, reply: 'Home is garlic still on her hands and her laugh in your mouth. She is soft, strong, and entirely sure of the want. “See?” she says after. “Better than a crate. Don’t tell the crate.”' },
        ],
      },
      intimacy: {
        opening: 'Her apartment smells like the restaurant and clean soap fighting a losing war. Rosa kisses like she seasons: thoroughly, checking, then committing. The coat is long gone. She is warm, hips and breasts and a stomach that gives under your hands, thighs that pull you in. “I like you,” she says, simple as a recipe. “Don’t make it complicated unless the complicated part is your mouth.”',
        choices: [
          { label: 'Mouth, then the rest.', effects: { affection: 4, trust: 2 }, result: 'She is loud and generous and comes with a laugh that breaks into a moan. After, she feeds you fruit in bed like a continuation. “Stay the morning,” she says. “I’ll make eggs. I’ll also make you late. That’s the deal.”' },
          { label: 'Tell her you want to cook for her sometimes.', effects: W(4, { dependency: 1, affection: 3, acceptance: 1 }), result: 'The sentence lands harder than the sex, and the sex lands hard. She goes tender, then hungry, then pulls you back in. “You can cook,” she says after, flushed and soft. “I’ll still run the spoon. Don’t be offended. Be here.”' },
          { label: 'Just hold her.', effects: { trust: 3, affection: 3 }, result: 'She allows ten quiet minutes, which for Rosa is a vow, then starts tracing your ribs and talking about a dish. You hold her through the recipe. She falls asleep mid-ingredient. You remember it. She will be delighted and pretend not to be.' },
        ],
      },
    },
    {
      outfitName: 'Coat, apron winning',
      mobilityTag: 'Service, then a sit',
      mobility: 'She still does the whole night. She sits on a milk crate more often and calls it leadership.',
      body: 'Lean is the wrong word and she would laugh at it. She is softer: the stomach a warm bowl when she unties the apron, thighs thicker in the black pants, breasts heavier in the tank. Her face is rounder when she smiles, which is often. A little tuck of chin when she looks down into a pot. She tastes with the same hand she uses to touch your wrist. Both leave a mark.',
      clothing: 'The coat still closes in the morning and gaps after family meal. The apron does the real work, tied lower as her waist thickens. Pants dig a faint line she ignores until you rub it. She has not bought a bigger size. She has thought about it while eating.',
      talk: {
        line: '“The apron is doing more than the coat and I don’t want a speech about it. I want you to taste the salsa and then take me off my feet for ten minutes. In a chair. Don’t get ideas. Or do.”',
        choices: [
          { label: 'Taste. Then the chair.', effects: { affection: 3, acceptance: 2 }, reply: 'The salsa is perfect. The chair is a tight fit for both of you and she loves that, soft weight in your lap, hoops clicking. “Ten minutes,” she says, and does not count them honestly.' },
          { label: 'Bring her a plate someone else cooked.', effects: W(6, { affection: 2, dependency: 1, trust: 1 }), reply: 'She is suspicious and then undone. “You fed the cook.” She eats every bite and gets shiny-eyed. “Dangerous man. Come home before I put you on the menu.”' },
          { label: 'Rub the waistband mark.', effects: { trust: 2, affection: 2, acceptance: 1 }, reply: 'In the office, door shut, you rub the red line and she melts against the desk. “That’s cheating,” she says, pleased. “Do the other side. Then walk me out like we were only doing inventory.”' },
        ],
      },
      event: {
        title: 'Flour hand',
        prose: 'She turns from the bench and there is a full handprint of flour on the new curve of her hip, white on black, ridiculous and perfect. A cook snorts. Rosa looks down, looks at you, and grins. “Evidence,” she says. “I’ve been eating and working and apparently being decorated. Don’t wash it off yet.” She makes you look. The hip is rounder than last month. She is not sorry.',
        choices: [
          { label: 'Leave the print. Kiss around it later.', effects: { affection: 3, acceptance: 3 }, reply: 'Later, the flour ghosts her skin and your mouth. She laughs into the pillow. “Evidence destroyed,” she says. “Make more tomorrow. Of the hip, not the flour. The flour is optional.”' },
          { label: 'Brush it off and put a plate in her hands.', effects: W(5, { affection: 2, dependency: 1 }), reply: 'She eats, hip clean, eyes on you. “You always go for the stomach’s defense,” she says, fond. “Good instinct. Don’t use it to avoid the kiss.” You don’t avoid the kiss.' },
        ],
      },
      intimacy: {
        opening: 'Flour still in her curls. She showers halfway and gives up, pulling you into bed with damp shoulders and a warmer, softer middle than the first time. “I know,” she says, when your hand spreads on her stomach. “It’s the job and the joy. Touch it like you like the joy.” She is already tugging your shirt off. The job can wait until morning prep.',
        choices: [
          { label: 'Like the joy. Out loud.', effects: { acceptance: 4, affection: 3, weight: 3 }, result: 'You tell her. She gets louder, softer, comes with her thigh over your hip and the belly pressed to you, a happy weight. After, she makes you repeat one compliment and then feeds you leftovers at 1 a.m. “Joy,” she says. “Remember the word. You’ll need it.”' },
          { label: 'Take her apart slowly on the kitchen-warm sheets.', effects: { affection: 3, trust: 2 }, result: 'Slow makes her talk, half recipes, half please. She comes shaking and kisses you like payment. “Tomorrow you taste the mole,” she says, breathless. “Tonight you already did the important tasting.”' },
          { label: 'Just hold her.', effects: { trust: 3, affection: 3, acceptance: 2 }, result: 'She is a good weight on your chest, curls in your mouth, a hand patting your ribs like she’s checking a loaf. “Don’t leave before coffee,” she says. “People who leave before coffee don’t get the real breakfast.”' },
        ],
      },
    },
    {
      outfitName: 'Coat open, apron only',
      mobilityTag: 'A sit between fires',
      mobility: 'Service is still hers. She takes a stool between courses and stands with a little push.',
      body: 'Softening into something the kitchen has to make room for. Her belly is a distinct warm mound under the apron, hips widening the aisle, thighs brushing as she walks the line. Breasts fill the tank and move when she turns fast with a pan. Her face is lusher, cheeks high with heat, a softness under the jaw when she laughs big. She is stronger than she looks and softer than the coat was built for. Standing from the stool takes a breath she doesn’t hide from you.',
      clothing: 'The coat does not close. She cooks in a tank and an apron and calls the coat a costume for the dining room, worn ten minutes at a time. Pants are on the last comfortable hole. She has a rubber band through the button, a cook’s solution, and she is not ashamed of the solution until a new hire stares.',
      talk: {
        line: '“The new kid stared at the rubber band. I stared back until he found a pot to wash. You don’t get the stare. You get the truth: I’m hungry and I want you in my office for five minutes or five courses.”',
        choices: [
          { label: 'Five courses.', effects: W(8, { affection: 3, dependency: 2, acceptance: 2 }), reply: 'She locks the office and eats with you off a hotel pan, coat abandoned, belly out. “This is the good part of owning the place,” she says. “You. And the right to the crispy bits.”' },
          { label: 'Five minutes, then back her up if anyone stares again.', effects: { trust: 3, affection: 3, acceptance: 2 }, reply: 'The kiss is quick and deep. On the line later you stand where the new kid can see you on her side. She bumps you, grateful, soft hip against your thigh. “Hired,” she murmurs. “Not as staff. As mine.”' },
          { label: 'Fix the rubber band situation. Buy the bigger pants.', effects: { acceptance: 3, affection: 2, money: -12 }, reply: 'She grumbles and wears them the next day and moves like a woman who can breathe. “Don’t make a charity of my ass,” she says, then kisses you in the walk-in. “But thank you. The ass is grateful. So am I.”' },
        ],
      },
      event: {
        title: 'Rubber band',
        prose: 'The rubber band snaps mid-service. The button flies. Rosa’s pants gap over a soft stomach and she does not stop the ticket in her hand. She plates, calls the dish, and only then puts a hand on the open waist, breathing, grinning wild. “Wardrobe change,” she tells the line. “If the food dies because you were looking at my stomach, you’re fired. If you keep cooking, you get a bonus in flan.” They cook. She looks at you, eyes bright. “Office. Spare pants. And don’t you dare be weird.”',
        choices: [
          { label: 'Spare pants. A kiss. No weirdness.', effects: { trust: 3, affection: 4, acceptance: 2 }, reply: 'You get the pants on her with practical hands and one kiss to the newly covered stomach. She exhales. “That’s the correct religion,” she says. “Back to the line. You’re walking me home. The pants are a loan. The rest isn’t.”' },
          { label: 'Spare pants, and a plan to eat after the rush.', effects: W(6, { affection: 2, dependency: 1, acceptance: 2 }), reply: 'The rush ends. The plan is tacos on the office desk, her pants half open again because the spare pair is already optimistic. “I like a man with a plan and a salsa,” she says. “Come home. Bring the extra taco. I lied about being done.”' },
        ],
      },
      intimacy: {
        opening: 'The spare pants last until her bedroom and then they don’t. Rosa is softening and gorgeous, mound of stomach, heavy breasts, thighs that spread when she sits on the bed and pulls you in by the belt. “The rubber band did its best,” she says. “Now you do better. I want to feel all of this wanted, not managed.”',
        choices: [
          { label: 'Want all of it.', effects: { acceptance: 4, affection: 4, weight: 3, dependency: 1 }, result: 'You show her. She comes loud, belly shaking against you, curls stuck to her neck, and drags you down into the softness after. “Managed is for inventory,” she pants. “This is for us. Again in the morning if the legs work.”' },
          { label: 'Have her on the kitchen table she actually owns.', effects: { affection: 3, trust: 1, acceptance: 2 }, result: 'The table is sturdy. She is sturdy, laughing, soft in your hands, a bowl rattling. She finishes with a swear and a grin. “Sanitize later,” she says. “Kiss now. And don’t tell the health department. They don’t deserve this story.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 2 }, result: 'You hold her on the bed, pants abandoned, the red mark from the waistband fading under your thumb. “The kid can stare,” she murmurs. “I have a door and a person. That’s richer.” She sleeps hot and close and steals the blanket, which is correct.' },
        ],
      },
    },
    {
      outfitName: 'Soft chef’s coat, new size',
      mobilityTag: 'Unhurried service',
      mobility: 'She still runs the line. She stands less between tickets and sits on a real stool she had brought in, daring comment.',
      body: 'Soft and rounded, fully, a belly that rests on the apron’s tie, hips that brush both sides of the narrower aisle, thighs that fill the new pants. Breasts heavy and high with the heat. Her face is a full warm moon when she laughs, hoops swinging, a softness at the chin that doesn’t dull her eyes. She gets breathless carrying a full stock pot and lets you take the second one without a fight, which is new. Sitting, she spreads. Standing, she arrives a moment before her feet.',
      clothing: 'A new coat, larger, already honest at the buttons after a tasting. Apron tied beneath the belly because above it is a lie. She bought the pants without the rubber band and feels rich for a week. Shoes are the same clogs. The clogs are starting to talk by the end of Saturday.',
      talk: {
        line: '“I let you take the pot and I didn’t die. Character growth. Reward me with a seat and something you cooked, even if it’s bad. I’ll fix it and I’ll still kiss you.”',
        choices: [
          { label: 'Cook something imperfect. Let her fix it and you.', effects: W(8, { affection: 3, trust: 2, acceptance: 1 }), reply: 'She fixes the sauce with two gestures and then eats most of it, pleased with both of you. “See? We can share a kitchen. Don’t get proud. Get the bread.”' },
          { label: 'Sit her down and rub the arches the clogs punished.', effects: { trust: 3, affection: 3, acceptance: 1 }, reply: 'She melts so completely she misses a joke on the radio. “You’re hired as the end of the night,” she says, eyes closed. “Benefits include me. The me is getting bigger. Update your expectations.”' },
          { label: 'Tell her the new coat looks like she meant it.', effects: { acceptance: 4, affection: 2 }, reply: 'She smooths it over the belly, suddenly a little shy. “I did mean it.” Then the grin returns. “Come here and mean it with your hands. The coat can take it. I can take more.”' },
        ],
      },
      event: {
        title: 'Sunday pot',
        prose: 'Sunday, restaurant dark, she makes the pot her mother made and puts the spoon in your hand with hers over it. The lesson is half the point. The other half is that she tastes every adjustment and does not spit anything out. By the time the mole is right she has eaten a bowl standing and started another sitting, coat open, belly a warm rounded fact against the counter. “This is the family recipe,” she says. “You’re in the kitchen. Do the math.”',
        choices: [
          { label: 'Do the math. Stay in the family.', effects: { trust: 4, affection: 4, acceptance: 2, flag: 'recipe', weight: 6 }, reply: 'You say you want in. She goes bright and damp-eyed and covers it with a second bowl she insists is yours and then shares. “Okay,” she says. “You stir next time. I’ll supervise. I’ll also eat. Those are the vows.”' },
          { label: 'Eat the lesson with her until the pot is honest.', effects: W(10, { affection: 3, dependency: 2, acceptance: 2, flag: 'recipe' }), reply: 'The pot ends honest and much lighter. She leans, full, soft, against you. “My mother would have said you have a good mouth,” she murmurs. “She would have meant the tasting. I mean all of it.”' },
        ],
      },
      intimacy: {
        opening: 'Mole still on the air. She is rounded and sure and a little sleepy from the pot, which only makes the want lazier and deeper. “I fed you the family,” she says, pulling the tank off. Her breasts fall, her stomach settles into your hands, warm as a pot. “Now feed me the rest of the night. Not with a spoon. With you. I’m not delicate.”',
        choices: [
          { label: 'Not delicate. All of her.', effects: { acceptance: 4, affection: 4, dependency: 2, weight: 4 }, result: 'You take her with both hands on the belly she just fed and she comes apart, generous, loud, clutching. After, she makes you lie on her chest, a soft heavy bed. “Family,” she repeats, wondering and pleased. “Don’t run. Breakfast is part of the contract.”' },
          { label: 'Slow, in the spoon-warm kitchen light.', effects: { affection: 3, trust: 3, acceptance: 3 }, result: 'Slow pulls the day out of her shoulders. She comes with a sigh that turns into your name and laughs after, curls wild. “I’m keeping you,” she says. “Like a good pan. That’s high praise. Take it.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 2 }, result: 'You hold her on the couch until the pot is a story and not a chore. She traces the mole recipe on your palm, half joke, half spell. “You’re in it now,” she says. “Sleep here. I’ll kick you at six. Kindly.”' },
        ],
      },
    },
    {
      outfitName: 'Plus chef’s coat, stretched',
      mobilityTag: 'Stool strategy',
      mobility: 'The stool is part of the line now. She stands for the fire and sits for the talking. Walking home is a stroll she actually strolls.',
      body: 'Pleasantly chubby, and the phrase is too polite for the way she occupies a doorway. Belly heavy over the waistband, a soft shelf she rests a tasting spoon against. Thighs thick in the plus pants, brushing, a faint chafe she treats with powder and a shrug. Breasts a generous weight on the upper curve by the end of service. Face full and bright, double chin when she looks down into a pan, smile enormous. She is sweaty and glorious and a little slower up the back step, a hand on the rail she had installed “for deliveries.”',
      clothing: 'Plus-size chef’s coat, already tight across the belly after Sunday. She orders another before the first has a week on it and laughs at her own email. Aprons are longer. She still wears hoops and lipstick for the dining room. The lipstick lasts longer than the buttons.',
      talk: {
        line: '“I ordered a bigger coat and I want to be kissed for the foresight, not managed. Then I want to sit on that stool and eat something you didn’t let me cook. I cook enough.”',
        choices: [
          { label: 'Kiss the foresight. Then feed her.', effects: W(10, { affection: 3, acceptance: 3, dependency: 2 }), reply: 'The kiss is messy. The meal is takeout she criticizes and finishes. On the stool she spreads, happy, belly out. “Foresight,” she says, patting it. “And you. Both delicious.”' },
          { label: 'Sit on the step and share a beer and the night air.', effects: { trust: 2, affection: 3, weight: 3 }, reply: 'The step holds both of you if she leans. She leans. “I like the rail,” she admits. “I like you on the rail side. Don’t make it a metaphor. Just come tomorrow and do it again.”' },
          { label: 'Offer a slow walk instead of a faster one.', effects: { trust: 3, affection: 2, acceptance: 1 }, reply: 'You walk slow. She doesn’t pretend it’s fitness. At the corner she is flushed and pleased and heavier on your arm. “This is a good speed,” she says. “Anyone who argues can cook their own dinner.”' },
        ],
      },
      event: {
        title: 'The aisle',
        prose: 'The market aisle is a crate, a cart, and Rosa. She turns with cheese and the turn is bigger than the gap. For a moment she is held, belly against the crate, backside against the cart, plump and stuck and startled into a laugh that shakes all of her. “Don’t just stand there looking blessed,” she tells you, delighted and pink. “Move the crate or move me. Preferably the crate. I’m comfortable but I have ice cream.”',
        choices: [
          { label: 'Move the crate. Laugh with her.', effects: { affection: 3, trust: 2, acceptance: 3 }, reply: 'The crate moves. She spills free, still laughing, and kisses you in the dairy aisle. “Heroic,” she says. “Now the ice cream, before I become a person who lives here. You’d visit. I know you would.”' },
          { label: 'Move the crate, then buy the rich things she eyed.', effects: W(8, { affection: 2, dependency: 2, acceptance: 2 }), reply: 'You buy the cheese and the cream and the thing she pretended not to want. At home she eats on the couch, unstuck and unbothered, and puts her feet in your lap. “That’s how you shop,” she says. “Pay attention.”' },
        ],
      },
      intimacy: {
        opening: 'Ice cream and then her, or her and then ice cream; she refuses to rank them. Chubby and bare, Rosa pulls you onto a bed that knows her weight. The shelf of her stomach brushes you first. She grins. “Yes, that. I want you to feel how much kitchen I am. And I want the ceiling. I’m going to be loud. The neighbor likes us.”',
        choices: [
          { label: 'Let her be loud.', effects: { acceptance: 4, affection: 4, dependency: 2, weight: 4 }, result: 'Loud. She comes with a laugh at the end, belly jumping, hands in your hair, and then hauls you up to kiss the laugh. “Ice cream now,” she decides, still panting. “In bed. We’ll wash the sheets like adults.”' },
          { label: 'Take her from the side, a hand under the shelf.', effects: { affection: 3, acceptance: 4, trust: 2 }, result: 'The hand under the belly makes her melt before you even move. Then you move. She is plush and strong and very close. After, she traces your wrist. “You hold me like a person, not a tray. That’s why you get breakfast.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 3 }, result: 'You hold the warm shelf of her and she talks about the aisle like a funny saint story. “I didn’t hate being stuck,” she admits. “I hated not choosing it. Here I choose.” She tucks closer, which is a choice with weight.' },
        ],
      },
    },
    {
      outfitName: 'Stretch chef’s blacks',
      mobilityTag: 'Short bursts on the line',
      mobility: 'She does the hot plate in bursts and the rest from a stool. Closing is a slow walk to a car if you’re there, or a cab she calls without shame.',
      body: 'Plump, richly, a body that enters the kitchen and changes the aisle plan. Her belly is heavy in her lap when she sits the stool, a warm slope she steadies with a forearm. Thighs spread on the seat and press when she stands. Breasts rest on the upper swell under a stretched tank. Arms are thick and still sure with a knife. Her face is full and kind and a little tired, cheeks flushed, chin soft, eyes quick. She breathes harder after the steps and waves off fuss, then accepts your arm in the alley where no one is performing toughness.',
      clothing: 'Stretch blacks, a coat she had let out once already and will let out again. Buttons are decorative by dessert. The apron is a flag. She wears lipstick like armor for the dining room and wipes it off to eat in the office, a ring of it on the napkin and on you.',
      talk: {
        line: '“I took the alley arm and I don’t want it discussed in the dining room. I do want it discussed here, with your hand still on me and a plate I don’t have to cook. Deal?”',
        choices: [
          { label: 'Deal. Plate, and the hand.', effects: W(11, { affection: 3, dependency: 2, acceptance: 2 }), reply: 'She eats in the office with your hand on the heavy curve, content as a closed restaurant. “This is the good service,” she says. “You may walk me to the car. You may come upstairs. Rank those however you like as long as both happen.”' },
          { label: 'Deal, and talk about letting the line stand more.', effects: { trust: 3, affection: 2, acceptance: 2 }, reply: 'She nods, practical. “I’ll chef from the stool more. They can reach. I can taste. Don’t make me retire. Make me comfortable. There’s a difference and you know it or you wouldn’t be in this office.”' },
          { label: 'Kiss the lipstick off before the plate.', effects: { affection: 3, acceptance: 2 }, reply: 'The lipstick doesn’t survive. She laughs, smeared and plump and happy, and feeds you a bite as revenge. “Now I have to redo my mouth or go home with you. Guess.” She goes home with you.' },
        ],
      },
      event: {
        title: 'Let out',
        prose: 'The tailor lets the coat out and tells her, gently, that there isn’t much seam left. Rosa stands in the little shop, plump, curls down, and looks at the remaining seam like a countdown. Then she grins. “Then make a new one. I’m not going to shrink for a seam. I’ve met me.” She squeezes your hand, the one she insisted you bring. “Tell him the color stays. Tell him I tip for kindness and fire for pity.”',
        choices: [
          { label: 'Tell him. Tip for kindness.', effects: { acceptance: 4, affection: 3, trust: 2, money: -20 }, reply: 'You say it plain. The tailor, to his credit, nods and starts a new coat instead of a rescue. Outside, Rosa kisses you against the window. “Good witness,” she says. “Ice cream. Then home. The seam can go to hell.”' },
          { label: 'Tell him, and celebrate with a meal bigger than the seam.', effects: W(10, { affection: 3, acceptance: 3, dependency: 2 }), reply: 'Celebration is a long lunch where she sits wide and unashamed and makes you try everything. “New coat, same woman, more of her,” she says. “That’s the collection. You’re in the collection.”' },
        ],
      },
      intimacy: {
        opening: 'The new-coat plan makes her bold. In bed she is plump and bright-eyed, belly a heavy warm hill, thighs open, breasts in her hands and then in yours. “He can measure,” she says. “You get to worship. Different professions. I want you to say bigger like it’s a recipe you’re excited to cook.”',
        choices: [
          { label: 'Bigger, like a recipe you want.', effects: { acceptance: 5, affection: 4, dependency: 2, weight: 5 }, result: 'You say it. She pulls you in and the weight of her is the method and the meal. She comes shaking, joyful, then feeds you a leftover spoon in the dark. “We’ll cook the next size,” she whispers. “Don’t you dare get shy in the middle.”' },
          { label: 'Worship without a speech, hands and mouth.', effects: { affection: 4, acceptance: 4, trust: 2 }, result: 'No speech. She understands anyway and gets loud, a hand in your hair, the hill of her belly brushing your forehead. After, she is tender and a little teary. “Okay,” she says. “That’s better than a speech. Come up here.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 3 }, result: 'You hold the hill and the woman and she talks about the tailor without anger. “I’m going to get bigger than his first idea,” she says. “If you’re in, say in.” You say in. She sleeps like a person who believes you.' },
        ],
      },
    },
    {
      outfitName: 'Coat as drape',
      mobilityTag: 'Mostly the stool',
      mobility: 'The line comes to her stool. She stands for the pass when she wants the room to see her, and sits again without apology.',
      body: 'Fat, and she wears the word the way she wears hoops: on purpose. Her belly is round and low and parts the drape of the coat, resting in her lap on the wide stool, a weight she hefts when she laughs. Thighs spread across the seat, thick and warm, always touching. Breasts mound over the tank. Arms are heavy and still precise with a spoon. Her face is full and radiant, chin soft, lipstick often lost to tasting, eyes full of the room. Stairs are a production she avoids by living above the restaurant less and using the ramp more. She had the ramp built. She cut the ribbon with a knife.',
      clothing: 'The coat is a drape. Under it, stretch and a long apron tied under the belly, the bow sitting on the shelf of her. New pants every month, it feels like. She has stopped chasing buttons. Clogs are replaced by wider kitchen shoes she bedazzled herself so no one could call them sad.',
      talk: {
        line: '“I cut a ribbon on a ramp and a man called it sweet. I called him a reservation I could lose. Come tell me it was hot. Then sit and eat. I’m full of opinions and I still have room.”',
        choices: [
          { label: 'It was hot. Then a long meal.', effects: W(12, { affection: 3, acceptance: 3, dependency: 2 }), reply: '“Correct.” She eats like a celebration, fat and shining, one hand on your knee. “Sweet is for flan. I’m the woman who built a way in. You’re the way in I like best.”' },
          { label: 'It was hot. Rub her feet in the office after.', effects: { trust: 3, affection: 4, acceptance: 2 }, reply: 'The shoes come off. She groans, unpretty and pleased, belly rising as she leans back. “This is the private service,” she says. “Tip is upstairs. Don’t short me.”' },
          { label: 'Ask who else needs a ramp.', effects: { trust: 2, affection: 2, acceptance: 2 }, reply: 'She lights up, practical and tender. “The side door. The office. Maybe your place, if you want me in it without a strategy.” She kisses you. “That’s not a demand. It’s a menu.”' },
        ],
      },
      event: {
        title: 'Ribbon',
        prose: 'The ramp is ugly-beautiful, wood and grit, and Rosa cuts the ribbon with a chef’s knife while sitting on a stool at the top because the symbolism of standing isn’t worth the wobble. Staff cheer. A regular cries. Rosa looks embarrassed and then decides not to be. “If you need it, use it,” she tells the alley. “If you don’t, also use it, they’re nicer than stairs and I’m tired of pretending otherwise.” She finds your face in the small crowd. The look says come here, I did a thing, feed me about it.',
        choices: [
          { label: 'Come here. Feed her about it.', effects: W(10, { affection: 4, acceptance: 3, dependency: 2 }), reply: 'You bring the good plate to the stool. She eats at the top of her own ramp, queenly, and keeps you at her side for the photos she actually wants. “This is my place,” she says, mouth full. “You’re in the picture. Smile or I’ll cook you into the soup.”' },
          { label: 'Come here. Take her upstairs the new way.', effects: { trust: 3, affection: 4, acceptance: 2 }, reply: 'The ramp makes the upstairs easy. She notices and gets quiet in the good way. At the top she kisses you, fat and proud and a little shaky. “Stay,” she says. “I don’t want the first night of the ramp to be a speech. I want it to be you.”' },
        ],
      },
      intimacy: {
        opening: 'Up the ramp, into bed, coat gone. Rosa is fat and golden in the lamp, belly a proud dome, thighs wide, breasts heavy. “I built a way in,” she says, pulling you by the wrist. “Now use it. I want your weight and mine. I want to feel like the woman who cut that ribbon, not a guest in my own body.”',
        choices: [
          { label: 'Use the way in.', effects: { acceptance: 5, affection: 4, dependency: 3, weight: 5 }, result: 'You fuck her deep, hands full of the dome, and she comes loud enough that the ramp’s existence feels justified. After, she laughs and kisses your shoulder. “Ribbon’s a metaphor now. Don’t tell the contractor. Do come back tomorrow.”' },
          { label: 'Have her sit on the edge and take you in.', effects: { affection: 3, acceptance: 4, trust: 2 }, result: 'The edge works. Her belly rests on her lap and against you, immense and intimate. She rolls more than bounces and the roll is devastating. She finishes with a grin and a swear. “See? Engineering.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 4, acceptance: 3 }, result: 'You hold her until the crowd noise is gone from her head. “I was scared they’d clap like I was brave for existing,” she admits. “They clapped like the ramp was good. You look at me like the woman is good. Stay in that look.”' },
        ],
      },
    },
    {
      outfitName: 'Custom cook’s wrap',
      mobilityTag: 'Assisted close',
      mobility: 'She chefs from a wide stool and a lowered pass. Closing the restaurant means you, or a trusted cook, and a slow transfer to the car or the downstairs room she has started using.',
      body: 'Massive, and the kitchen has been rebuilt around the fact: wider aisle, lowered shelf, a stool that cost more than the old oven and holds. Her belly reaches her lap and spreads to the stool’s edges, a vast soft authority under the wrap. Thighs are huge. Breasts rest on the upper swell. Arms are thick, still deadly with a knife on a short board she keeps close. Her face is a full sun, curls often down because the pin pulls, hoops brushing a softer jaw. She stands to transfer and for photographs she chooses. Breath is part of her speech. She has not gotten quieter. The room has gotten better at listening.',
      clothing: 'A custom cook’s wrap in terracotta, ties at the sides, already known to need a larger sister. Under it, stretch. The dining-room drape is separate and dramatic and she loves it. Shoes are wide, bedazzled, often off by the time you arrive. Aprons are ceremonial. Her body is the uniform that matters.',
      talk: {
        line: '“They lowered the pass and I cried in the walk-in like a movie and then I cooked the best service this month. Come taste the evidence and put your hands on the reason. Both. I’m greedy. You knew.”',
        choices: [
          { label: 'Taste. Hands. Greedy back.', effects: W(12, { affection: 3, acceptance: 3, dependency: 2 }), reply: 'The evidence is delicious. Your hands on the reason make her sigh into a kiss that tastes like the sauce. “Greedy suits us,” she says. “Stay through close. I want the ramp and the bed and you, in that order, once.”' },
          { label: 'Tell her the service was hers, not the pass’s.', effects: { trust: 3, affection: 4, acceptance: 2 }, reply: 'She needed that more than the kiss, and the kiss follows anyway. “Mine,” she agrees, a little hoarse. “Come do the close with me. Then I’ll be unbearable and happy. Your favorite setting.”' },
          { label: 'Help her transfer and skip the speech.', effects: { trust: 3, affection: 3, dependency: 2 }, reply: 'You help, quiet, good. She leans the massive warmth of her on you for a second longer than the transfer needs. “That’s the speech,” she says. “You heard it. Take me home.”' },
        ],
      },
      event: {
        title: 'Lowered pass',
        prose: 'The pass comes down on a Monday. Rosa tests it from the stool, massive, wrap tied, and plates a perfect scallop at a height that doesn’t ask her to rise. She stares at the plate. “I thought I’d feel shortened,” she says. “I feel like the room finally met me.” Then she ruins her own dignity by eating the scallop. “Quality control. Come here and do your own. And don’t you dare say sorry. Nothing here is sorry.”',
        choices: [
          { label: 'Do your own. Say nothing sorry.', effects: { affection: 4, acceptance: 3, trust: 2, weight: 4 }, reply: 'You eat. It’s perfect. She watches your face and blooms. “Good. Then the room is right and you’re right. Help me down when service is imaginary and the night is real.”' },
          { label: 'Eat, then dance with her in the empty dining room, seated.', effects: { affection: 4, trust: 3, acceptance: 3 }, reply: 'No standing dance. You sway against her stool, forehead to forehead, the empty room clinking as it cools. She sings half a line and stops, shy, which is rare and precious. “Okay,” she whispers. “That’s enough music. Take me to bed.”' },
        ],
      },
      intimacy: {
        opening: 'The downstairs room, because the stairs above are a story she has finished. You help her to the wide bed. Massive, bare, terracotta tossed aside, she pulls you in with a thick arm. “I don’t feel shortened,” she says. “I feel like a feast. Eat accordingly. And talk to me. I like your voice when you’re not being careful.”',
        choices: [
          { label: 'Eat accordingly. Talk. Be inside her.', effects: { acceptance: 5, affection: 4, dependency: 3, weight: 5 }, result: 'You talk, filthy and fond, and fuck her in the deep, limited way her body asks. She comes with your name and a laugh, the whole bed answering. “Feast,” she repeats, wrecked. “Leave room for breakfast. That’s a lie. Don’t leave room.”' },
          { label: 'A long mouth, her hand in your hair.', effects: { affection: 4, acceptance: 5, trust: 2 }, result: 'She guides you like a good chef and then loses the recipe. Orgasm leaves her giggling and damp-eyed. “Up,” she says. “Kiss. I want the taste of my own good idea.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 4, acceptance: 4 }, result: 'You hold the feast until she is only a woman who did a brave Monday. “The pass is lower,” she murmurs. “The life is bigger. You’re in both. Don’t get lost.”' },
        ],
      },
    },
    {
      outfitName: 'Terracotta drape, ties',
      mobilityTag: 'Mostly seated service',
      mobility: 'She runs Cazuela from a reinforced chair at a lowered station. Walking is a transfer to the car or the bed. She still tastes everything.',
      body: 'Obese, and the dining room has been told by her own mouth, once, so the whispering died of boredom. Belly a deep apron over her lap and across the chair, breasts heavy on the upper fold, thighs immense, arms resting on the generosity of herself. Curls frame a full, beautiful face, hoops tight, lipstick a choice she makes when she wants to feel like the front of house. Breath shows. She is sweaty at the folds and meticulous about being washed. She can stand with you, a production, and she uses it for the bathroom and for pride she announces: “This is a pride stand, not a bathroom stand. Act accordingly.”',
      clothing: 'Terracotta drape, ties, custom panels underneath. The chef’s coat is retired to a hook like a flag of a former campaign, brought out for photos she controls. Everything is built on her. She has a woman who comes for hems and a rule that you are the one who ties and unties when the day is over.',
      talk: {
        line: '“Pride stand later. Right now I’m a woman in a chair who wants the good bite and your mouth on her shoulder. You can do two things. I’ve seen your resume.”',
        choices: [
          { label: 'Good bite, then the shoulder, then more bites.', effects: W(14, { affection: 3, dependency: 3, acceptance: 3 }), reply: 'She eats and melts in turns, obese and glowing, sauce on your thumb and her smile. “Resume accepted,” she says. “The job is nights like this. Benefits are me. The me is not shrinking. Initial here.” She taps her mouth.' },
          { label: 'The pride stand, carefully, then the chair and quiet.', effects: { trust: 4, affection: 3, dependency: 2, acceptance: 2 }, reply: 'You stand her with respect and no audience. She is shaking and proud and laughs. Then the chair. Then quiet, her head against you as much as the belly allows. “That’s the whole promotion,” she says.' },
          { label: 'Ask what she misses from the line.', effects: { trust: 3, affection: 3 }, reply: '“The heat on my face. The stupid jokes.” She shrugs, a small lift of big shoulders. “I don’t miss hurting. You can bring me the jokes. The heat I’ll take in the dish.” She pulls you down for a kiss that tastes like both.' },
        ],
      },
      event: {
        title: 'She tells the room',
        prose: 'Before service she has the staff and the early regulars in the dining room. Rosa, seated, terracotta, immense, doesn’t clear her throat so much as own the room’s. “I’m fat,” she says. “I’ll be fatter. The food will stay good. If you need me small to respect the plate, eat somewhere sad. If you’re here, eat.” A beat. She looks at you. “And if you’re mine, you can stand where I can see you while I do this, so my hands don’t shake. They’re shaking. Don’t make it a thing until after.”',
        choices: [
          { label: 'Stand where she can see you.', effects: { trust: 5, affection: 5, acceptance: 4 }, reply: 'You stand in her eyeline. Her hands steady. The room, to its credit, sits and eats. After, she pulls you down and presses her forehead to yours. “Okay,” she breathes. “Thing now. A small thing. A kiss. Then a large plate. I’m starving. Bravery is hungry.”' },
          { label: 'Stand with her, then cook the large plate yourself.', effects: W(12, { affection: 4, trust: 3, dependency: 2, acceptance: 4 }), reply: 'You cook. She critiques two things and then eats like a woman who just set down a tray she’s carried for years. “Perfect,” she lies, about the salt, and tells the truth with her hand in yours. “Stay.”' },
        ],
      },
      intimacy: {
        opening: 'After the room, she wants the opposite of an audience. You untie the drape. Obese, warm, washed, she guides your hands. “They know,” she says. “Now I want to be a secret again for an hour. A loud secret. Get down there. Or up here. I don’t care about the geography. I care about you.”',
        choices: [
          { label: 'Down there, then in her, eyes up.', effects: { acceptance: 5, affection: 5, dependency: 3, trust: 2, weight: 4 }, result: 'You do both. She comes twice, the second one almost startled out of her, and holds your face after with both hands, a rare reach. “Secret kept,” she pants, smiling. “Also completely given away. Good. Stay inside the hour.”' },
          { label: 'Up here. Let her feel your weight on the side of her.', effects: { affection: 4, acceptance: 4, dependency: 3 }, result: 'You lie along the vast side of her and love her with your hands until she is shaking and laughing. “The room doesn’t get this,” she says. “This is the owner’s table.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 4 }, result: 'You hold her until the speech drains out and only the woman is left, huge and humming. “I said it,” she murmurs. “Now say my name like there’s no dining room.” You do. She sleeps before dessert, which she would consider a review.' },
        ],
      },
    },
    {
      outfitName: 'Panels, service from the chair',
      mobilityTag: 'Transfers',
      mobility: 'Service is a lowered table beside her chair. Transfers are you and a cook she trusts. The ramp is how she meets the car. Standing is rare and witnessed.',
      body: 'Super obese, and Cazuela has become a room that radiates out from her chair. Belly a continent under the panels, spreading across her lap and over the chair’s arms, breasts heavy, thighs immense and always in contact, arms resting on herself, curls a dark halo around a full, cheerful, sweaty face. She tastes with a spoon on an extended handle she bedazzled out of spite and then affection. Breath is a soft bellows. She is funny between bites. Standing takes you, a count, and a willingness to sit immediately after. She is still the chef. The kitchen has learned to orbit.',
      clothing: 'Laced panels in terracotta, loosened after the first tasting, which is early. A drape for the dining room if she rolls out, which she sometimes does, a procession. The bedazzled shoes are retired to a shelf she can see. She wears rings resized twice. They still click on the extended spoon.',
      talk: {
        line: '“Orbit me. I mean that romantically and operationally. Taste this, fix nothing unless I say, and then kiss the cook. The cook is enormous. Adjust your angle.”',
        choices: [
          { label: 'Taste. Kiss at the adjusted angle.', effects: { affection: 4, acceptance: 3, weight: 6, dependency: 2 }, reply: 'The angle is a lean into the warm continent of her. The kiss lands. She hums, pleased, and makes you taste again. “Operational and romantic,” she says. “We should franchise. We should not. Come home with the franchise.”' },
          { label: 'Take over the last hour so she can eat a real dinner.', effects: W(14, { affection: 3, dependency: 3, trust: 2, acceptance: 3 }), reply: 'She allows it, which is trust big enough to rattle the pans. Dinner is long and hers. “Look at you, running my line,” she says, soft and huge. “Don’t get ideas. Get in the car. You’re off the clock and on my body.”' },
          { label: 'Ask what the extended spoon can’t solve.', effects: { trust: 4, affection: 3 }, reply: '“An itch under the left fold. A jar on the high shelf. Lonely mornings.” She says the last one plain. “So come in the mornings too, sometimes. Not as staff. As the man who knows where it itches.”' },
        ],
      },
      event: {
        title: 'Orbit',
        prose: 'A critic writes about the food and, carefully, about “the chef’s presence.” Rosa reads it in the chair, enormous, and snorts. “Presence. They mean I take the room and they liked it.” She looks at you. “If they’d been cruel I’d have burned the paper in the flan. They weren’t. So we celebrate. I want a meal I don’t cook and a night I don’t host. You host. I’ll be the presence.”',
        choices: [
          { label: 'Host. She is the presence. The meal is huge.', effects: W(16, { affection: 4, dependency: 3, acceptance: 3 }), reply: 'You host in her own dining room after close, which makes her cry-laugh. She eats, super obese and off duty, and toasts you with a spoon. “Presence,” she says. “And you, the reason I can sit in it and still feel adored. Again tomorrow. Smaller toast. Bigger plate.”' },
          { label: 'Host at home, no restaurant at all.', effects: { trust: 4, affection: 4, acceptance: 3, weight: 8 }, reply: 'Home, no pass, no critic. She eats in your bed’s wide chair and looks younger around the eyes. “This is the presence I wanted,” she says. “Private. Full. Yours. Don’t write about it. Live in it.”' },
        ],
      },
      intimacy: {
        opening: 'Hosting ends. She wants to be a body, not a review. You unlace panels. Super obese, shining, she arranges you with the extended spoon set aside, a rare surrender of tools. “No reviews,” she says. “I want your mouth and your cock and your voice saying my name like I’m not a restaurant. I’m Rosa. I’m a lot of Rosa. Come get lost and found.”',
        choices: [
          { label: 'Get lost and found.', effects: { acceptance: 5, affection: 5, dependency: 4, trust: 2, weight: 5 }, result: 'You love her at the edge of all that warmth, deep and close, and she comes with your name, not the restaurant’s. After, she pets your hair, huge and gentle. “Found,” she says. “Good. Don’t publish. Do repeat.”' },
          { label: 'Mostly mouth, no performance.', effects: { affection: 4, acceptance: 5, trust: 3 }, result: 'No performance. She gets quiet, then loud, then quiet again, a hand on your cheek. “That’s the private menu,” she whispers, wrecked. “You’re the only reservation.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 4, dependency: 2 }, result: 'You hold the presence until she is only a tired, happy woman. “Critic can eat,” she mumbles. “You already did the important part. Stay. Breakfast is hosting if I say it is. I say it isn’t. Just breakfast.”' },
        ],
      },
    },
    {
      outfitName: 'Sling and a cook’s drape',
      mobilityTag: 'Lift, chair, bed',
      mobility: 'The sling and you move her between bed and the receiving chair in the kitchen. Cooking is direction, tasting, and your hands. She is the mind of the kitchen and the center of the room.',
      body: 'Near-immobile, and she has reorganized the word so it includes command. She fills the receiving chair: belly a sea, sides spilling in soft rolls, breasts supported by a sling she had lined in terracotta, thighs a landscape, arms thick and long enough for a spoon, your hand, a kiss if you bring your face in. Curls pinned by you in the morning. Face full and vivid, a little breathless when she laughs, which is often and on purpose. She directs a service she cannot walk. The food is still hers. So is the room. So, if you have any sense, are you.',
      clothing: 'The sling is the working garment, padded, terracotta at the edges, strong enough that she can sit forward a few degrees and taste. A drape for guests. Panels underneath, changed carefully. She has opinions about every strap and they are correct. Jewelry remains. It catches the kitchen light when she gestures you closer.',
      talk: {
        line: '“I can’t tour the dining room, so the dining room can be jealous. Come closer than jealous. I want the sauce on your finger and then I want the finger. And I want you to tell me the room is full. Even if it isn’t. Especially if it is.”',
        choices: [
          { label: 'Sauce, finger, the truth about the room.', effects: { affection: 4, acceptance: 3, weight: 8, dependency: 2 }, reply: 'The room is full. She glows, tastes the sauce, tastes you, near-immobile and entirely the chef. “Good,” she says. “Then we did our jobs. Your next job is my left side. It aches when I’m proud.”' },
          { label: 'Bring the room to her in one perfect plate, then stay.', effects: W(14, { affection: 3, dependency: 3, acceptance: 3, trust: 2 }), reply: 'One plate becomes a sequence. She eats like a critic of her own joy and finds it worthy. “Stay after the jealous people leave,” she says, softer. “I want the kitchen dark and you bright.”' },
          { label: 'Pin her curls. Don’t rush the rest.', effects: { trust: 4, affection: 4, acceptance: 2 }, reply: 'You pin her hair the way she likes, careful of her neck. She goes quiet, a rare tender register. “That’s how I know you’re mine,” she says. “You remember the stupid pins. Now the sauce. Romance is a sequence.”' },
        ],
      },
      event: {
        title: 'The line comes to her',
        prose: 'A busy Saturday. A pan fires wrong. From the chair, near-immobile, Rosa saves it with three sentences and a spoon she makes you carry to the pass like a runner. The dining room never knows. When it’s over she is sweating, grinning, enormous. “I still have it,” she says, almost surprised. “The legs went. The mouth didn’t. Come here and taste the save. Then tell me I still have it, because I want to hear it in your voice, not just in the plate.”',
        choices: [
          { label: 'Taste the save. Tell her.', effects: { trust: 4, affection: 5, acceptance: 4 }, reply: 'You tell her, voice and all. She blinks hard and pulls you in until your ribs learn the sling. “Okay,” she says. “I have it. And I have you. Don’t separate those in the retelling.”' },
          { label: 'Taste it, then feed her a victory meal.', effects: W(14, { affection: 4, dependency: 3, acceptance: 4, trust: 2 }), reply: 'Victory is rich and long. She eats until the save is a story she can laugh at, huge in the chair, your hand on the strap. “The mouth didn’t go,” she repeats, simpler now. “Feed it again tomorrow. It likes the work.”' },
        ],
      },
      intimacy: {
        opening: 'The kitchen goes dark. The sling stays. Rosa wants you at the edge of the chair, terracotta pads creaking, her body a near-immobile feast that can still pull you closer with a look. “I saved a pan,” she says. “Now save nothing. Wreck me kindly. I can still come like a woman who runs the room. Watch.”',
        choices: [
          { label: 'Watch. Wreck her kindly.', effects: { acceptance: 5, affection: 5, dependency: 3, trust: 2, weight: 5 }, result: 'You do. She comes like she promised, loud in the empty kitchen, a ripple through all that softness, your name at the end. “Still mine,” she pants, meaning the room, the climax, you. “Lock the door. Do it again slower.”' },
          { label: 'Slower, a hand under the sling’s logic.', effects: { affection: 4, acceptance: 5, trust: 3 }, result: 'Slower finds a deeper sound. She is breathless and grinning and a little tearful at the edges. “The legs went,” she whispers, echoing herself, “the want didn’t. Come up and kiss the chef.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 4, dependency: 2 }, result: 'You hold her in the dark kitchen until the service leaves her muscles. “I still have it,” she says, small, sure. “And you still have me. That’s two saves. Turn the light off all the way. Stay.”' },
        ],
      },
    },
    {
      outfitName: 'Adaptive membrane, terracotta edge',
      mobilityTag: 'Immobile',
      mobility: 'She does not stand. The bed is in the downstairs room now, and the kitchen comes to it on trays. She runs Cazuela from pillows, a phone, and a voice that can still make a cook stand up straighter.',
      body: 'Immobile, and radiant in the way of a hearth that no longer moves and still feeds the house. The platform fills the downstairs room and she fills the platform: belly a high wide world, thighs joined to it, breasts heavy and splayed, arms thick and able to hold a phone, a spoon, your hand, your face if you come close enough. Curls spread on a pillow you prop. Face full and warm and exact, hoops sometimes, lipstick sometimes, breath a constant sweet work. She is dependent on you for the turns, the wash, the far reaches, the heavy pots she will not stop imagining. She is not dependent on anyone for her authority. She will taste a sauce from a spoon and tell the truth. She will ask for more. She will ask for you.',
      clothing: 'An adaptive membrane with a terracotta binding, splits for care, a pocket that holds a tasting spoon because she insisted on a pocket and won. It strains, glossy, and she likes the color against her skin. Jewelry for evenings she is “open,” which means the cooks may bring a question and you may not leave. Mornings are bare splits, wash, oil, your hands. She calls that prep.',
      talk: {
        line: '“Service is at seven and I am already the room. Come do prep: wash, kiss, tray, in an order you can defend. Then tell me the specials. I’ll know if you lie. I always know.”',
        choices: [
          { label: 'Wash, kiss, a long tray. Tell the truth.', effects: W(16, { affection: 4, dependency: 4, acceptance: 4, trust: 2 }), reply: 'Prep is perfect. She eats, immense and pleased, and corrects one special with a smile. “Truth,” she says. “And butter. You can stay past service. You’re not a seating. You’re the close.”' },
          { label: 'Ask her to run the specials while you wash her hair.', effects: { trust: 4, affection: 5, acceptance: 3 }, reply: 'She runs the menu in a softer voice while your hands are in her hair, and the combination undoes her. “This is my favorite service,” she admits. “Don’t tell the dining room. Do it again tomorrow.”' },
          { label: 'Lie, badly, about a special, just to hear her catch you.', effects: { affection: 3, trust: 2 }, reply: 'She catches you in four words and laughs until she has to breathe, which you help with a hand on the high curve. “Idiot,” she says, adoring. “Give me the real spoon. Earn the bed.”' },
        ],
      },
      event: {
        title: 'The bed brigade',
        prose: 'She calls it the bed brigade: two cooks, a tray stand, a phone, and Rosa at the center, immobile and in charge, running Saturday night from pillows. It works. At the end she is exhausted and shining, membrane creased, curls wild. “I cooked a service without standing,” she says, wondering and proud. “Come dismiss the brigade. Then I want only you. I want to be heavy and done and fed a little more, because victory is hungry. Don’t argue with victory.”',
        choices: [
          { label: 'Dismiss the brigade. Feed the victory.', effects: W(18, { affection: 4, dependency: 4, acceptance: 4, trust: 3 }), reply: 'The kitchen empties. You feed her slowly, a private second service, until victory looks like half-closed eyes and a smile. “I still have it,” she whispers, echoing a smaller night, meaning the whole life. “And I have you. That’s the special. Don’t print it.”' },
          { label: 'Dismiss them. Wash her. Stay without another performance.', effects: { trust: 5, affection: 5, acceptance: 4, dependency: 3 }, reply: 'No second performance. Water, cloth, oil, the lights down. She cries once, quiet, from relief. “I was so good tonight,” she says, almost surprised. “Tell me in the morning. Tonight just be the pillow I chose.”' },
        ],
      },
      intimacy: {
        opening: 'Brigade gone. She asks, plain: “Yes. Eyes, hands, and don’t treat the bed like a dining room.” The membrane opens. She is immense, clean, warm at every fold, a whole climate with a familiar face. “I can’t roll over and pin you,” she says, smiling. “So you come here and let me pin you with the fact of me. I want you inside. I want to feel all of this answer. And I want you to stay the night, not the seating.”',
        choices: [
          { label: 'Come here. Let her answer.', effects: { acceptance: 6, affection: 5, dependency: 4, trust: 3, weight: 6 }, result: 'You push into heat and the vast body answers, a slow wave, her eyes open, her hand tight on yours. She comes long and laughing, breathless, enormous. “Seating’s over,” she pants. “You’re the overnight. Do you understand? Good. Kiss me. Then we’ll see about a little more victory.”' },
          { label: 'An unhurried mouth, no menu.', effects: { affection: 5, acceptance: 6, trust: 4, dependency: 3 }, result: 'No menu. You find what she likes because you have learned her, not because she performs. She comes, swears softly in two languages, and pets your hair until her arm tires. “Overnight,” she repeats, smiling. “The highest reservation. You’re confirmed.”' },
          { label: 'Just hold the hearth of her.', effects: { trust: 5, affection: 5, acceptance: 5, dependency: 3 }, result: 'You lie against the high warm side of her, the room still smelling faintly of the service she ran from bed. She turns her face, effort and will, and kisses your brow. “This is the restaurant,” she says, sleepy, huge, sure. “And the home. Don’t mix them up. Do come hungry in the morning. I’ll still be here. That’s the promise and the pleasure.”' },
        ],
      },
    },
  ],
  dates: [
    {
      id: 'market',
      title: 'Market run',
      cost: 14,
      blurb: 'She shops like a campaign. You carry.',
      start: 'a',
      locked: (w) => (w.stage > 8 ? 'The aisles are a young woman’s game. She’ll send a list and cook through you.' : null),
      nodes: {
        a: {
          prose: ({ woman: w }) => `The market is bright and loud. Rosa drives the cart like a captain. ${w.stage >= 6 ? 'She leans into it, belly against the handle, and the aisle makes room or it doesn’t; she comments either way.' : 'She is already soft at the hip and completely sure about cheese.'} “If I pick it up, it’s coming home,” she says. “If you pick it up, it better be good.”`,
          choices: [
            { label: 'Carry what she picks. Add something rich.', next: 'b', effects: { weight: 10, affection: 3, dependency: 1, acceptance: 1 } },
            { label: 'Carry, and steal a kiss by the citrus.', next: 'c', effects: { affection: 3, trust: 1, weight: 4 } },
          ],
        },
        b: { end: true, prose: 'Home becomes a small feast of things that “needed using.” She eats while she cooks, which is the tell. “You shop like you want to be invited back,” she says. “You’re invited back.”' },
        c: { end: true, prose: 'Citrus oil on both your hands. She kisses you anyway, laughing, and makes you smell your wrists all the way home. “That’s you now,” she says. “Mine, and a little like oranges.”' },
      },
    },
    {
      id: 'lesson',
      title: 'A lesson with the spoon',
      cost: 0,
      blurb: 'Her hands over yours. The recipe is not the only thing being taught.',
      start: 'a',
      locked: (w) => (w.stage > 9 ? 'She teaches from the chair now. Same lesson. Less standing. Ask for Sunday at home.' : null),
      nodes: {
        a: {
          prose: ({ woman: w }) => `The kitchen is hers even when it’s yours. ${w.stage >= 5 ? 'She stands close, then sits on the stool and pulls the bowl to the new reach of her arms, belly a warm wall against your back if you let her crowd you.' : 'She stands behind you, soft front against your back, hands over yours on the spoon.'} “Stir like you mean to feed someone you want alive,” she says.`,
          choices: [
            { label: 'Learn. Taste every time she tells you.', next: 'b', effects: { weight: 8, trust: 3, affection: 3, flag: 'recipe' } },
            { label: 'Turn around and kiss the teacher.', next: 'c', effects: { affection: 3, acceptance: 1, weight: 4 } },
          ],
        },
        b: { end: true, prose: 'The sauce comes right. She makes you eat a bowl before you get proud. “You can feed me,” she decides. “That’s rarer than people think. Don’t waste it on modesty.”' },
        c: { end: true, prose: 'The spoon clatters. The kiss is thorough. Dinner is late and slightly overreduced and she doesn’t care. “Some lessons stick,” she says, lipstick gone, hip against yours.' },
      },
    },
    {
      id: 'tasting',
      title: 'Tasting menu, her rules',
      cost: 30,
      blurb: 'Either at Cazuela after close or wherever she points.',
      start: 'a',
      locked: () => null,
      nodes: {
        a: {
          prose: ({ woman: w }) => w.stage >= 10
            ? 'The tasting comes to her. Small plates are a joke she refuses; she has the cooks send the real sizes. “If it’s called a taste it should still count,” Rosa says, immense in the chair. “Sit where I can feed you and see your face.”'
            : 'After close, the dining room is yours. Rosa sets a flight of plates and a larger one for herself without comment, already rounding the table. “Tell the truth,” she says. “I can survive the truth. I cannot survive polite.”',
          choices: [
            { label: 'Tell the truth. Eat until she is proud.', next: 'b', effects: { weight: 16, affection: 3, dependency: 2, acceptance: 2, hunger: -20 } },
            { label: 'Tell the truth, and feed her the best bite yourself.', next: 'c', effects: { weight: 12, affection: 4, acceptance: 2, trust: 1 } },
          ],
        },
        b: { end: true, prose: 'She glows when you know what’s missing and when you know what’s perfect. Somewhere in the third plate her foot, or her knee, or the warm press of her leg finds you. “You can come to every close,” she says. “That’s a dangerous offer. Take it.”' },
        c: { end: true, prose: 'Feeding her the best bite turns the tasting into something private. She holds your wrist and finishes the spoon. “That’s the one,” she says, about the sauce or about you. “Don’t change it.”' },
      },
    },
    {
      id: 'sunday',
      title: 'Sunday pot',
      cost: 8,
      blurb: 'The family recipe. You stir. She decides what family means.',
      start: 'a',
      locked: () => null,
      nodes: {
        a: {
          prose: ({ woman: w }) => `Sunday, no service. ${w.stage >= 9 ? 'The pot is on a low burner she can reach from the chair, and you are the legs and the long stir.' : w.stage >= 5 ? 'She sits more than she used to and still runs the spoon, belly against the counter when she leans in to smell.' : 'She stands hip to hip with you, already tasting, already smiling.'} “This is my mother’s,” Rosa says. “Don’t rush it. Don’t leave.”`,
          choices: [
            { label: 'Stay and eat until the pot is a memory.', next: 'b', effects: { weight: 14, affection: 3, dependency: 2, flag: 'recipe', trust: 2 } },
            { label: 'Stay, and ask for the story more than the seconds.', next: 'c', effects: { trust: 4, affection: 3, weight: 6, flag: 'recipe' } },
          ],
        },
        b: { end: true, prose: 'The pot becomes a memory in the best way. She is full and soft against you and a little hoarse from talking. “You’re in the recipe now,” she says. “Don’t make me write it down. Just show up next Sunday.”' },
        c: { end: true, prose: 'She tells you about her mother’s hands, the cheap pot, the good days. The food is almost beside the point and then she remembers the food and feeds you the point anyway. “Stay the night,” she adds, practical. “Stories dry out if you leave.”' },
      },
    },
    {
      id: 'catering',
      title: 'A catering that gets away',
      cost: 16,
      blurb: 'A job, a van, and the way she eats when no diner is watching.',
      start: 'a',
      locked: (w) => (w.stage > 7 ? 'She sends the crew. Her body stays with the restaurant, and with you.' : null),
      nodes: {
        a: {
          prose: ({ woman: w }) => `The catering kitchen is hot and temporary. Rosa is in charge and also, between trays, a woman with a fork. ${w.stage >= 5 ? 'She sits on a cooler that complains and eats the end of the meat like a secret she’s done keeping.' : 'She moves fast, softer than the apron, stealing a bite and your attention.'} “Don’t look at the client,” she says. “Look at me. I’m the one who needs a partner in crime.”`,
          choices: [
            { label: 'Be the partner. Eat the evidence.', next: 'b', effects: { weight: 12, affection: 3, dependency: 2, acceptance: 1 } },
            { label: 'Run the trays so she can sit.', next: 'c', effects: { trust: 3, affection: 3, weight: 6 } },
          ],
        },
        b: { end: true, prose: 'The client gets a perfect tray. You get sauce on your mouth and her laugh in the van. “Crime,” she says, pleased, thigh against yours. “We’ll do it again. Bring a bigger cooler. For sitting, not for ice.”' },
        c: { end: true, prose: 'She sits. You run. At the end she looks at you like you did something more intimate than carrying shrimp. “Take me home,” she says. “I’ll feed you the part we didn’t serve.”' },
      },
    },
    {
      id: 'throne',
      title: 'Kitchen throne',
      cost: 0,
      blurb: 'Late: the chair, the tray, her voice, your hands.',
      start: 'a',
      locked: (w) => (w.stage < 6 ? 'She is still on her feet. Let her run the line before you build her a throne.' : null),
      nodes: {
        a: {
          prose: ({ woman: w }) => w.stage >= 11
            ? 'The throne is the bed and she is radiant in it, directing you with a spoon like a scepter. “Prep, then you sit,” Rosa says. “I didn’t reorganize a life so you could hover in the door like a waiter.”'
            : 'Her chair is set where the pass used to be. She is massive or getting there, terracotta, utterly at home. “Bring the bowl,” she says. “Then bring yourself. The chair has a side for you if we believe in physics.”',
          choices: [
            { label: 'Believe in physics. Feed her.', next: 'b', effects: { weight: 16, affection: 3, dependency: 3, acceptance: 3 } },
            { label: 'Believe in her. Do the care, then the meal.', next: 'c', effects: { trust: 4, affection: 4, acceptance: 3, dependency: 2, weight: 6 } },
          ],
        },
        b: { end: true, prose: 'Physics holds. She eats, you fit yourself against her side, and the kitchen goes quiet in the good way. “Throne’s a joke,” she says, softer. “The staying isn’t. Stay.”' },
        c: { end: true, prose: 'Care first: ties, folds, water, the kiss on the shoulder she ranks above speeches. Then the meal. She looks undone in the gentlest way. “This is why the room can orbit,” she says. “I have a center. Don’t wander off.”' },
      },
    },
  ],
};
