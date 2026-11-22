const W = (weight, extra = {}) => ({ weight, hunger: -8, ...extra });

export const june = {
  id: 'june',
  name: 'June Hale',
  age: 27,
  role: 'Ranger at the river preserve',
  hairStyle: 'crop',
  accent: '#7d9a62',
  hair: '#3a2a1c',
  skin: '#c98a5a',
  blush: '#d36a4f',
  baseWeight: 136,
  startStage: 1,
  metabolism: 5,
  activity: (stage) => (stage <= 4 ? 0.55 : stage <= 7 ? 0.95 : stage <= 9 ? 1.25 : 1.5),
  start: { affection: 14, trust: 18, dependency: 3, acceptance: 6 },
  bio: 'June Hale keeps the ridge trail and the river gate and a truck that smells like cedar. She is sun-browned, blunt, and built for distance, with a buzzed undercut she does herself and a flannel that has survived three winters. She likes you in the specific way of someone who shows up when the weather turns. She does not like being fussed over. The fuss is going to become necessary, and she will hate that, and then she will ask.',
  refuseStrong: '“No.” She puts the vial back in your pocket like a piece of trash she is recycling politely. “I’m not a pen. Don’t write on me. Cook, if you want to be in my day.”',
  refuseExtreme: 'She looks at the rig the way she looks at a unsafe bridge. “That’s a fall. I’m not jumping because you’re curious. Earn it or drop it.”',
  reactions: {
    pastry: [
      'She eats it in the truck so the crew won’t see, then wipes sugar on her thigh. “Don’t start.”',
      'The tart is gone before the parking brake is off. She rests a wrist on the new curve of her stomach and glares at the trailhead like it accused her.',
      'You put it in her hand where she sits. She eats slowly, annoyed at the pleasure. “Okay. Fine. It’s good. Shut up.”',
    ],
    honey: [
      'She takes a swallow and coughs. “That’s not trail food.” She takes another.',
      'Honey on her mouth, she won’t kiss you until she decides it was her idea. It was her idea.',
      'She drinks what you hold to her mouth. A sound escapes that she would deny under oath. “More. And don’t look so proud.”',
    ],
    feast: [
      '“This is ridiculous,” she says, building a second plate. “Pass the bread.”',
      'She eats until her belt is a rumor on the chair. “I’m not apologizing. You brought it.”',
      'The board sits across her. She clears it with the focus she used to give a ridge. After, she breathes, huge and quiet. “Stay. The chair’s better with you on the left.”',
    ],
    still: [
      'She takes the capsule like medicine she respects. “Good. I want a week where my knees aren’t the whole plot.”',
      '“If this is you trying to shrink me for the trail, say so.” You don’t. She nods once and swallows. “Then okay.”',
      'She turns the capsule in thick fingers. “It won’t give me the ridge back. It’ll let me breathe while I decide what replaces it. That’s allowed.”',
    ],
    nectar: [
      'She sniffs, suspicious, then drinks. “Tastes like a dare.” Her stomach growls on cue. She looks betrayed.',
      'Two cups and she is in your kitchen eating leftovers with her fingers, ears red. “Don’t log this.”',
      'You hold the cup. She drinks, throat working, one hand on the great rise of her belly as it answers. “Hell. Okay. Keep pouring.”',
    ],
    spike: [
      'The ampoule makes her furious and then ravenous. She eats the truck snacks, then your snacks, then glares. “You did this. Cook.”',
      'She grips the counter. “I can feel it in my teeth. Food. Now. And don’t talk about the trail while I’m like this.”',
      'Hunger empties the pride out. She opens her mouth for the first bite and shuts her eyes. “Again. I’m not asking twice. I’m asking continuously.”',
    ],
    keel: [
      '“Hip. The left one. And don’t make it weird.” It is a little weird. She allows it.',
      'The patch sits on a softness that wasn’t in last summer’s uniform. She presses it flat. “So I’m keeping more. Figures.”',
      'You need both hands. She watches, jaw tight, then soft. “Find a place that isn’t already arguing. That’s most of me. Do your job.”',
    ],
    cradle: [
      'She hates the look of the straps until the line starts. Then she stares at the ceiling. “Don’t talk. Or talk. Just don’t leave.”',
      'The cradle has to be let out. She notices and goes quiet in a dangerous way, then eats. “Okay,” she says finally. “Okay. I’m here. Keep going.”',
      'Extended, surrounded, she can’t pretend it’s a check-up. “Hand,” she says, short. You give it. She holds hard enough to hurt and keeps swallowing.',
    ],
    bloom: [
      'She reads the label like a safety briefing. “This jumps a person.” A long beat. “Do it. I’d rather jump than pretend the ridge is waiting.”',
      'The serum goes in. She looks down at herself as if the trail moved. “Hell,” she whispers. “Stay where I can grab you.”',
      'You dose her on the platform. There is no other surface. She nods once, eyes wet and angry and sure. “Let it take. I’m tired of almost fitting through my own life.”',
    ],
    loom: [
      'The tape measure makes her scowl. She orders something she can move in, then amends: something she can sit in. “Same person. Don’t get poetic.”',
      'She stands, then sits, because the fitting is long. “Build for the belly. It’s not a rounding error.”',
      'They drape cloth over her where she rests. She picks green, stubborn. “I’m still a ranger if I’m a ranger from a chair. Make it look like I meant it.”',
    ],
    sling: [
      '“I don’t need a winch,” she says, and then exhales when the weave takes the weight. “Don’t. Say. Anything.”',
      'She lets it hold the undercurve and her breasts and looks murderous at the relief. “Fine. It’s good. I hate that it’s good.”',
      'Clipping her in is morning. She lifts her arms as far as they go. “Tight. I want to feel held, not displayed. You know the difference. Do that.”',
    ],
    aerosol: [
      'She smells the room and squints. “You booby-trapped the air.” She stays anyway.',
      '“If I wake up hungrier I’m blaming you in writing.” She stays the night. She wakes up hungrier.',
      'She can’t turn toward the diffuser easily and still nods. “Figures. Even the weather in here is yours. Come closer. Air’s a bad substitute.”',
    ],
  },
  texts: {
    early: [
      'Ridge is mud. I’m going anyway. If you bring coffee I won’t call it a date.',
      'Ate my lunch at nine. Don’t start a file on me.',
      'Belt’s on a new notch. It’s the dryer. Shut up.',
      'Gatehouse after six. Bring nothing cute. Or bring food. Food’s allowed.',
    ],
    mid: [
      'I turned around at the switchback. Don’t reply with a speech.',
      'Uniform split. I have a pin and a bad attitude. You can have one of those.',
      'Truck’s full of groceries that are none of your business and also too many.',
      'Porch is easier than the bar. Come if you can sit quiet.',
    ],
    late: [
      'Describe the ridge. I’m not asking twice. Also bring dinner.',
      'Need a hand with the transfer. That’s the whole text. You can add words if you’re weak.',
      'Window’s good tonight. I’m better if you’re in the chair beside me.',
      'Don’t bring flowers. I can’t hold them and a bowl. Prioritize correctly.',
    ],
  },
  ambients: {
    early: [
      {
        title: 'Mud',
        prose: 'A photo from June: her boots, and a paper bag from the bakery in the truck cupholder, shot like evidence she intends to destroy. No caption.',
        choices: [
          { label: 'Reply: eat it while it’s warm.', effects: { weight: 4, affection: 1, dependency: 1 }, reply: 'She sends back a picture of an empty bag and the words: weak. Then: thanks.' },
          { label: 'Reply: I’ll walk the mud with you tomorrow.', effects: { trust: 2, affection: 2 }, reply: 'Tomorrow she waits at the gate with an extra coffee and pretends she hasn’t been early for twenty minutes.' },
        ],
      },
      {
        title: 'Gatehouse light',
        prose: 'You pass the preserve road and the gatehouse is still lit. June’s silhouette crosses the window, flannel, a pause with one hand on her belt like she’s negotiating with it.',
      },
    ],
    mid: [
      {
        title: 'Desk rumor',
        prose: 'A crew kid mentions, too casual, that Hale might take the desk job if the ridge keeps “being a lot.” June hears. The silence she aims at the kid could salt a road. She looks at you last, daring you to have an opinion in public.',
        choices: [
          { label: 'Save the opinion for the truck.', effects: { trust: 3, affection: 2 }, reply: 'In the truck she exhales. “I hate the desk. I hate falling more. Don’t decide for me in front of children.” She puts your hand on her knee, which is an apology.' },
          { label: 'Say she could do the desk and still be Hale.', effects: { acceptance: 2, trust: 1, affection: 1 }, reply: 'She doesn’t speak until the lot empties. “Maybe. Don’t sound so calm about it.” She kisses you once, brief, like stamping a permit.' },
        ],
      },
      {
        title: 'Switchback',
        prose: 'She calls from a place with wind in it. “I turned around,” she says. No hello. “My legs are fine. My lungs are fine. The rest of me is a pack I didn’t strap right. I’m coming down. If you’re at the bottom, fine. If you’re not, also fine.”',
      },
    ],
    late: [
      {
        title: 'Weather window',
        prose: 'She sends a picture of the sky from her window, nothing else in frame, then a second picture she clearly took by accident: the high curve of her belly, a bowl, your spare flannel.',
        choices: [
          { label: 'Tell her the sky and the second picture.', effects: { affection: 3, acceptance: 3 }, reply: 'She is quiet long enough to worry you. Then: Come look at both. Bring more of whatever was in the bowl. I finished it like a coward.' },
          { label: 'Just show up with food.', effects: { weight: 8, dependency: 2, affection: 2 }, reply: 'You show up. She blinks hard and pretends it’s the wind through the badly sealed window. “Okay,” she says. “You can see the sky. You can see me. Don’t rank them.”' },
        ],
      },
      {
        title: 'The truck, parked',
        prose: 'Her truck does not move for three days. You know because you look. On the fourth morning the porch light is on, which is June for I am in here and I have not vanished.',
      },
    ],
  },
  overnight(woman, day) {
    const early = [
      'She hiked it off and then ate it back on, annoyed at the math.',
      'A new notch on the belt. She moved the buckle and not the story.',
      'Crew lunch vanished. She blamed crows. Crows have alibis.',
      'She slept hard and woke hungry, which she called weather.',
    ];
    const mid = [
      'The ridge turned her around. Dinner did not.',
      'Uniform seam, safety pin, a long stare at the truck ceiling.',
      'She took the flat path and still needed the tailgate to think.',
      'Two bowls. She washed both before anyone could count.',
    ];
    const late = [
      'She ate where she sat and watched a storm hit a ridge she named for you once.',
      'Transfer to the window chair took both hands and a swear.',
      'A neighbor chopped wood she used to split. She said thanks like it hurt, then ate.',
      'Breath loud in the night. She still asked, silently, for more breakfast by leaving the bowl out.',
    ];
    const pool = woman.stage >= 9 ? late : woman.stage >= 5 ? mid : early;
    return pool[day % pool.length];
  },
  tableLine(woman) {
    const s = woman.stage;
    if (s >= 9) return 'June arrives because you brought her, flannel enormous, jaw set like the room might issue a citation. She takes the reinforced chair and overflows it, then nods at the bread as if it is a task she intends to finish.';
    if (s >= 5) return 'June sits carefully, uniform shirt open over a tee that has lost the argument with her stomach. She doesn’t order for anyone else. She does finish what lands near her, ears red, eyes steady.';
    return 'June is early, boots clean for once, flannel rolled, taking the chair with a view of the door. “I’m not dressing up,” she says, which is how you know she tried.';
  },
  stages: [
    {
      outfitName: 'Ranger greens, honest belt',
      mobilityTag: 'Miles',
      mobility: 'She can outwalk you without trying and will, then pretend she didn’t.',
      body: 'June at the start of the season is all use: long muscle in the thighs, a stomach flat under the uniform when she stretches, shoulders that have carried packs, small breasts, sun on her throat. The buzzed sides of her hair show a scar at the temple from a low branch. Her hands are nicked. There is nothing extra on her and she likes it that way, or she has not had to like anything else yet.',
      clothing: 'The greens fit. The belt sits where it sat last year. Boots are broken in. A flannel lives in the truck for when the ridge wind remembers it is a ridge.',
      talk: {
        line: '“You’re in the pullout again. Either you’re lost or you’re here for me. I’m not helping you with the first one.”',
        choices: [
          { label: 'I’m here for you.', effects: { affection: 2, trust: 2 }, reply: 'She looks at the trail instead of you, mouth trying not to be a smile. “Then carry the spare water. And don’t narrate.” She lets your shoulders bump on the way up.' },
          { label: 'I brought food that isn’t trail mix.', effects: W(4, { affection: 2, dependency: 1 }), reply: 'She eats it leaning on the truck, suspicious and then converted. “Don’t make it a habit where the crew can see.” A beat. “You can make it a habit.”' },
          { label: 'Walk and don’t talk.', effects: { trust: 3 }, reply: 'You walk. At the viewpoint she stands close enough that her sleeve brushes yours. “That’s better than most conversations,” she says. It is a compliment with dirt on it.' },
        ],
      },
      event: {
        title: 'The extra notch',
        prose: 'She is threading her belt in the gatehouse and the leather tongue goes one hole past the pale mark it has worn for two years. She stares at it like it insulted her mother. “Dryer,” she says, to you, who did not ask. The uniform still looks correct. The notch does not. Outside, the ridge is clear and she is angry at a piece of leather.',
        choices: [
          { label: 'Leave it. Walk with her anyway.', effects: { trust: 3, affection: 2 }, reply: 'You don’t touch the belt. On the trail she walks hard and then slower, beside you. “It’s one hole,” she says. “I’ve survived worse. Don’t manage me.” She bumps your hand with her knuckles. That’s the rest of the sentence.' },
          { label: 'Offer a better dinner than pride.', effects: W(5, { affection: 2, acceptance: 1 }), reply: 'She almost refuses. In your kitchen she eats like a person who has been honest with her body for one evening. “If you tell the crew I’m soft I’ll bury you on the switchback,” she says, mouth full, eyes warm.' },
        ],
      },
      intimacy: {
        opening: 'Her place is a cabin that smells like cedar and coffee. June kisses like she argues: direct, then, once you don’t flinch, hungry. Clothes are practical and then gone. She is muscle and sun-brown skin, small breasts, a stomach that jumps under your mouth, thighs that can hold you in place. “I don’t do speeches,” she says, already pulling you in. “I do this. If you want a speech, date a sign.”',
        choices: [
          { label: 'Match her pace.', effects: { affection: 3, trust: 3 }, result: 'It’s fast and then it isn’t. She comes with a punched-out breath and her heels in your back, laughs once, and lets you keep going until she is loose and swearing softly into your shoulder. After, she drinks water and offers you the cup like a truce.' },
          { label: 'Tell her you like feeding her.', effects: W(3, { dependency: 1, affection: 1, trust: -1 }), result: 'She stills. “Don’t mix that in yet.” Then she kisses you harder, as if to erase the sentence, and the sex is good and a little guarded. Later she eats an apple in bed and doesn’t share the thought. She does share the apple.' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 2 }, result: 'She tolerates it for a minute and then, surprising both of you, goes heavy. A hand stays fisted in your shirt. “This isn’t a thing I do,” she says. She is still there ten minutes later. The ridge can wait until morning.' },
        ],
      },
    },
    {
      outfitName: 'Greens, belt arguing',
      mobilityTag: 'Long loops',
      mobility: 'She still finishes the loop. She starts giving herself the downhill to recover and calling it technique.',
      body: 'Lean, with the first theft visible: a softness low on her stomach after big dinners, thighs a touch thicker in the uniform, the line of her jaw a shade less severe. Muscle is still the headline. The footnote is a gentle give when you put a hand on her waist over the flannel. She has color in her cheeks that isn’t only wind. Her breasts fill the sports bra she pretends is only for the job.',
      clothing: 'The belt makes a new mark. She has punched no hole; she is just wearing the old one tighter than the leather prefers. The greens pull across the thigh when she crouches. She notices and crouches less when anyone is looking.',
      talk: {
        line: '“I ate in the truck. That’s not a confession, it’s logistics. You can come to the cabin if you don’t bring a speech. You can bring seconds.”',
        choices: [
          { label: 'Bring seconds, skip the speech.', effects: W(6, { affection: 2, dependency: 1 }), reply: 'She eats standing at the counter, then sits, annoyed that sitting feels better. “You’re a problem,” she says, which means stay and do the dishes so she can watch your hands.' },
          { label: 'Walk the flat loop and keep your mouth shut.', effects: { trust: 3, affection: 2 }, reply: 'The flat loop is still easy for her and she knows you chose it kindly and resents the kindness and takes it. At the end she kisses you against the truck, brief, wind in both your mouths.' },
          { label: 'Ask about the belt mark.', effects: { trust: 1, acceptance: 1 }, reply: '“It’s a belt.” She shows you anyway, a red line on brown skin, the stomach above it faintly soft. “Happy? It fades.” She lets your thumb stay on it longer than the demonstration requires.' },
        ],
      },
      event: {
        title: 'Pack straps',
        prose: 'On the way down she shrugs the pack off and there are deep red grooves in both shoulders, higher than they used to sit because the belt, looser over a thicker waist, let the weight ride wrong. She hisses. “I strapped it like I strapped it at twenty-two,” she says. “I’m not twenty-two. Don’t make that a moment.” The grooves are livid. The rest of her is sun and effort and a new softness at the middle she adjusts the shirt over.',
        choices: [
          { label: 'Fix the straps. Say nothing else.', effects: { trust: 4, affection: 2 }, reply: 'You fix them. She watches your competence and some of the fight leaves her jaw. “Thanks,” she says, like it costs money. On the road she drives with one hand and doesn’t turn the radio up over the quiet.' },
          { label: 'Rub the grooves and feed her after.', effects: W(5, { affection: 3, acceptance: 1, trust: 2 }), reply: 'She allows the rub on the tailgate, ears red, then eats noodles on your steps like a woman paying herself back for the climb. “The straps are the problem,” she mutters. “Not the noodles.” She takes more noodles.' },
        ],
      },
      intimacy: {
        opening: 'She showers the trail off and comes to bed damp, less armored. You can feel the day in her thighs and the month in her waist: a softness that gives under your palm where there used to be only breath. She notices you notice. “It’s food and winter,” she says. “Don’t worship it. You can touch it.” She pulls you on top. The kiss is open and a little tired and very sure.',
        choices: [
          { label: 'Touch it. Don’t worship out loud.', effects: { acceptance: 3, affection: 3, trust: 2, weight: 2 }, result: 'Your hand stays on the soft low belly while you fuck her and she comes sharper for it, surprised, biting your wrist. After, she puts your hand back herself and says, “Okay. That’s allowed. Don’t write a ballad.”' },
          { label: 'Take her hard, the way the trail didn’t.', effects: { affection: 2, trust: 2 }, result: 'She wants the effort. You give it. She is still strong, meeting you, sweat and cedar. The softness only shows when she relaxes after, melting in a way the old June didn’t. She looks faintly betrayed by her own ease, then kisses you so the betrayal has somewhere to go.' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 2 }, result: 'She lies half on you, heavier than her pride expects, and goes quiet. “My shoulders hurt,” she admits to the dark. You rub them. She sleeps like someone who walked a long way home and found the door unlocked.' },
        ],
      },
    },
    {
      outfitName: 'Greens, thigh pulling',
      mobilityTag: 'She still finishes',
      mobility: 'Long routes take longer. She finishes them angry and honest, and she has started packing more food than the map requires.',
      body: 'Softening. The uniform tells on her when she sits on the tailgate: a small roll at the waist, thighs that fill the greens and touch if she doesn’t angle her knees. Her face is a little fuller under the eyes, sunburn sitting on softer cheeks. Breasts press the bra. Her stomach is no longer a flat fact; it is a warm modest curve your hand can cup through flannel. She is still fast. She is not light.',
      clothing: 'Crouching splits nothing yet, but the thigh seam goes pale with strain. She orders the same size on principle and swears when it fits like a suggestion. The belt is on the last hole that doesn’t hurt. She has not told the quartermaster.',
      talk: {
        line: '“I packed extra and I ate the extra and I’m not interested in your face about it. You can kiss me or you can arm-wrestle the truck. Those are the options.”',
        choices: [
          { label: 'Kiss her.', effects: { affection: 3, trust: 1 }, reply: 'The kiss is on the tailgate, her knee between yours, the new give of her waist under your hand. She makes a small sound and then scowls at herself. “Fine. That option. Come inside before the crew does a loop.”' },
          { label: 'Eat the next extra with her.', effects: W(8, { affection: 2, dependency: 2, acceptance: 1 }), reply: 'You split a loaf and cheese on the porch. She eats the larger half without doing the math out loud. “Don’t pack less next time,” she says. “I’m not a guest. I’m a— just don’t pack less.”' },
          { label: 'Offer to take the heavy pack.', effects: { trust: 2, affection: 1 }, reply: '“No.” Then, at the steep bit, “Yes. Give it back at the top.” At the top she is flushed and proud and a little softer in the middle than the skyline. She takes the pack. She also takes your hand for a second when the trail widens.' },
        ],
      },
      event: {
        title: 'Turned around',
        prose: 'She comes down the switchback alone, earlier than her own schedule, jaw locked. You are at the bottom because you are bad at not being at the bottom. “Don’t,” she says. Mud to the knee. A hand under the small curve of her stomach like a cramp she’s insulted by. “I turned around. The trail didn’t beat me. I just—” She looks at the ridge with something like grief. “I’m heavier. There. I said it. If you say ‘it’s okay’ I will put you in a ravine.”',
        choices: [
          { label: 'Say nothing. Hand her water. Walk her to the truck.', effects: { trust: 5, affection: 3 }, reply: 'You do exactly that. At the truck she sits hard and the suspension answers. She laughs once, ugly and relieved. “You can say it now. One sentence.” You tell her you’re glad she came down. She nods. “Acceptable sentence.”' },
          { label: 'Take her home and feed the anger.', effects: W(7, { affection: 2, acceptance: 2, dependency: 1, trust: 2 }), reply: 'She eats stew like it insulted her and then slows, shoulders dropping. “I’m going to get worse at that hill,” she says. “If you’re going to be weird about it, leave before I like you more.” You stay. She likes you more. It shows up as a second bowl pushed at you to share, which she finishes.' },
        ],
      },
      intimacy: {
        opening: 'After the turnaround she doesn’t want gentleness that feels like pity. She wants you. In the cabin she strips like she’s mad at the clothes: greens peeled off a softening waist, thighs solid, stomach a handful. “I can still do this,” she says, which is not what the moment is about, and pulls you down. The bed knows her weight a little more. So do you.',
        choices: [
          { label: 'Let her set a hard pace.', effects: { affection: 3, trust: 2, acceptance: 1 }, result: 'She rides you angry and then the anger melts into something raw. The softness of her stomach brushes you with every move. She comes with a gasp she tries to bite off and fails. After, she stays on you, catching breath she pretends is only sex. “I’m still me,” she says. You agree with your hands.' },
          { label: 'Slow her down and touch the new weight.', effects: { acceptance: 3, affection: 3, trust: 2, weight: 2 }, result: 'She resists for a minute, then melts when your mouth finds the curve above her waistband’s ghost. Pleasure makes her honest. She comes shaking, hand on the back of your head, and whispers, “Okay. It’s part of me. Don’t be smug.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3 }, result: 'She fights the hold and then, all at once, doesn’t. Face in your neck. “I hate turning around,” she says, muffled. You say nothing useful and everything right by staying. Her body is warm, a little heavier on your chest, and she lets it be.' },
        ],
      },
    },
    {
      outfitName: 'Greens, last honest fit',
      mobilityTag: 'Shorter loops',
      mobility: 'She has quietly swapped the long ridge for the river loop. She calls it rotation. The crew calls it nothing, if they like their jobs.',
      body: 'Soft and rounded, muscle quilted under a layer she can pinch and hates pinching in front of you, though she lets you. Her belly is a real mound over the belt, thighs thick enough to rub on the river loop, a faint flush of chafing she treats with powder and denial. Her face has softened; the scar at the temple sits in a fuller landscape. Breasts have weight when she takes the bra off, and she looks at them like new equipment. She still moves like a person who trusts her feet. The trust is getting negotiations.',
      clothing: 'The greens are on their last honest day. The button leaves a mark. She safety-pins the thigh seam after a crouch and swears a seam isn’t a verdict. A bigger set sits in a bag in the truck. She has not put it on. The flannel, stolen from you, fits more like a shirt than a tent now.',
      talk: {
        line: '“There’s a bigger uniform in the truck. If you bring it up I’ll change the subject to dinner. If you bring dinner I’ll change the subject to the uniform. Pick your loss.”',
        choices: [
          { label: 'Bring dinner.', effects: W(8, { affection: 3, dependency: 1, acceptance: 1 }), reply: 'She eats in the open flannel, belt off, and the mound of her stomach eases out like it was waiting. “I hate how much better that feels,” she says. “Do it again tomorrow. The dinner. Not the speech you didn’t make. Thank you for not making it.”' },
          { label: 'Bring the bigger uniform in from the truck.', effects: { trust: 2, acceptance: 3, affection: 2 }, reply: 'She puts it on like armor she resents. It fits. Her eyes go bright and angry and relieved. “Don’t clap,” she says. You don’t. She kisses you like a woman who can breathe at the waist for the first time in weeks.' },
          { label: 'Sit on the porch and skip both.', effects: { trust: 3, affection: 2 }, reply: 'You sit. The river is a fact. She leans, gradually, until her shoulder and the new softness of her side are against you. “This is allowed,” she decides. “Don’t upgrade it to a lifestyle without asking.”' },
        ],
      },
      event: {
        title: 'The crouch',
        prose: 'A kid twists an ankle near the river and June drops to a crouch out of instinct. The thigh seam of the old greens gives up with a short, mean rip. She still braces the kid, still radios, still does the job. Only when the truck arrives does she stand and feel the air on her skin. The rip frames a thick curve of thigh, pale against the sunburned rest. She looks at you, not the crew. “Eyes on the kid,” she tells them. To you, quieter: “Truck. Now. And don’t you dare laugh.”',
        choices: [
          { label: 'Truck. Your jacket. No laugh.', effects: { trust: 4, affection: 3, acceptance: 2 }, reply: 'You get her into the truck and your jacket over her lap. She sits with her hands on the wheel and breathes. “I’m ordering the bigger set in public tomorrow,” she says. “If I do it tonight I’m a coward. Come with me so I don’t bolt.”' },
          { label: 'Truck, and a stop for food on the way home.', effects: W(6, { affection: 2, trust: 2, dependency: 1, acceptance: 2 }), reply: 'She eats fries in your jacket, ripped greens open, thigh soft against the seat. The anger banks down into hunger. “I’m still good at the job,” she says. “Say that, not anything about the fries.” You say it. She believes you halfway, which is a lot.' },
        ],
      },
      intimacy: {
        opening: 'The ripped greens are on the floor. June stands, then decides standing is a performance, and pulls you onto the bed. Soft and rounded and strong underneath: you feel both when she hooks a leg over you. The belly presses, warm and new. She is wet and annoyed about how easy it is to want this. “Touch the part that ripped the pants,” she says. “I want it in the room. Then I want you to stop thinking and fuck me.”',
        choices: [
          { label: 'Touch the thigh, then do as you were told.', effects: { acceptance: 4, affection: 3, trust: 2, weight: 3 }, result: 'Your hand on the thick, bared thigh undoes some knot in her. Sex is deep and a little rough and then tender at the end without permission. She comes with her face in the pillow and a hand gripping yours against her stomach. “Okay,” she says, muffled. “It’s in the room. It can stay.”' },
          { label: 'Have her on top so she can feel her own weight.', effects: { affection: 3, acceptance: 3, dependency: 1 }, result: 'She feels it: the way her thighs spread on you, the belly resting against your stomach, the effort in her breath. For a second she hates it. Then pleasure catches up and she uses it, grinding, solid, real. After, she laughs once. “That’s not the ridge. That’s not nothing.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 2 }, result: 'You pull the blanket over the ripped day. She is heavier in your arms and notices and stays. “Tomorrow I buy the pants,” she says. “Tonight don’t let me get up and pace. I’ll pace myself into a speech.” You hold. The speech dissolves into breath.' },
        ],
      },
    },
    {
      outfitName: 'Larger greens, honest',
      mobilityTag: 'River loop, truck',
      mobility: 'The ridge is an occasional dare, not a schedule. The river loop and the truck are the job she can still finish clean.',
      body: 'Pleasantly chubby would offend her, so the facts: a belly that overhangs the new belt when she sits on the tailgate, thighs that fill the larger greens properly, breasts that require a sturdier bra she bought without comment. Her face is rounder, still sunburned, scar at the temple, mouth blunt. Upper arms soften the wave she uses to direct trucks. She is sweaty after the river loop and drinks water with one hand under her stomach, a gesture she catches and continues anyway. Standing from a low rock takes a hand on her knee.',
      clothing: 'The new greens fit in the morning and complain by dusk. She wears them like a decision. The old set is in the cabin closet, not the trash. Your flannel doesn’t button over her chest; she wears it open. Boots are the same. Boots are starting to feel optimistic by mile three.',
      talk: {
        line: '“Desk job’s on the table. I didn’t put it there, but I didn’t throw the table out. You can have an opinion if you keep it under one sentence and then make dinner.”',
        choices: [
          { label: 'One sentence: take the desk if it keeps you in the preserve.', effects: { trust: 2, acceptance: 2, affection: 2 }, reply: 'She chews on the sentence with actual food you made. “Maybe. I don’t want to become a radio.” She looks at her stomach, then at you. “I also don’t want to be a person who falls. Keep cooking. I’ll think.”' },
          { label: 'Skip the opinion. Make a big dinner.', effects: W(10, { affection: 3, dependency: 2, acceptance: 2 }), reply: 'She eats until the new greens are unbuttoned and her shoulders drop. “This is the first time today my body hasn’t been a problem,” she says. “Don’t ruin it. Sit closer. Your hip against mine. Yeah.”' },
          { label: 'Walk the river loop with her, slow.', effects: { trust: 3, affection: 2, weight: 2 }, reply: 'You go slow. She hates needing the pace and loves not being alone on it. At the truck she is flushed, belly rising against the greens, and she kisses you with river-cold hands. “Again,” she says. “Not faster. Again.”' },
        ],
      },
      event: {
        title: 'Desk duty, said out loud',
        prose: 'The supervisor is kind, which makes it worse. In the gatehouse, with the map between them, she offers June the desk “for the season, while you sort out the knee.” The knee is a courtesy. Everyone can see the rest: the larger greens, the way June sat down to do a conversation she would have done standing. June’s ears go red. She doesn’t look at you in the doorway. “I’ll answer tomorrow,” she says. When the supervisor leaves, the room is all fridge hum and her breathing.',
        choices: [
          { label: 'Wait. Let her speak first.', effects: { trust: 4, affection: 3 }, reply: 'It takes ten minutes. “If I say yes I’m not quitting,” she says. “Say that back.” You say it back. She nods, jaw working. “Then maybe yes. Come here. Don’t hover in the damn door.”' },
          { label: 'Take her out of the gatehouse and feed her somewhere with no maps.', effects: W(8, { affection: 2, trust: 2, acceptance: 2, dependency: 1 }), reply: 'Burgers in the truck, parked facing away from the preserve. She eats like a decision. “Tomorrow I’ll say yes,” she mutters. “Tonight I’m a person who gets fries. Sit on my side of the bench. There’s room if I make room.” There is, barely. She makes it.' },
        ],
      },
      intimacy: {
        opening: 'The larger greens come off and the line they left is pink across her belly. June looks at you looking. “Yeah,” she says. “Chubby. I can say it here. Don’t make me say it at work.” She pulls you between her thighs, which are thick and warm and stronger than her mood. The belly rests against you when she wraps you in. “I want to feel good in this. Help or get out of the bed.”',
        choices: [
          { label: 'Help. Hands on all of it.', effects: { acceptance: 4, affection: 4, trust: 2, weight: 3 }, result: 'You touch her like the size is wanted, because it is, by you, and tonight by her. She comes with a cracked-open sound, belly shaking, and stays open after, no armor. “Again tomorrow,” she says, hoarse. “The feeling. The food. Don’t make me schedule it in a memo.”' },
          { label: 'Let her keep a little armor on. Fuck her anyway.', effects: { affection: 2, trust: 2, acceptance: 1 }, result: 'Shirt half on, her idea. It doesn’t hide much. You fuck her deep and she meets you with muscle and softness both, a grunt in your ear that would scandalize the gatehouse. She finishes laughing, surprised. “Okay. Armor’s useless. Get it off. Stay.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 3 }, result: 'You spoon her and your arm has to travel farther. She notices and puts your hand on the pink line so you won’t hover above it. “Desk job might be yes,” she says. “This is already yes. Don’t confuse the two out loud.”' },
        ],
      },
    },
    {
      outfitName: 'Desk greens, stretch underneath',
      mobilityTag: 'Short walks',
      mobility: 'The desk is hers now. She still walks the flat path on good mornings. Hills are weather she watches.',
      body: 'Plump. The desk didn’t do it alone; appetite did, and the end of the ridge’s tax, and you. Her belly is heavy in her lap when she sits the chair she finally swapped for a wider one, a warm slope under stretch fabric. Thighs spread on the seat and press together when she stands, a soft sound. Breasts rest on the upper belly in the tee she wears under an open uniform shirt that no longer buttons. Her face is full, sun still there, expression still spare. She gets winded on the porch steps and pauses, hand on the rail she installed herself out of spite. The pause is part of the house now.',
      clothing: 'Official greens at the largest standard size, worn open. Underneath, stretch she orders online after a bad hour in a mall. Seams still print her sides by evening. She has given up on tucking anything in. Boots for the field she rarely enters; softer shoes for the desk. She hates the soft shoes and wears them.',
      talk: {
        line: '“I did the desk. I ate at the desk. If you say ‘see’ I’ll lock the gatehouse with you outside it. You can come in if you bring something that isn’t advice.”',
        choices: [
          { label: 'Bring dinner, not advice.', effects: W(10, { affection: 3, dependency: 2, acceptance: 2 }), reply: 'She eats at the porch rail, plump and sunset-lit, and some of the day’s humiliation leaves her shoulders. “The chair didn’t break,” she reports. “Low bar. Come sit. I’ll allow a knee against mine.”' },
          { label: 'Ask her to show you the flat path.', effects: { trust: 3, affection: 2 }, reply: 'You walk. She is slower and honest about it, belly moving, breath even if she paces. At the turnaround—the easy one—she looks at the ridge and doesn’t flinch. “I miss it. I’m not dead. Those can both be on the form.”' },
          { label: 'Rub her feet while she complains.', effects: { trust: 2, affection: 3, acceptance: 1 }, reply: 'She complains about the supervisor’s kindness, the shoes, the way her stomach touches the desk. Your thumbs stay steady. Mid-complaint she goes quiet and looks at you like you moved the furniture correctly. “Don’t stop. The left one. Yeah.”' },
        ],
      },
      event: {
        title: 'The bench',
        prose: 'The preserve’s public bench is a polite width. June, walking you out after a desk day, tries to sit and doesn’t fit without squeezing. The squeeze is undignified: plump hips, the bench biting, her belly resting on her thighs, a hiker approaching. She stands back up too fast, dizzy, proud. “Nope,” she says. The hiker passes. Her ears are crimson. “I’m not a public bench person anymore. Say nothing cute. Walk me to the truck.”',
        choices: [
          { label: 'Walk her to the truck. Say nothing cute.', effects: { trust: 4, affection: 3 }, reply: 'You do. In the truck she laughs once, sharp. “I used to fix those benches. Tomorrow I’m going to look at the work order and not die about it.” She squeezes your wrist. “You can be in the truck for that part.”' },
          { label: 'Take her home and make the evening bigger than the bench.', effects: W(8, { affection: 3, acceptance: 3, dependency: 2 }), reply: 'Home, food, the wide chair that doesn’t bite. She eats and then hauls your hand to the curve the bench couldn’t handle. “This doesn’t need a public,” she says. “It needs a chair and you. That’s a solvable problem. Don’t look so relieved. I’m still mad.” She isn’t, entirely.' },
        ],
      },
      intimacy: {
        opening: 'The uniform shirt stays on the chair. June is plump and solid in the bed, belly a heavy warm fact between you, thighs thick enough that you have to settle in with intention. She is self-conscious about the way she sweats, about the sound of her breath, and then she gets impatient with both. “I want you,” she says, plain. “I’m bigger. The want didn’t shrink. Get over here and act like you know.”',
        choices: [
          { label: 'Act like you know.', effects: { acceptance: 4, affection: 4, trust: 2, weight: 4, dependency: 1 }, result: 'You fuck her with a hand under the belly, lifting a little, and she groans at the relief and the depth. Orgasm is a full-body shake, the bed talking. She pulls you down into softness after and doesn’t apologize for the weight. “Good,” she says. “That’s the report. File it.”' },
          { label: 'Take her from the side so breath is easier.', effects: { affection: 3, trust: 3, acceptance: 3 }, result: 'Side by side she can breathe and still feel all of you. The plump stack of her presses back into your hips. She comes quieter than usual and more thoroughly, then laughs into the pillow. “Okay. The side is not a demotion. Noted.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 3 }, result: 'You fit around her with effort and she allows the effort. A long quiet. “The bench can go to hell,” she says. “This can stay.” Her hand covers yours on the slope of her stomach, keeping it there.' },
        ],
      },
    },
    {
      outfitName: 'Stretch and flannel, greens retired',
      mobilityTag: 'Porch and truck',
      mobility: 'She drives, she desks, she does the porch steps once without a pause and is proud, then sits. Hills are a window activity.',
      body: 'Fat, plainly, and the plainness has sanded some of the shame down to something she can hold. Her belly is round and low and rides her lap, a weight she supports with a forearm when she stands. Thighs are heavy columns in stretch leggings she pretends are temporary. Breasts rest on the belly’s upper slope. A roll at her back shows when the flannel shifts. Her face is full and brown and serious, a soft chin when she looks down at the radio, eyes still the color of a hard decision. The porch steps leave her breathing. She does them anyway when you’re watching, and sometimes when you aren’t, to prove a private point.',
      clothing: 'The greens are retired except for a fleece with the patch, worn open like a flag. Daily life is stretch and your old flannels, which have become hers, sleeves tight on thicker arms. Waistbands roll down under the belly. She is one bad week from admitting she needs things made, not bought.',
      talk: {
        line: '“I did three porch steps without stopping and I want that respected and then I want to sit down and eat. In that order. You can be proud. Briefly.”',
        choices: [
          { label: 'Be proud, briefly. Then feed her.', effects: W(12, { affection: 3, acceptance: 3, dependency: 2 }), reply: '“Proud,” you say, and she rolls her eyes and goes pink. Dinner is large and she eats it in the wide chair, belly easing over the rolled waistband. “Okay,” she says, softer. “That was the correct order.”' },
          { label: 'Sit with her and skip the athletic commentary.', effects: { trust: 3, affection: 3, acceptance: 2 }, reply: 'You sit. She puts her heavy legs across your lap, a trust fall in slow motion. “The steps aren’t the point,” she says. “You on the porch is the point. Don’t inflate.” Her foot nudges you, fond.' },
          { label: 'Talk about a custom set of clothes, practically.', effects: { acceptance: 3, trust: 2, affection: 2 }, reply: 'She resists, then exhales. “If I’m going to be this size at the desk I should look like I work there, not like I lost a fight with a catalog.” She lets you order samples. “No beige. I’d rather be naked. That’s not an invitation. It’s a standard.”' },
        ],
      },
      event: {
        title: 'Tailgate',
        prose: 'A crew kid saves her a seat on the old tailgate circle and doesn’t understand why she stays standing, fat and quiet, while everyone else hops up. The tailgate is a height and a narrowness. June looks at it like a trail closed for the season. Then she says, evenly, “I’ll take the chair.” There isn’t a chair. You go and get the folding one from her truck, the wide one she started keeping and hoped not to need in public. You set it down. The circle goes a little quiet. She sits. It holds. Her hands rest on her stomach because there isn’t another casual place for them.',
        choices: [
          { label: 'Sit beside the chair like it’s normal.', effects: { trust: 4, affection: 4, acceptance: 3 }, reply: 'You sit on a cooler, shoulder at her knee, and talk about a washout like it’s the only topic. The circle loosens. Later she says, “You didn’t make a production.” It is the highest review she gives. She squeezes your shoulder once, hard.' },
          { label: 'Take her home early with dinner in the truck.', effects: W(8, { affection: 3, trust: 3, dependency: 2, acceptance: 2 }), reply: 'She doesn’t want the rest of the circle. In the truck she eats and watches the preserve shrink in the mirror. “I hate needing the chair,” she says. “I don’t hate that you knew which one. That’s annoying.” She leans, as much as the belt of her stomach allows, toward your side.' },
        ],
      },
      intimacy: {
        opening: 'The wide chair holds her and you kneel, because the bed is a transfer she doesn’t want tonight. Fat and bare from the waist down, flannel open, she looks at you with a challenge that is mostly hope. “I’m not going to be athletic about this,” she says. “If that bothers you, say it before your mouth is on me.” The belly rests on her thighs. The heat of her is immediate. Her hand finds your hair like a handle she trusts.',
        choices: [
          { label: 'Show her it doesn’t bother you.', effects: { acceptance: 5, affection: 4, trust: 3, weight: 4, dependency: 2 }, result: 'Your mouth and then you, as deep as the angle allows, one arm cradling the weight of her belly. She comes with a broken swear and a laugh, shaking the chair. “Okay,” she pants. “Okay. Not bothered. Come up here and let me kiss the proof.”' },
          { label: 'Use your hands and keep eye contact.', effects: { affection: 3, acceptance: 4, trust: 3 }, result: 'She doesn’t look away, which costs her and feeds her. Pleasure builds slow. When she comes she grips your wrist and the flannel and doesn’t hide the way her fat moves. “Hell,” she says, reverent and annoyed. “Do that again on a day I wasn’t already tired. Or on this day. This day works.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 3, acceptance: 3 }, result: 'You wedge in beside her on the wide chair, half spilled onto the arm, and she allows the crowding. “The tailgate can rot,” she says. “This is a seat.” She falls asleep with her forehead on your temple, heavy, snoring once, denying it later.' },
        ],
      },
    },
    {
      outfitName: 'Custom fleece, stretch panels',
      mobilityTag: 'Assisted outings',
      mobility: 'Outings are the truck and a destination with a chair. She can walk a short flat with your arm. She plans the return before she plans the departure.',
      body: 'Massive. The word sits in the room the first time the custom fitter says it, and June repeats it once, testing for mockery, then keeps it. Her belly reaches her lap and spreads to the sides of the chair, a deep warm overhang. Thighs are huge, merging with her hips, the insides always in conversation. Breasts are heavy on the upper rise. Arms thicken the flannel she still wants in her colors. Her face is broad and brown and bare of disguise, a soft double chin, eyes like a level. Breath shows after the porch. She stands with your help: a rock, a grip, a swear, the weight landing honest in her knees. She is still June. The cabin has started to rearrange itself around that fact without asking the old layout’s permission.',
      clothing: 'Custom fleece in preserve green, panels of stretch, the patch sewn on because she insisted and the fitter was smart enough not to smile. It fits in the morning. By night the belly tests the hem. Ordinary chairs are not invited. She wears boots if she’s driving and slides them off with a grunt the second she’s home.',
      talk: {
        line: '“I stood. You’re allowed to have noticed. Now I’m sitting and I want your hands on the part the fleece is losing to. And food. I’m not ranking those.”',
        choices: [
          { label: 'Hands first, then food.', effects: { affection: 3, acceptance: 3, trust: 2, dependency: 2, weight: 6 }, reply: 'You work under the hem, the heavy underside, until her eyes half close. Then you feed her. She eats like the day finally started. “Correct ranking,” she says, mouth full. “Don’t get cocky.”' },
          { label: 'Food first, because she said she wasn’t ranking.', effects: W(12, { affection: 3, dependency: 3, acceptance: 2 }), reply: 'A big plate, no lecture. She finishes and puts your hand where the fleece gave up, a silent rank order after all. “I can want both,” she says. “Don’t make me pick a personality.”' },
          { label: 'Plan a flat outing that ends in the truck.', effects: { trust: 3, affection: 3 }, reply: 'You do it: a short flat, your arm, the truck as a known country. She is flushed and massive in the passenger seat after, looking at the trees. “I still like outside,” she says, almost surprised. “I just have to be driven at it like a— don’t finish that sentence. Take me home.”' },
        ],
      },
      event: {
        title: 'The work order',
        prose: 'She opens the bench work order at the desk and stares at the measurements she wrote two years ago. Standard width. Her pen hovers. You are in the doorway with lunch she will pretend is for both of you. “If I change the spec,” she says, “every bench on the flat loop gets wider. People will say it’s waste. People will say it’s me.” The pen doesn’t move. Her other hand rests on the great curve of her stomach, a place to put the nerves.',
        choices: [
          { label: 'Say: change the spec. It’s the job.', effects: { trust: 3, acceptance: 3, affection: 3 }, reply: 'She writes the new number in a hard, clear hand. “If they fight me I’ll win,” she says. “I know what doesn’t fit.” She looks at you. “Sit. Eat. I did a brave thing and I want lunch about it, not a plaque.”' },
          { label: 'Change the subject to lunch and let her decide after.', effects: W(8, { affection: 2, trust: 2 }), reply: 'You don’t push. Halfway through lunch she signs the order anyway and slides it face down. “Same thing,” she says. “I just didn’t want it to be your idea. It isn’t. Pass the rest of that.”' },
        ],
      },
      intimacy: {
        opening: 'Transfer to the bed is a project you both know. Once she’s there, massive against the pillows she trusts, June looks at you with wanting stripped of speeches. “I can’t toss you,” she says. “I can hold on. The belly’s in the way and also the point. Don’t avoid it and don’t treat it like glass. It’s me. Come here.”',
        choices: [
          { label: 'Come here. Hold the weight. Be inside her.', effects: { acceptance: 5, affection: 4, dependency: 3, trust: 2, weight: 5 }, result: 'You gather what you can of that heavy belly and fuck her in short, deep strokes. She holds on, strong hands, soft body, a groan that doesn’t pretend. She comes hard and pulls you against the warmth after, breathing like weather. “That’s mine,” she says, about you, about the feeling. “Good.”' },
          { label: 'Use your mouth until she says enough.', effects: { affection: 4, acceptance: 4, trust: 3 }, result: 'You lift, you kiss, you stay. She says enough a long time after she could have. When you come up she kisses her own taste off your mouth without flinching, which is a kind of vow. “Stay in the bed. Transferring back is tomorrow’s problem.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 3 }, result: 'You lie in the lee of her, one arm over as much as it can cover. She is quiet for a while. “Wider benches,” she says finally. “And you. That’s the season.” She sleeps easier with your weight against her side, a fact neither of you diagrams.' },
        ],
      },
    },
    {
      outfitName: 'Custom, mostly seated',
      mobilityTag: 'Mostly the cabin',
      mobility: 'The desk job is remote three days a week now. She transfers to a chair by the window. Outings require planning, your arm, and a reason.',
      body: 'Obese, and she has stopped spending the word like a test. The belly hangs in a deep apron over her lap and spreads across the reinforced chair, resting on her thighs, warm and present. Breasts slope into the upper fold. Thighs are enormous, the chair’s width mostly spoken for. Arms rest a little away from her sides. Her face is very full, scar still there, mouth still spare, eyes bright when the light hits the window. Ankles swell. She can stand with help, a slow negotiation, and she is proud of the bathroom and ashamed of the pride and then done with both. The cabin has wider paths between furniture because she looked at the room like a trail and rerouted it.',
      clothing: 'Custom everything, ties at the sides, a preserve-green layer she still calls a uniform when she has a video call. It gaps when she eats, which is often. Shoes are slip-on. The fleece patch remains. She has a sling in a bag she hasn’t committed to and keeps looking at.',
      talk: {
        line: '“Window’s the whole commute and I don’t hate it as much as I planned. Come be in the commute. Bring food. I’m not subtle and I’m not sorry today.”',
        choices: [
          { label: 'Be in the commute. Bring a lot of food.', effects: W(14, { affection: 3, dependency: 3, acceptance: 3 }), reply: 'You eat by the window with her, though mostly she eats and you watch the light move across the mass of her. “This is a life,” she says, testing. “It’s smaller on a map and bigger in the chair. Sit where I can touch you without a plan.”' },
          { label: 'Help her through a short stand and a wash.', effects: { trust: 4, affection: 3, dependency: 2, acceptance: 2 }, reply: 'The stand is work. The wash is intimacy without sex, and she is flushed and grateful and sharp about the grateful. “You don’t get a medal,” she says, leaning into your hands. “You get to stay for the part after, which is better.”' },
          { label: 'Open the sling bag and wait.', effects: { trust: 2, acceptance: 2, dependency: 2 }, reply: 'She looks at it a long time. “Not today,” she says. “Today is a no, not a never. Feed me instead so the no doesn’t turn into a mood.” You feed her. The bag stays open, which is its own answer.' },
        ],
      },
      event: {
        title: 'Remote',
        prose: 'The supervisor calls to make the remote days official. June thanks her in a voice that doesn’t shake and hangs up. Then she stares at the window until the glass stops being a courtesy. “I’m a ranger who doesn’t range,” she says. “Say a true thing or get out of my cabin.” Her hand is fisted on the crest of her belly. The true things available are all dangerous.',
        choices: [
          { label: 'You’re a ranger who knows the place well enough to protect it from here.', effects: { trust: 4, affection: 4, acceptance: 3 }, reply: 'She hates how much she needs that sentence and takes it anyway. A nod. Then, rough: “Come here.” You come. She presses her forehead to your shoulder, the rest of her a warm country against your chest, and stays until the fist unclenches.' },
          { label: 'True thing: I want you, this size, in this cabin.', effects: W(8, { affection: 3, acceptance: 4, dependency: 3, trust: 2 }), reply: 'She laughs once, wet. “That’s true and inconvenient.” She pulls you in by the shirt. “Then want me with food in your hands. I’m not going to be brave on an empty stomach.” You do both. The window stays bright.' },
        ],
      },
      intimacy: {
        opening: 'You help her tip back just enough. Obese and wanting, she is a furnace at the folds, breath already working, eyes on you so she doesn’t have to be brave alone. “I’m not fragile,” she says, the old line, and then amends it. “I’m a lot. You can handle a lot or you can tell me now.” The belly fills her lap. Her thighs make a heavy gate. She opens it as far as she can, which is an invitation with weather in it.',
        choices: [
          { label: 'Handle a lot.', effects: { acceptance: 5, affection: 4, dependency: 3, trust: 3, weight: 5 }, result: 'You cradle the weight, you push in, you stay. She comes with a sob she doesn’t apologize for, the chair creaking, her hands strong on your arms. After, she is loose and huge and looking at the ceiling like it did her a favor. “Handled,” she says. “Good. Don’t go far. I can’t go after you.”' },
          { label: 'Make it slow and mostly your mouth.', effects: { affection: 4, acceptance: 4, trust: 3 }, result: 'Slow. She curses you fondly. Orgasm rolls through her and leaves her laughing breathlessly, one arm over her eyes. “I can’t kick you,” she says. “Consider yourself lucky and extremely invited back.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 4 }, result: 'You fit yourself along her side and take the weight she leans into you. “Remote isn’t exile if you’re in the room,” she says, which is as close as she gets to a poem. She makes you repeat nothing. She just keeps your hand under hers on the big curve, both of you watching the actual weather.' },
        ],
      },
    },
    {
      outfitName: 'Panels, sling nearby',
      mobilityTag: 'Transfers',
      mobility: 'Standing is a two-person task she budgets. The bathroom is a journey. The window chair is the capitol.',
      body: 'Super obese, and the cabin’s paths prove it. She fills the window chair until the chair is a suggestion around a fact: belly a vast shelf from chest to mid-thigh, rolls at her sides, breasts splayed into the upper softness, thighs enormous and always touching. Arms rest on herself. Her face is a full, serious moon, scar a pale comma, mouth chapped from breath. She glistens by afternoon. Standing requires you: rocking, your shoulder under her arm, a gasp that is half laugh, knees taking a weight they file a complaint about. She can still do it. She does not spend it casually. Most of the day the world comes to the chair: radio, food, you, weather.',
      clothing: 'Laced panels, preserve green because she fought for the dye. They are loosened after breakfast and relaced only if someone from work will see her on a screen. Otherwise a sheet, or your flannel thrown over her shoulders like a flag of a country that still has a name. The sling is out of the bag. Some mornings she wears it. She won’t always call it that.',
      talk: {
        line: '“I made it to the chair. That’s the hike. Now sit where I don’t have to crane. My neck’s not taking applicants. And don’t hover with the plate. Hand it over.”',
        choices: [
          { label: 'Hand it over. Then another.', effects: W(14, { affection: 3, dependency: 4, acceptance: 3 }), reply: 'She eats both, focused, a ranger’s attention turned inward. After, she guides your head to the side of her belly, a resting place. “That’s the summit,” she says, dry. “Don’t clap. Stay.”' },
          { label: 'Help with the sling and a careful stand.', effects: { trust: 3, affection: 3, dependency: 2, acceptance: 2 }, reply: 'The sling takes what it can. The stand still costs. She is sweating and proud and leaning on you after, massive and shaking slightly. “See,” she says. “Not a statue. Now sit me down before I prove a point I can’t afford.”' },
          { label: 'Describe the ridge when she asks.', effects: { trust: 4, affection: 4 }, reply: 'You describe mud, wind, the switchback, the view she turned around in. She listens with her eyes closed, hand on the high curve. “Okay,” she says. “I have it. Now describe dinner. I live here. I’m not a ghost story.”' },
        ],
      },
      event: {
        title: 'The neighbor’s wood',
        prose: 'The neighbor has been splitting the stack June used to split. Today he leaves it too close to the steps, meaning well, and she cannot get the chair’s transfer path clear without you. She stares at the kind, wrong pile. “I used to do that in an hour,” she says. No nostalgia in it, just inventory. “I’m not going to perform gratitude I don’t feel, and I’m not going to pretend I can move it. Can you move it and not make me watch like a lesson?”',
        choices: [
          { label: 'Move it. Let her not watch.', effects: { trust: 4, affection: 3, acceptance: 2 }, reply: 'You move the wood. She looks at the window instead, which is the privacy you can give. When you come back in she has a plate waiting, badly assembled, clearly hers. “Thanks,” she says. “Eat that. I can still feed a person. It’s not nothing.”' },
          { label: 'Move it, then sit and let her be angry.', effects: { trust: 5, affection: 4, acceptance: 3 }, reply: 'You move it and you don’t fix the anger. She is angry, then quiet, then leaning the great warmth of her against your shoulder. “I miss the axe,” she says. “I don’t miss being alone with it. Don’t mix those up when you tell this story later. There will not be a story. Forget I said later.”' },
        ],
      },
      intimacy: {
        opening: 'The transfer to a position you can both bear takes patience she has learned and still rations. Super obese, bare, sling loosened, she looks at you between breaths. “I want it,” she says. “I also want you to stop if my breath goes wrong. That’s the whole manual. The rest is— touch me like I’m not a problem you’re solving. I’m a woman. A large one. Come on.”',
        choices: [
          { label: 'Touch her like a woman. Be inside her.', effects: { acceptance: 5, affection: 5, dependency: 3, trust: 3, weight: 5 }, result: 'You follow the manual and the want. She comes with a long, rough sound, belly heaving, hand locked on your wrist. After, you check her breath because she told you to, and she rolls her eyes, fond, still panting. “Good. Both parts. Stay on my left. I sleep better with a witness.”' },
          { label: 'Mostly hands, mostly time.', effects: { affection: 4, acceptance: 5, trust: 4 }, result: 'Time is the decency. She crests slow, cursing softly, and when it’s over she looks wrung out and young around the eyes. “I forget I can feel that much when moving is the tax,” she says. “Remind me. Not every day. Enough days.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 4, dependency: 2 }, result: 'You hold the side of her and take some of the weight and let the rest be held by the chair she chose. “Wood’s moved,” she says, almost asleep. “Ridge is still there. I’m still here. That’s three true things. Don’t add a moral.” You don’t. The moral is your arm, staying.' },
        ],
      },
    },
    {
      outfitName: 'Sling and a sheet',
      mobilityTag: 'Bed, chair, lift',
      mobility: 'The winch and your body move her between bed and window. The bathroom is a planned expedition with the sling. She does not pretend otherwise.',
      body: 'Near-immobile. June says it once, in the voice she uses for trail closures, and then uses the energy on other things. Her body fills the window chair and the bed’s center: belly a broad heavy sea, sides spilling, thighs part of the mass, breasts supported by the sling she finally claimed in preserve green. She can shift with the winch and with effort that pinks her face. Her arms are thick and practical and short of the far side of herself. The scar at her temple is the same. The eyes are the same. Breath is a companion she has stopped arguing with in front of you. She watches weather. She still knows the names of what the weather is doing to a ridge she may not walk again. She has not become less.',
      clothing: 'The sling is the real garment, green weave, straps she had padded because chafing makes her mean. A sheet or a custom panel underneath, changed with help. The uniform patch is stitched to a small blanket she keeps on the chair, which sounds like a surrender and functions as a standard. She asked for the dye twice. She got it.',
      talk: {
        line: '“Describe the ridge. Then tell me what you brought. Then put your hand in mine so I don’t have to hunt for you. I’m not hunting. That’s the joke. Laugh later.”',
        choices: [
          { label: 'Ridge, then the food, then your hand.', effects: W(12, { affection: 4, trust: 3, dependency: 3, acceptance: 3 }), reply: 'You do the list in order. She eats while you talk, eyes on the window, hand locked in yours. “Good report,” she says, which is love in her dialect. “Leave the hand. The rest of you can also stay.”' },
          { label: 'Skip the ridge. Ask about her day.', effects: { trust: 3, affection: 4, acceptance: 2 }, reply: 'She blinks. Then she tells you: a call, a pain in the left fold, a bird she still knows by sound. “I thought you wanted the legend,” she says. “The day is smaller. It’s mine. Sit closer to the smaller thing.”' },
          { label: 'Wash what she can’t reach, then sit.', effects: { trust: 4, affection: 3, dependency: 2, acceptance: 3 }, reply: 'Care first, no crowd of words. She directs you in short phrases and then goes quiet in the good way. “You’re not staff,” she says. “If you start acting like staff I’ll fire you and hire you back as yourself. Consider this the warning and the thanks.”' },
        ],
      },
      event: {
        title: 'Closure notice',
        prose: 'A storm takes out a piece of the switchback. June writes the closure notice from the window chair, two-finger typing, belly against the table you pulled in. She knows exactly which roots will slip. She writes like a person who was there this morning, because knowledge doesn’t always need feet. When she finishes she looks wrung out and bright. “Send it,” she says. “And don’t tell me it’s the same as walking. It isn’t. It’s what I’ve got. I want it used, not pitied.”',
        choices: [
          { label: 'Send it. Tell her the notice is correct.', effects: { trust: 4, affection: 4, acceptance: 3 }, reply: 'You send it. You tell her. She nods, satisfied, a ranger with a closed trail and an open life. “Now feed the author,” she says, gruff with relief. “Closure notices are hungry work.”' },
          { label: 'Send it, and celebrate with a meal that takes time.', effects: W(14, { affection: 3, dependency: 3, acceptance: 4, trust: 2 }), reply: 'The meal takes time because you feed her and she eats slowly, savoring being done with the sentence. “I protected it from here,” she says, almost wondering. “Okay. That’s real. Don’t clap. Pass the next thing.”' },
        ],
      },
      intimacy: {
        opening: 'The sling holds. You kneel between thighs that are a landscape. June’s hand stays in yours because that was the agreement. Near-immobile, she is still blunt. “I want you in me,” she says. “If the breath goes wrong, you stop. If it goes right, you don’t get heroic and finish in thirty seconds. I’ve got nowhere to be. Use that.”',
        choices: [
          { label: 'Use the time. Stay in her.', effects: { acceptance: 5, affection: 5, dependency: 3, trust: 3, weight: 5 }, result: 'You go slow and deep and watch her breath the way she ordered. She comes long, a rough cry, squeezing your hand hard enough to hurt. After, she is smiling a small real smile. “Correct,” she says. “That’s the whole performance review. Now hold the left side. It aches when I’m happy. Annoying.”' },
          { label: 'Mostly your mouth, her hand on your head.', effects: { affection: 4, acceptance: 5, trust: 4 }, result: 'She guides with pressure, not speeches. When she comes she laughs once, breathless, furious with how good it is. “I can’t believe I used to rush this,” she says. “Come up where I can see you. I’m not done looking.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 4, dependency: 2 }, result: 'You hold left side, hand, the part of the belly the sling doesn’t soothe. She watches the storm on the ridge she just closed. “Stay until the notice is old news,” she says. “And until I’m asleep. Same deadline.”' },
        ],
      },
    },
    {
      outfitName: 'Adaptive membrane, green edge',
      mobilityTag: 'Immobile',
      mobility: 'She does not stand. Turning and washing and the bathroom are procedures with you or a winch. She runs her piece of the preserve from the platform: radio, phone, a mind that still knows every root.',
      body: 'Immobile, and mean about any voice that tries to make that smaller than a life. The Helix platform fills the cabin’s main room because she refused to move to a clinic. She fills the platform: a vast belly rising higher than her knees, spreading wider than your reach, thighs joined to the mass, breasts heavy and splayed, arms thick and only long enough for the near world—your hand, a radio, a fork if you set the tray on the upper curve. Her face is a full, flushed moon above folds of chin, scar visible, eyes clear. Breath is constant. So is her attention. She is dependent on you for the turns, the washes, the far itch, the bowl. She is not dependent on you for herself. She will tell you, on a day with good light, that she is still June Hale, and that she wants dinner.',
      clothing: 'An adaptive membrane with a green binding she specified, splits for care, the preserve patch stitched near the shoulder where she can almost see it. It holds and strains. Some afternoons she asks you to open it all and let the cabin air touch the folds. Modesty, she says, is a trail she closed on purpose. Preference remains. Her preference is clean skin, your hands, and the radio within reach.',
      talk: {
        line: '“Storm’s hitting the switchback I closed. I was right about the roots. That’s my brag. The other brag is I’m hungry and I can’t reach the bowl you set two inches too far, which is a firing offense. Fix it. Then listen to the wind with me.”',
        choices: [
          { label: 'Fix the bowl. Listen. Bring more.', effects: W(16, { affection: 4, dependency: 4, acceptance: 4, trust: 2 }), reply: 'You fix the distance. She eats, and the wind does what she said it would. “I like being right,” she says, softer. “I like you where I can reach. Don’t move the bowl. Don’t move you.”' },
          { label: 'Ask her to tell you the roots, then wash her hair.', effects: { trust: 4, affection: 5, acceptance: 3 }, reply: 'She tells you the roots while you wash her hair, practical and almost tender. The combination undoes her more than praise would. “Okay,” she says, eyes closed. “That’s a good day. Write it down nowhere.”' },
          { label: 'Lie about the bowl so she’ll laugh.', effects: { affection: 3, trust: 2 }, reply: 'You blame a ghost. She snorts, then has to catch her breath from the snort, then grins with her whole face. “Idiot,” she says, fond. “Give me the spoon. Earn your keep.”' },
        ],
      },
      event: {
        title: 'Still Hale',
        prose: 'A new supervisor, young, calls her “hon” and suggests a facility “better equipped for someone in your condition.” June is quiet so long the radio clicks. Then she says, “My condition is June Hale, and the facility is my cabin, and the person equipped is the one I chose. If you need a ranger who knows why the switchback fails, you have one. If you need a smaller woman, hire a photograph.” She ends the call. Her hand is shaking on the vast top of her belly. She looks at you. “Say I’m right. One sentence. Then I want to be held so I don’t throw the radio, which I still need.”',
        choices: [
          { label: 'You’re right.', effects: { trust: 5, affection: 5, acceptance: 4 }, reply: '“You’re right.” You hold what you can, cheek against the side of her face, arm across a fraction of her. The shaking slows. “Good sentence,” she mutters. “Don’t improve it. Stay until the wind stops showing off.”' },
          { label: 'You’re right. And you’re not done growing if you don’t want to be.', effects: W(10, { affection: 4, acceptance: 5, dependency: 4, trust: 3 }), reply: 'She huffs a laugh that moves the whole bed. “Greedy.” She pulls your hand to her mouth and kisses the knuckle, brief. “Fine. Both things. Dinner first. Growth is a hobby, not a sermon. Don’t you start sermonizing. I’ll know.”' },
        ],
      },
      intimacy: {
        opening: 'You ask. She says, “Yes. Eyes up. I’m in here.” The membrane opens. She is immense, hot, clean because you washed her an hour ago, every fold a place that exists because you both decided it would be cared for and, when she wants, enjoyed. You cannot lay on her. You can come to the edge. She watches you the whole time you arrange yourself. “I can’t move toward you,” she says. “So you move, and you keep looking at my face, not just the size. The size is real. The face is where I’m talking from. Now come here.”',
        choices: [
          { label: 'Move. Look at her face. Be inside her.', effects: { acceptance: 6, affection: 5, dependency: 4, trust: 4, weight: 6 }, result: 'You do all three. She comes with her eyes open, a rough, wondering sound, the great body answering in waves she doesn’t steer. After, she is crying a little and annoyed about it and holding your hand. “I’m here,” she says. “I told you. Don’t lose the face. The rest is yours to hold.”' },
          { label: 'An hour on the places only you are allowed.', effects: { affection: 5, acceptance: 5, trust: 5, dependency: 3 }, result: 'You take the hour. She directs in short phrases and in breath. Pleasure stacks until she is loose and swearing softly and very present. “Enough,” she says at last, tender. “You found me. Now sit where I can see you eat something too. I’m not the only animal in the cabin.”' },
          { label: 'Just hold what you can reach.', effects: { trust: 5, affection: 5, acceptance: 5, dependency: 3 }, result: 'You lie along the high warm side of her, face near her face, hand where she puts it. The wind hits the ridge she closed. She listens, satisfied. “This is the life,” she says, quiet, enormous, sure. “Not the only one I wanted. The one I have. You’re in it. Fix the bowl before you fall asleep. Two inches closer. I’ll know if you miss.”' },
        ],
      },
    },
  ],
  dates: [
    {
      id: 'ridge',
      title: 'The ridge while it lasts',
      cost: 6,
      blurb: 'Mud, a view, and the pace she sets.',
      start: 'a',
      locked: (w) => (w.stage > 5 ? 'The ridge is a closure she feels in her knees. Ask her for the flat path or the porch.' : null),
      nodes: {
        a: {
          prose: ({ woman: w }) => `The trailhead smells like wet cedar. June hands you the spare water. ${w.stage >= 4 ? 'She is thicker in the greens, a belly starting under the belt, and she sets a pace that admits it without comment.' : w.stage >= 2 ? 'The belt is on a newer notch and she walks like she can outrun the fact.' : 'She is all stride and sun, already ten feet ahead and pretending not to check that you followed.'} “Keep up,” she says. “Or don’t. The view doesn’t need you. I might.”`,
          choices: [
            { label: 'Keep up and share your food at the top.', next: 'b', effects: { weight: 6, affection: 2, trust: 2 } },
            { label: 'Ask to turn around when her breath goes.', next: 'c', effects: { trust: 3, affection: 2, acceptance: 1 } },
          ],
        },
        b: { end: true, prose: 'At the top she eats more than she planned and looks angry about the view’s beauty and her own hunger, which means she is happy. The walk down is slower. She lets your hand bump hers and calls it balance.' },
        c: { end: true, prose: 'She hates the ask and takes it. Halfway down she says, “Don’t make a hobby of being right.” At the truck she kisses you once, hard, a stamp. “Tomorrow, shorter. Bring more food than that. I mean it.”' },
      },
    },
    {
      id: 'lake',
      title: 'Lakeside',
      cost: 12,
      blurb: 'A flat shore, a cooler, no audience.',
      start: 'a',
      locked: (w) => (w.stage > 8 ? 'The shore path is too much. She will sit with a picture of the lake and a real meal instead.' : null),
      nodes: {
        a: {
          prose: ({ woman: w }) => `The lake is gray-green and empty. ${w.stage >= 6 ? 'June takes the wide corner of the blanket and still overflows it, belly on her thighs, boots off, pretending the sit was casual.' : w.stage >= 3 ? 'She sits harder than she used to and the blanket shifts. She dares you to mention it.' : 'She skips a stone badly on purpose to make you laugh.'} “If you packed salads only, I’m leaving you for the geese.”`,
          choices: [
            { label: 'Open a cooler that could offend a goose.', next: 'b', effects: { weight: 12, affection: 3, dependency: 1, hunger: -16 } },
            { label: 'Swim, or wade, and don’t count anything.', next: 'c', effects: { trust: 2, affection: 3, acceptance: 1 } },
          ],
        },
        b: { end: true, prose: ({ woman: w }) => w.stage >= 5 ? 'She eats until the waistband is a rumor and then lies back, one arm over her eyes, stomach rising. “Don’t talk,” she says, content. “Just sit where I can find you.”' : 'The cooler survives, barely. She gets drowsy and honest and puts her head on your pack. “This is a good use of a day off,” she mutters. “Don’t upgrade it to a brand.”' },
        c: { end: true, prose: 'The water is cold enough to be a personality. She swears, laughs, and comes out heavier with wet clothes and lighter in the face. On the blanket she steals your dry shirt. “Earned,” she says.' },
      },
    },
    {
      id: 'cabin',
      title: 'Cabin night',
      cost: 0,
      blurb: 'Her stove, your job to not narrate it.',
      start: 'a',
      locked: () => null,
      nodes: {
        a: {
          prose: ({ woman: w }) => w.stage >= 10
            ? 'The cabin has been rerouted around her. You cook because the stove is a commute. June, immense in the window chair, directs the salt like a person who still owns the place. “More. I’m not a guest.”'
            : w.stage >= 6
            ? 'She takes the wide chair and lets you cook, which is trust. The greens are open. Her stomach eases out as the kitchen warms. “Don’t make it pretty,” she says. “Make it a lot.”'
            : 'She has the stove already going, competent, a little shy about wanting you in the room. “Sit. Or chop. Don’t hover.”',
          choices: [
            { label: 'Make it a lot.', next: 'b', effects: { weight: 14, affection: 3, dependency: 2, acceptance: 1, hunger: -18 } },
            { label: 'Cook and then rub whatever the day hurt.', next: 'c', effects: { trust: 3, affection: 3, acceptance: 2, weight: 4 } },
          ],
        },
        b: { end: true, prose: 'A lot turns out to be the correct amount. She eats until her words get simple, which is how you know she’s safe. “Stay,” she says. “The door sticks. That’s the excuse. The reason is the other thing.”' },
        c: { end: true, prose: 'You cook, then you put your hands where she points: shoulders, knees, the soft underside if she has one tonight. She goes quiet in the good way. Outside, something nocturnal screams. “Romantic,” she says, dry, and keeps your hand.' },
      },
    },
    {
      id: 'supply',
      title: 'Supply run',
      cost: 10,
      blurb: 'The big store, a cart, her rules.',
      start: 'a',
      locked: (w) => (w.stage > 9 ? 'The store is aisles and standing. She sends a list. You can still cook it at her place.' : null),
      nodes: {
        a: {
          prose: ({ woman: w }) => `Fluorescent light, a cart. June drives it like a truck. ${w.stage >= 7 ? 'She leans on it more than she steers it, breath even, belly brushing the handle, daring the aisle to comment.' : w.stage >= 4 ? 'The greens are tight and she keeps the cart close, a shield and a support.' : 'She moves fast, annoyed at displays, throwing in more food than the list.'} “If I want it, it’s on the list,” she says. “The list is oral.”`,
          choices: [
            { label: 'Follow the oral list without commentary.', next: 'b', effects: { weight: 8, trust: 2, affection: 2, dependency: 1 } },
            { label: 'Add treats and take the lecture.', next: 'c', effects: { weight: 12, affection: 2, acceptance: 2, dependency: 2 } },
          ],
        },
        b: { end: true, prose: 'You don’t comment. In the truck she looks almost startled by the lack of a fight. “You’re learning,” she says, and puts a hand on your knee for three whole seconds.' },
        c: { end: true, prose: 'The lecture lasts until the parking lot and dies when she tries the first treat. “I hate you,” she says, affectionate, sugar on her lip. “Come cook half of this before I do something impulsive, like eat it in the truck.”' },
      },
    },
    {
      id: 'porch',
      title: 'Porch sitting',
      cost: 0,
      blurb: 'A chair, weather, and no trail to fail.',
      start: 'a',
      locked: (w) => (w.stage < 6 ? 'She’ll want a trail before she wants a porch. Walk with her first.' : null),
      nodes: {
        a: {
          prose: ({ woman: w }) => w.stage >= 9
            ? 'You help her out to the porch chair, a transfer with weather in it. She settles, massive, green fleece open, and looks at the trees like an equal. “Sit. The other chair’s for you. I checked.”'
            : 'The porch boards complain in a friendly way. June takes the wide chair, plump or fat or heading there, and nods at the empty one. “That’s yours. I don’t do balconies. I do this.”',
          choices: [
            { label: 'Sit and share a heavy snack.', next: 'b', effects: { weight: 10, affection: 3, acceptance: 2, dependency: 1 } },
            { label: 'Sit and let the quiet be the date.', next: 'c', effects: { trust: 3, affection: 3 } },
          ],
        },
        b: { end: true, prose: 'The snack becomes dinner. She doesn’t apologize. The trees get darker and her shoulder, or the warm side of her, finds you. “This counts,” she says. “Write that nowhere.”' },
        c: { end: true, prose: 'Quiet, real quiet, until the bugs start. She looks over, almost shy. “You’re good at not filling this in,” she says. “Come tomorrow. Bring something sweet. That’s me filling it in. Shut up.”' },
      },
    },
    {
      id: 'transfer',
      title: 'A cared-for day',
      cost: 0,
      blurb: 'Late-stage: the day is the cabin and your hands.',
      start: 'a',
      locked: (w) => (w.stage < 9 ? 'She can still meet you in the world. Don’t put her in a care day early.' : null),
      nodes: {
        a: {
          prose: 'No outing. June is in the chair or the bed, and the date is whether you can be in the room without making it a clinic. She watches you hang your coat. “Water, food, the left fold, and a story about outside, in whatever order you can do without fuss.”',
          choices: [
            { label: 'All four, food heaviest.', next: 'b', effects: { weight: 16, affection: 3, dependency: 3, acceptance: 3, trust: 2 } },
            { label: 'All four, care heaviest.', next: 'c', effects: { trust: 4, affection: 4, acceptance: 3, dependency: 2 } },
          ],
        },
        b: { end: true, prose: 'You feed her until the story and the food get tangled. She is full, huge, and looking at you without armor. “That’s a day,” she says. “I’ll take another one. Not identical. Close.”' },
        c: { end: true, prose: 'You wash, you rearrange, you tell her about a tree that came down. She corrects which tree, of course. Then she keeps your hand on the left fold because the ache is gone and she wants the hand anyway. “Stay,” she says. “That’s the outside I wanted.”' },
      },
    },
  ],
};
