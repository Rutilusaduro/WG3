const W = (weight, extra = {}) => ({ weight, hunger: -8, ...extra });

export const liora = {
  id: 'liora',
  name: 'Liora Venn',
  age: 36,
  role: 'Metabolic theorist, Helix Appetite Labs',
  hairStyle: 'clip',
  accent: '#8d7cc4',
  hair: '#4a3b33',
  skin: '#f3d2bf',
  blush: '#d98b9a',
  baseWeight: 140,
  startStage: 2,
  metabolism: 3,
  activity: (stage) => 1 + (stage > 6 ? 0.25 : 0),
  start: { affection: 16, trust: 22, dependency: 8, acceptance: 20 },
  bio: 'Dr. Liora Venn wrote half the models Ordinance Seven pretends are only models. She is precise, dry, and badly defended against her own curiosity. Silver-brown hair stays in a clip until you take it down. She starts a little soft and talks about bodies as systems until the system is hers and the sentence breaks. She will let you in the lab. She will pretend that is not intimacy. It is.',
  refuseStrong: '“Not without a note in the log.” She caps the vial. “I don’t mind the effect. I mind being an undocumented effect. Ask me as a person, after dinner, and we can renegotiate.”',
  refuseExtreme: 'She looks at the cradle like a diagram she has not consented to enter. “I designed the failure modes. I’m not climbing into one because you find the aesthetic compelling. Build trust. Then bring a waiver I’ll actually sign.”',
  reactions: {
    pastry: [
      'She breaks it in half, examines the crumb, and eats both halves. “Street formulation. Inelegant. Effective.”',
      'The tart disappears between sentences about a paper. She notices the last bite with mild surprise and takes it anyway.',
      'You balance it on the upper curve because the tray is a negotiation. She eats neatly, then says, “Log that I asked for another. I did ask. Just now.”',
    ],
    honey: [
      '“Adulterated clinic waste,” she says, and licks the spoon clean. “The orange is a tell. Pour more.”',
      'Honey on her lip ruins the lecture. She doesn’t wipe it until you look. Then she doesn’t wipe it at all.',
      'She drinks from the jar you hold, eyes fluttering at the hit of hunger. “That’s a sharper curve than the label. Again.”',
    ],
    feast: [
      'She tries to narrate the board and gives up at the cheese. “This is a confound. Keep confounding me.”',
      'Half the board, then she unties the coat and lets her stomach out with a scientific little sigh. “Continue.”',
      'The tray rides the swell of her. She eats with focus, one hand braced, and dictates: “Subject requests a second board. Subject is me. Obviously.”',
    ],
    still: [
      '“A dampener. Sensible.” She takes it and looks faintly disappointed. “We can resume the curve later. Don’t look relieved.”',
      '“If you’re braking because you’re frightened, say so. If you’re braking because I asked, good.” She swallows.',
      'She holds the capsule up. “It will not reverse the mass. Nothing honest will. It buys time. I’ll spend the time on purpose.”',
    ],
    nectar: [
      'She drinks Nectar-9 like a colleague and then laughs, startled, at her own appetite. “Oh, that’s unkind. I signed off on unkind.”',
      'Two glasses. She opens the lab fridge and eats standing, coat open, talking with her mouth full and not caring.',
      'You tip the glass. She swallows, a hand on the great curve as it growls. “Dose was conservative. I resent my past self. Pour.”',
    ],
    spike: [
      'The ampoule is her design. She still gasps when it lands. Twenty minutes later she is eating crackers from the sleeve, eyes bright. “Don’t log the crackers.”',
      '“Stay,” she says, gripping the bench. “The hunger is the point and also slightly frightening. I prefer you to the frightening.”',
      'It hits her like weather. She opens her mouth for what you bring and moans, then covers the moan with a citation and fails. “Again. That’s the protocol now.”',
    ],
    keel: [
      '“Hip. You know the landmark.” Her voice stays level. Her stomach doesn’t. “Good. I intend to retain.”',
      'The patch sits on a curve the lab coat no longer closes over. She presses it. “Retention, officially. Don’t smirk.”',
      'Both of your hands, and still you search for a flat enough place. She watches, flushed. “There is no control site left. Use the living one.”',
    ],
    cradle: [
      'She talks herself through the straps and then loses the sentence when the line starts. “Stay in my eyeline. That’s not in the manual. It is now.”',
      'The cradle is snug and then too snug. She notes it, voice thin, and keeps swallowing. “Update the dimensions. And don’t stop.”',
      'Extended straps, her body filling the rig she drew. “I knew,” she whispers. “I still wanted the data from the inside. Hand.”',
    ],
    bloom: [
      '“This can jump a stage.” She offers her arm. “If you’re going to be sentimental, be sentimental after the plunger.”',
      'The serum goes in. She looks down as if the model stepped into the room. “Oh. It’s faster in a person. The person is me. Sit.”',
      'You dose her on the platform. She is past the theater of sleeves. “Let it bloom. I want the next datum to be unbearable and mine.”',
    ],
    loom: [
      'She treats the fitting as a study and then goes quiet when the tape finds the underbelly. “Build for function. And for a color that isn’t apology.”',
      '“Measure the belly as the primary structure, not an error,” she tells the tailor. She is talking to you.',
      'They drape her where she rests. She chooses ink-blue. “I will still look like a mind. The mind has a larger address.”',
    ],
    sling: [
      '“A winch is an admission.” She puts it on. The relief undoes her face. “Noted. Make the hardware less ashamed.”',
      'She lifts her arms as far as they go, which is a short arc. “Load path is correct. The emotional path is your problem. Come here and solve a piece of it.”',
      'Clipping her in is a morning protocol she pretends is only mechanical. “Tighter. I want the weight held, not hidden. You understand the distinction. You wrote yourself into it.”',
    ],
    aerosol: [
      'She identifies the compound in one breath and one curse. “You aerosolized a bias. I’m staying to observe. Obviously.”',
      '“If the room is an accomplice, the data will be messy.” She stays the night. The data is messy. She looks pleased.',
      'She cannot turn toward the diffuser and still smiles. “Confound the air. Then confound me directly. Order of operations.”',
    ],
  },
  texts: {
    early: [
      'The model underestimates pleasure. I will not be putting that in the abstract. Lunch?',
      'Coat button failed. I have safety pins and a hypothesis. You may hear both.',
      'Nectar in the break fridge. I drank the control. Don’t inform compliance.',
      'If you are in the building, my door is shut for a reason you are allowed to interrupt.',
    ],
    mid: [
      'I signed an addendum and then didn’t read it aloud. Come make me.',
      'The chair complained. I took measurements. They were not comforting. Come anyway.',
      'I want a meal with no clipboard. I will bring the clipboard. Remove it from me.',
      'Keel patch itches in a way I refuse to call erotic and am failing not to.',
    ],
    late: [
      'I cannot reach the keyboard. I can reach a conclusion: come over.',
      'Dictation is slower. I don’t mind. I mind the empty side of the platform.',
      'Bring food that can survive being set on me. That is a specification, not a joke. It is also a joke.',
      'I logged a moan as an artifact. It was not an artifact. You may review the raw data in person.',
    ],
  },
  ambients: {
    early: [
      {
        title: 'The control',
        prose: 'A calendar invite from Liora titled “lunch, not a protocol” with an agenda that includes “no agenda” and, in smaller font, “Nectar optional but statistically likely.”',
        choices: [
          { label: 'Accept. Bring pastry anyway.', effects: { weight: 5, affection: 2 }, reply: 'She pretends the pastry is an unplanned covariate and eats it before the soup. “You’re a menace with a paper bag,” she says, fond.' },
          { label: 'Accept, and actually skip the clinic compounds.', effects: { trust: 3, affection: 2 }, reply: 'She looks oddly touched by a plain sandwich. “This is suspiciously human. Do it again before I build a model of it.”' },
        ],
      },
      {
        title: 'Pin',
        prose: 'You catch her in the glass of the lab door, pinning her coat shut, mouth doing math. She sees you and the math falls apart into a small, unwilling smile.',
      },
    ],
    mid: [
      {
        title: 'Addendum',
        prose: 'She leaves a waiver on your kitchen table, unsigned. In the margin, her handwriting: I want to. I want the record. I don’t want the record to be the only one who has me.',
        choices: [
          { label: 'Sign nothing. Talk first.', effects: { trust: 4, affection: 3 }, reply: 'She talks, halting, then kisses you like a citation she finally got right. The waiver stays unsigned until morning. That is also data.' },
          { label: 'Sign, and take her to dinner after.', effects: { trust: 2, affection: 2, acceptance: 3, weight: 8, dependency: 2, flag: 'waiver' }, reply: 'Dinner is large. The waiver is in her bag like a live animal. “Okay,” she says, after dessert. “Now we can be indecent on purpose.”' },
        ],
      },
      {
        title: 'Chair',
        prose: 'Facilities sends a ticket she didn’t file: lab chair, weight rating exceeded, replacement requested. She forwards it to you with one line: I am not a facilities problem. Come tell me what I am.',
      },
    ],
    late: [
      {
        title: 'Dictation',
        prose: 'A voice note, close and a little breathless: “Section four. Subject demonstrates— no. I demonstrate continued appetite and a preference for your hand over the stylus. Delete the last clause. Come over and don’t delete anything.”',
        choices: [
          { label: 'Go, and don’t delete anything.', effects: { affection: 3, acceptance: 3, weight: 6, dependency: 2 }, reply: 'You arrive. She is huge on the platform and bright in the eyes. “Good,” she says. “The clause stands. So do you. Preferably right there.”' },
          { label: 'Reply with a plain offer to wash her hair.', effects: { trust: 3, affection: 4 }, reply: 'She goes quiet on the line, then: “That is not in any protocol. Yes. Bring nothing clever. Bring your hands.”' },
        ],
      },
      {
        title: 'Sensor ping',
        prose: 'Her membrane logs a heart-rate spike at 1:11 a.m. She texts, before you can worry: I was thinking about you. The sensor is a gossip. Go back to sleep or come over. I prefer the latter and will not beg. This is adjacent to begging.',
      },
    ],
  },
  overnight(woman, day) {
    const early = [
      'She ate the control sample and annotated the guilt.',
      'A coat button surrendered. She logged the time.',
      'She worked late and ordered noodles she called field rations.',
      'The model failed to predict how much of the tart she would finish. She updated nothing and slept.',
    ];
    const mid = [
      'She wore the coat as a cape and pretended it was style.',
      'Two lunches, one “for the curve,” one for her.',
      'A chair’s complaint became a spreadsheet she closed without saving.',
      'She said subject and meant I, and didn’t correct the recording.',
    ];
    const late = [
      'Dictation ran long because she kept pausing to be fed.',
      'She asked facilities for a wider door and did not apologize to the form.',
      'A sensor logged pleasure. She labeled it signal, not noise.',
      'She slept in the sling and woke hungry and unusually kind.',
    ];
    const pool = woman.stage >= 9 ? late : woman.stage >= 5 ? mid : early;
    return pool[day % pool.length];
  },
  tableLine(woman) {
    const s = woman.stage;
    if (s >= 9) return 'Liora arrives with help and a small notebook she immediately fails to open. Ink-blue cloth strains over an enormous quiet body; she takes the reinforced seat and says, “I will not be recording this. That is a lie. I will try.”';
    if (s >= 5) return 'Liora sits with the coat open, a rounded stomach already against the table, and orders as if the menu were a methods section. Her eyes flick to you when the bread lands. “Observe if you must. Pass it either way.”';
    return 'Liora is early, clip in, a soft line already at her waist, reading the wine list like a preprint. “Sit. I saved you the chair that doesn’t wobble. I tested them. Don’t make that weird.”';
  },
  stages: [
    {
      outfitName: 'Lab coat, true waist',
      mobilityTag: 'Unmarked corridors',
      mobility: 'She walks the campus like a metronome and only slows to read a screen.',
      body: 'Liora at baseline is slim through the shoulders and already soft at the waist, a gentle curve the coat mostly forgives. Breasts modest, hips a measured flare, legs that cross easily under a lab bench. Her face is all attention: fine mouth, a line between the brows, hair imprisoned by a clip. Hands are ink-stained from a pen she prefers to the tablet. Nothing about her is frail. Everything about her is controlled.',
      clothing: 'The coat buttons. The dress under it is a precise size. Shoes are quiet. She looks like the person who wrote the safety sheet, because she is.',
      talk: {
        line: '“You’re in a restricted corridor with a visitor smile. Either kiss me or pretend this is about the budget. I can work with one of those.”',
        choices: [
          { label: 'Kiss her between the badge readers.', effects: { affection: 3, trust: 1 }, reply: 'She makes a startled sound and then commits, coat crisp under your hands. “Budget later,” she says against your mouth. “My office locks. I checked twice. That’s foreplay.”' },
          { label: 'Ask about the model, and mean it.', effects: { trust: 3, affection: 2 }, reply: 'She lights up in the unsexy way that is actually sexy on her. Ten minutes later she is drawing on a napkin and letting her knee rest against yours, a data point she does not annotate.' },
          { label: 'Offer a tart from the street.', effects: W(4, { affection: 2 }), reply: '“Uncontrolled.” She eats it. “I’ll allow an uncontrolled variable if it flakes like that.” Sugar on a mouth that was mid-sentence. She does not resume the sentence.' },
        ],
      },
      event: {
        title: 'Baseline',
        prose: 'She asks you to log a set of calipers and then regrets the romance of it. In her office, coat off, she stands very straight while you measure waist, hip, the small softness she could hide and doesn’t. “Baseline,” she says. “If this becomes a curve, I want the curve honest. I also want you to stop looking at me like a preprint you’re excited to refute.” Her ears are pink. The numbers are ordinary. Her pulse, under your fingers, is not.',
        choices: [
          { label: 'Log the numbers. Kiss the place the calipers were.', effects: { affection: 3, trust: 3, acceptance: 1 }, reply: 'You log them in her book, neat, then kiss the faint mark at her waist. She exhales a laugh. “That’s not reproducible,” she says, and pulls you back to do it again.' },
          { label: 'Close the book. Take her to dinner instead.', effects: W(5, { affection: 3, trust: 2 }), reply: '“Protocol deviation.” She comes anyway. Dinner is larger than she planned and she takes notes on nothing except how often she looks at your mouth. “Baseline can resume tomorrow. Tonight I’m off-instrument.”' },
        ],
      },
      intimacy: {
        opening: 'Her apartment is spare and the bed is not. Liora kisses with attention, as if mapping. Clothes fold. She is warm, lightly soft at the waist, precise everywhere else, and she startles herself by asking for your weight on her. “I want to feel chosen, not assessed,” she says. “The assessment can be after. Or during, if you must, but kindly.”',
        choices: [
          { label: 'Kind, and thorough.', effects: { affection: 4, trust: 3 }, result: 'You learn her without a clipboard voice. She comes with a surprised, broken syllable and then laughs at the syllable. After, she traces your hand and says, “I’ll remember the method.” It is praise.' },
          { label: 'Tell her you want the curve to change.', effects: W(3, { dependency: 2, acceptance: 2, affection: 2, trust: 1 }), result: 'Her hips stutter. Interest, clinical and not. “Then feed me after,” she says, already pulling you in. Sex is bright and a little desperate. The toast in bed becomes a second experiment she refuses to log and eats entirely.' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 2 }, result: 'She is awkward at stillness and then greedy for it. The clip comes out. Hair everywhere. “Don’t tell the lab I sleep,” she murmurs. You won’t. She sleeps on your chest, light, a hand still half in a thinking fist.' },
        ],
      },
    },
    {
      outfitName: 'Coat, one button shy',
      mobilityTag: 'Long days on her feet',
      mobility: 'She still does the whole building. Evenings, she sits sooner, pretending the email required it.',
      body: 'Lean for anyone else, soft for her record. The waist has a definite give; the lowest button of the dress leaves a faint print. Thighs touch when she stands distracted. Her face is the same keen instrument with a kinder cheek. Breasts fill the bra she replaced without telling you the size. A small fold appears when she leans over a bench. She notices you noticing and lifts an eyebrow instead of the coat.',
      clothing: 'The coat buttons if she doesn’t sit. Sitting, the middle gapes over a stomach that is no longer theoretical. She has started wearing a camisole she calls a layer and you call a tell. Shoes unchanged. Hem unchanged. The body between them is editing the silhouette.',
      talk: {
        line: '“The button is a coward. I am not. You can look at the gap or you can pretend we’re discussing saturation curves. I recommend the gap. It’s more honest.”',
        choices: [
          { label: 'Look at the gap.', effects: { acceptance: 3, affection: 2 }, reply: 'You look. She flushes in the clinical light and doesn’t close the coat. “Good. Data should be visible.” Her hand finds yours under the bench, which is not data she shares with the group.' },
          { label: 'Bring Nectar and a real lunch.', effects: W(7, { affection: 2, dependency: 1, acceptance: 1 }), reply: 'She drinks, eats, and abandons the sentence she was defending. “I signed off on this compound,” she says, delighted and faintly doomed. “I would like to sign off on you as well. After the noodles.”' },
          { label: 'Ask if she wants a pause.', effects: { trust: 2, dependency: -1 }, reply: '“Not a pause. A choice.” She considers you. “Tonight I choose the noodles and your hands. Ask again when I’m not winning an argument with my own waistband.”' },
        ],
      },
      event: {
        title: 'The coward button',
        prose: 'In a meeting she reaches for a file and the middle button of the coat pops, a small plastic click, and lands in a council member’s water. There is a moment of institutional horror. Liora, stomach softly rounding through the gap, retrieves an intact dignity from somewhere and says, “The coat is underspecified. The finding stands.” After, in the stairwell, she laughs into her hands until she shakes. “I will die,” she says. “I will die and my ghost will still be buttoned wrong.”',
        choices: [
          { label: 'Laugh with her, then fix the coat with a pin.', effects: { affection: 3, trust: 3, acceptance: 2 }, reply: 'The pin holds. Your fingers at her waist hold more. She goes quiet. “Do that again when no one is timing me,” she says. “The pin. The hands. The not treating me as a punchline.”' },
          { label: 'Get her out of the building and feed the adrenaline.', effects: W(6, { affection: 2, acceptance: 2, dependency: 1 }), reply: 'Street noodles. She eats with the coat open and the popped button in her pocket like a relic. “I’m keeping it,” she says. “A control sample from the day I stopped fitting my costume.”' },
        ],
      },
      intimacy: {
        opening: 'The coat comes off and the dress is rucked up and she is done being a meeting. Softer than baseline: a stomach you can gather, breasts heavier in your mouth, thighs that press. She watches your face for the flinch and files its absence. “I want you to feel the difference,” she says. “Then I want you to stop narrating and fuck me like the difference is welcome.”',
        choices: [
          { label: 'Welcome it, then stop narrating.', effects: { acceptance: 4, affection: 3, weight: 3 }, result: 'You get a handful of the new softness and she moans like a result. Sex is hot and a little messy and she comes with your name stripped of title. After, she puts your hand back on her stomach. “Welcome noted,” she says, breathless. “Replicate.”' },
          { label: 'Take her over the desk, coat as a pillow.', effects: { affection: 3, trust: 1 }, result: 'The desk has seen worse ethics. She is vocal into the folded coat, softer body jolting, clip falling out. When she turns, hair down, she looks illegally unprofessional. “Lock the door retroactively,” she pants. You already did.' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3 }, result: 'She is bad at being held until the second minute, then she is greedy. “The button can stay popped,” she murmurs. “The rest of me would like a ceasefire.” You hold her through it. The lab can wait until the clip goes back in.' },
        ],
      },
    },
    {
      outfitName: 'Coat worn open',
      mobilityTag: 'Prefers the lift',
      mobility: 'Stairs are for emergencies and showing off. She has mostly stopped showing off.',
      body: 'Softening into a body the coat can’t prosecute. Her belly is a smooth outward curve, distinct when she leans, a handful at the end of the day. Hips have widened in the chair she keeps meaning to replace. Thighs meet. Her face is a touch fuller, the thinking line still sharp. Breasts sway when she turns fast between benches. She gets warm in the lab and rolls her sleeves and, lately, fans the coat open without thinking. There is a red mark from a waistband she calls “artifact.”',
      clothing: 'The coat is a cape more than a coat. Dresses are chosen for forgiveness and run out of it by Thursday. She owns a size up and has not admitted it to the dry cleaner, which is a meaningless boundary she enjoys having.',
      talk: {
        line: '“I took the lift and I have already written the defense of the lift. You don’t need to hear it. You need to bring lunch and an opinion that isn’t about my discipline.”',
        choices: [
          { label: 'Lunch, and an opinion about her mouth.', effects: { affection: 3, acceptance: 2 }, reply: 'She goes pink in a way the lift does not cause. “That’s an opinion,” she concedes, and eats half your lunch in revenge that fools no one. The coat stays open.' },
          { label: 'Lunch that is mostly Nectar and bread.', effects: W(8, { dependency: 2, affection: 2, acceptance: 1 }), reply: 'She drinks, tears the bread, and stops defending anything. “I can feel it decide,” she says, hand on the curve. “Stay until the decision is finished. It will want a second lunch. So will I.”' },
          { label: 'Walk her home the long way, slowly.', effects: { trust: 3, affection: 2 }, reply: 'She takes your arm after a block and pretends it’s the wind. At her door she says, “The lift is not a moral failure. Neither is this.” She means the way she leans. You take the weight. She allows it.' },
        ],
      },
      event: {
        title: 'One controlled taste',
        prose: 'After hours she pours two fingers of Nectar-9 into a beaker, because a glass would be a confession. “One controlled taste,” she tells you. “For the model.” She drinks. The control lasts four minutes. Then she is at the break-room fridge, coat open, eating yogurt with a spatula, laughing at herself in horror and joy. “Log this as contamination,” she says. “Log it as me. I don’t know. Come here and be contaminated.”',
        choices: [
          { label: 'Be contaminated. Finish the fridge with her.', effects: W(8, { affection: 3, dependency: 2, acceptance: 2 }), reply: 'You eat stolen yogurt on the floor of a billion-dollar lab. She leans, soft, against you. “Worst protocol of my career,” she says, delighted. “Repeat tomorrow. Bring a real spoon.”' },
          { label: 'Take the beaker away and take her home.', effects: { trust: 3, affection: 3, acceptance: 1 }, reply: 'She lets the beaker go. At home she is quieter, coat finally off, the curve of her stomach against your side. “Thank you for not making it a joke in the building,” she says. “You can make it a joke here. Gently. And then you can feed me properly.”' },
        ],
      },
      intimacy: {
        opening: 'Home, not the lab, because she wants a door that isn’t badge-locked. She undresses without theater. Softening, she is a fact: belly rounding into your palm, breasts warm, thighs thicker when she pulls you between them. “I keep wanting to say ‘the subject,’” she admits. “The subject is me. Say my name so I don’t vanish into the method.”',
        choices: [
          { label: 'Say her name. Touch all the new softness.', effects: { acceptance: 4, affection: 4, trust: 2, weight: 3 }, result: 'You say Liora until it stops being a label and starts being a moan. She comes with her hand over yours on the curve of her stomach, anchoring herself. “Again,” she says. “Name and all. I’m collecting replicates.”' },
          { label: 'Let her take notes after, not during.', effects: { affection: 3, trust: 3 }, result: 'During, she is only a body and a voice. After, naked and pink, she writes three lines and then crosses them out. “Useless,” she says, happy. “Come back to bed. The notes were a reflex. You’re the finding.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 2 }, result: 'She fits against you with more give than the baseline log. “Don’t measure,” she says, and you don’t. The clip is on the nightstand. Her breath slows. “This is off-record,” she adds, already asleep enough to mean it.' },
        ],
      },
    },
    {
      outfitName: 'Cape-coat, stretch dress',
      mobilityTag: 'Unhurried corridors',
      mobility: 'She arrives a minute later than she used to and calls it buffer. The buffer is breath.',
      body: 'Soft and rounded. The belly is a mound that rests on her lap when she sits at the bench, a warm weight under the stretch dress. Hips widen the chair. Thighs spread and she has stopped crossing her legs in meetings. Her face has rounded; the mouth is still precise. Breasts are heavier, the bra leaving a day’s mark she shows you with scientific shamelessness and personal shyness. A small second chin appears when she looks down at a sample. She looks down at samples for a living.',
      clothing: 'The coat cannot close. She wears it as a cape and dares anyone to file a complaint. The stretch dress is honest about the stomach and tight at the thighs by evening. She has safety pins in the pocket like a profession.',
      talk: {
        line: '“I am a cape now. The cape is not a metaphor. Sit down and tell me something that isn’t a performance review of my waist.”',
        choices: [
          { label: 'Tell her she looks like a woman, not a review.', effects: { acceptance: 3, affection: 3, trust: 2 }, reply: 'She blinks hard. “That’s illegally tender for a hallway.” She pulls you into the office. The cape ends up on the floor. “Say it again where the badge readers can’t hear.”' },
          { label: 'Feed her something that doesn’t come from the break fridge.', effects: W(9, { affection: 2, dependency: 2, acceptance: 2 }), reply: 'Real food, her table, the dress hiked so the waistband stops arguing. She eats and talks about a paper and then abandons the paper. “I like this confound,” she says, hand on the mound. “Keep introducing it.”' },
          { label: 'Rub the bra mark without making it a study.', effects: { trust: 3, affection: 2, acceptance: 2 }, reply: 'You rub the groove at her shoulder and she melts in a way she will describe badly later. “Kindness is a variable I underweighted,” she murmurs. “Continue the trial.”' },
        ],
      },
      event: {
        title: 'Cape',
        prose: 'A donor tour rounds the corner as Liora is pinning her coat. She gives up and lets it hang. The belly is visible, rounded, unashamed only because there is no time to be otherwise. The donor stares. Liora says, brightly, “Metabolic persistence has a human factors component. I’m the component. The tour may continue or it may learn something.” After, she is shaking in the stairwell, furious and a little thrilled. “I said that out loud,” she tells you. “I said that out loud in a cape.”',
        choices: [
          { label: 'Tell her the sentence was true.', effects: { acceptance: 4, affection: 3, trust: 3 }, reply: '“True,” she repeats, tasting it. She kisses you in the stairwell like a woman collecting courage she already spent. “Take me home. I want to be the component in private, with food, and with less donor.”' },
          { label: 'Take her home and make the night soft and large.', effects: W(8, { affection: 3, acceptance: 3, dependency: 2 }), reply: 'Home. A meal. Her dress off. She eats in your shirt, which gaps, and laughs until she cries once. “I was the component,” she says, wondering. “Feed the component dessert. She has had a day.”' },
        ],
      },
      intimacy: {
        opening: 'The cape-coat is on a chair and she is done performing composure. Rounded and warm, she climbs into your lap and the mound of her stomach presses first. “I want you to feel that I occupy space,” she says. “I spent a decade trying to be a mind with a commuting body. The commute got bigger. Don’t you dare fuck me like I’m still a diagram.”',
        choices: [
          { label: 'Fuck her like a woman who occupies space.', effects: { acceptance: 5, affection: 4, dependency: 2, weight: 3 }, result: 'You hold the curve, the heavy breasts, the wider hips. She comes shaking, mind offline, voice wrecked. After, she laughs into your neck. “Diagram’s dead,” she says. “Good. Don’t revive it. Make eggs.”' },
          { label: 'Let her ride and watch her watch herself.', effects: { affection: 3, acceptance: 4, trust: 1 }, result: 'There is a mirror she usually ignores. Tonight she doesn’t. Seeing her own softness move undoes her; she comes fast and then hides in your shoulder, thrilled and shy. “Leave the mirror,” she says. “I might want the evidence.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 3 }, result: 'You hold the component until she is only Liora, breathing, cape forgotten. “The donor can go to hell,” she says mildly. “You can stay. Those are the findings.”' },
        ],
      },
    },
    {
      outfitName: 'Stretch knits, coat optional',
      mobilityTag: 'Bench and car',
      mobility: 'She drives more, walks less, and stands in the lab only when the work demands a standing woman.',
      body: 'Pleasantly chubby, which she will only say if you say it first and don’t smirk. The belly overhangs the waistband when she sits and remains a heavy curve when she stands. Breasts fill her hands. Thighs rub under the knit. Her face is softer, eyes still the sharpest thing in any room she enters, a faint double chin when she laughs at her own data. She sweats more. She hates that you can tell and then uses you as a reason to keep the office cold. Standing from the lab chair takes a small rock she disguises as reaching for a pen.',
      clothing: 'Knits. The coat lives on a hook as a ceremonial object. Waistbands leave red moons. She has ordered a larger lab coat and it is late, which she calls a supply-chain failure and you call destiny. Bras are structural now. She has opinions about wire.',
      talk: {
        line: '“The new coat is late and my current body is early. That’s the joke. Don’t improve it. Bring food to my office and lock the door like a professional.”',
        choices: [
          { label: 'Lock the door. Bring more food than a professional would.', effects: W(10, { affection: 3, dependency: 2, acceptance: 2 }), reply: 'She eats with the knit hiked, belly free, talking between bites about a result that excites her. “I can be brilliant and this,” she says, patting the curve. “Today I believe it. Stay until I don’t, and then argue.”' },
          { label: 'Lock the door. Talk, no compounds.', effects: { trust: 3, affection: 3 }, reply: 'You talk. She is funny and tired and lets her knee fall against yours. “I missed being a person with a lunch hour,” she says. “You make a tolerable lunch hour. That’s romantic. Don’t annotate it.”' },
          { label: 'Rub her feet under the desk.', effects: { affection: 2, trust: 2, acceptance: 1 }, reply: 'She pretends to read a paper and fails. “That’s diabolical,” she says calmly, ears red. “Continue. The paper is not going anywhere. I might.”' },
        ],
      },
      event: {
        title: 'The addendum',
        prose: 'She writes a consent addendum in language so careful it almost isn’t erotic, and then cannot read it aloud. It covers appetite stimulants, photography of fit, and “partner-administered meals.” She slides it across her own kitchen table. “I wanted the record,” she says. “Reading it feels like taking my clothes off in compliance. Which is not the sexy version of taking my clothes off. Help me or tear it up. I will accept either if you stay.”',
        choices: [
          { label: 'Read it with her, slowly, and sign.', effects: { trust: 3, affection: 3, acceptance: 3, flag: 'waiver', clinicTier: 2 }, reply: 'You read. You sign. She signs with a hand that steadies on yours. “Clearance, incidentally, will follow,” she says, voice thin. “That wasn’t the point. The point is I’m allowed to want this in writing and in bed. Take me to bed.”' },
          { label: 'Tear the copy. Keep the want. Sign later.', effects: { trust: 4, affection: 4, acceptance: 2 }, reply: 'You tear the page. She stares, then kisses you like you pulled her out of a meeting that had gone on for years. “Later,” she agrees. “Tonight no record. Tonight your mouth and something sweet. In that order.”' },
        ],
      },
      intimacy: {
        opening: 'Whether or not the addendum survives, she wants you. Chubby and bare, she is a warm sprawl, belly against your stomach when you lean in, thighs thick, breasts soft. “Partner-administered,” she quotes, then breaks. “Forget the wording. I want your hands. I want to eat after. I want to be Liora while it happens, not a section.”',
        choices: [
          { label: 'Hands, then her, then food.', effects: { acceptance: 4, affection: 4, dependency: 2, weight: 5, trust: 2 }, result: 'You follow the real protocol. She comes twice, once almost shy, once not, and then eats in bed, nude, unbothered by crumbs on the new curve of her. “Section closed,” she says, licking a thumb. “Open me again tomorrow.”' },
          { label: 'Fuck her in front of the mirror she used to hate.', effects: { affection: 3, acceptance: 4 }, result: 'She watches her own body move, chubby and flushed and wanted, and the watching tips her over. After, she doesn’t cover up. “Evidence,” she says, soft. “I’m keeping this replicate.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 3 }, result: 'You hold her until the wording drains out of her shoulders. “I almost made a contract out of wanting you,” she says. “Thank you for wanting me back in sentences a person can sleep inside.” She sleeps. The addendum, if it exists, can wait on the table like a tame animal.' },
        ],
      },
    },
    {
      outfitName: 'Larger coat, finally',
      mobilityTag: 'Short walks between sits',
      mobility: 'The new coat arrives. So does the habit of sitting. She walks the lab in segments.',
      body: 'Plump. The new coat almost understands her and still strains at the belly, which is heavy, a slope into her lap, navel deep. Thighs are thick and push the slit of her dress open when she sits. Breasts rest on the upper swell by afternoon. Her face is full and keen, a soft chin under the clip, mouth often parted because she is slightly out of breath and too proud to pant in the corridor. Arms soften. She rocks once to stand and has stopped disguising it in front of you.',
      clothing: 'The larger coat buttons over the breasts and gives up at the stomach. She wears it anyway, a flag of employment. Dresses are stretch, waistbands rolled. She owns one beautiful ink-blue thing that fits and wears it when she wants to remember she is not only a lab. It fits less every week. She has a tailor’s number and has not called.',
      talk: {
        line: '“The coat arrived sized for a woman I was three weeks ago. I find this both predictable and rude. Come feel the place it’s losing and tell me something kind that is also accurate.”',
        choices: [
          { label: 'Feel, and be accurate.', effects: { acceptance: 4, affection: 3 }, reply: '“You’re plump, and the coat is late to a fact.” She closes her eyes. “Accurate. Kind enough. Do it again with your mouth on my throat and less textile between us.”' },
          { label: 'Call the tailor for her.', effects: { trust: 2, acceptance: 3, affection: 2, money: -15 }, reply: 'You make the call. She listens, ears red, and doesn’t stop you. “I was going to,” she lies. Then, honest: “Thank you for being faster than my pride. Take me to dinner in the thing that still fits. We’ll give it a farewell tour.”' },
          { label: 'Feed her and leave the coat on the hook.', effects: W(11, { dependency: 2, affection: 3, acceptance: 2 }), reply: 'The coat stays hooked. She eats in the stretch dress, then out of the top of it, belly bare and shining faintly with warmth. “Better,” she says. “The coat can file a complaint. I’m busy.”' },
        ],
      },
      event: {
        title: 'Keel',
        prose: 'She asks you to place the Keel patch and narrates the landmark until the narration dies. The skin at her hip is soft, warmer than the Liora who wrote the landmark. Your palm smooths the patch and she shivers, a full plump shiver, hand braced on the bench. “I can feel the hunger under it already,” she says, voice not clinical. “That’s faster than the insert. Stay. If I start eating out of the reagent fridge, physically stop me and point me at bread.”',
        choices: [
          { label: 'Stay. Point her at bread. A lot of bread.', effects: W(10, { dependency: 3, affection: 3, acceptance: 2 }), reply: 'You intercept the reagent fridge with an actual loaf. She laughs, wild, and eats. “Heroic,” she says, cheeks full. “I’m keeping you. The patch is also keeping everything. We’ll be enormous. I said we. Note the pronoun.”' },
          { label: 'Stay and don’t let it become only hunger.', effects: { trust: 3, affection: 4, acceptance: 2 }, reply: 'You stay. When the hunger spikes you feed her and you also hold her. She cries one unprofessional tear and snorts at it. “The patch is working,” she says. “So are you. That’s the better result.”' },
        ],
      },
      intimacy: {
        opening: 'The new coat is on the hook and she is plump, flushed, and done pretending the patch is the only thing making her want. “I need you,” she says, which she will later claim was colloquial. It isn’t. Her belly presses your chest, heavy. Her thighs bracket you. She is wet and a little desperate and very present. “Say Liora. Then do everything the addendum was too polite to list.”',
        choices: [
          { label: 'Everything the addendum was too polite to list.', effects: { acceptance: 5, affection: 4, dependency: 3, weight: 4, trust: 2 }, result: 'You fuck her deep, a hand under the belly, mouth on her breasts, and she comes apart citing nothing. After, you feed her the bread she asked for and she eats, glowing, enormous with satisfaction. “Politeness is a failed design,” she says. “Come back to bed.”' },
          { label: 'Slow, with her name, until she forgets the lab.', effects: { affection: 4, trust: 3, acceptance: 4 }, result: 'Slow works. She forgets the building, the patch, the pronoun problem. When she comes she laughs in surprise and keeps you close. “There I am,” she says, almost awed. “Don’t rush me back into a coat.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 3 }, result: 'You hold the plump heat of her until the Keel-hunger becomes a quieter animal. “Bread later,” she decides. “Hands now. You’re a better delivery system than the patch and I’m only a little sorry about the comparison.”' },
        ],
      },
    },
    {
      outfitName: 'Custom ink-blue, lab knits',
      mobilityTag: 'Mostly seated work',
      mobility: 'She has a bench arranged for sitting. Standing demonstrations are short. She drives to the door closest to the lift.',
      body: 'Fat, and she has started using the word in her notes and then deleting it and then, finally, leaving it. The belly is the center of her: round, low, parting every open cardigan, resting in her lap, a weight she cradles when she stands. Thighs spread on the wide lab chair she signed for herself. Breasts mound over the upper curve. Her face is full, clip working overtime, a soft double chin, eyes bright and slightly breathless. The back roll is new and she asks you to look at it without commentary and then with commentary. Standing is a rock and a hand on the bench.',
      clothing: 'Ink-blue custom for evenings, already snug at the vent. Daily wear is knits and a lab layer that drapes, because buttons have lost the war. She rolls waistbands down under the belly as a first act of arriving anywhere. Shoes are softer. She notices, is annoyed, and keeps them.',
      talk: {
        line: '“I left the word in the note. Fat. The delete key still works. I didn’t use it. Reward this behavior with dinner and your hands, not with a speech.”',
        choices: [
          { label: 'Dinner and your hands.', effects: W(12, { affection: 3, acceptance: 3, dependency: 2 }), reply: 'She eats, then guides your hands under the knit to the heavy curve, a reward structure she invented. “Good,” she says, full, flushed. “The word can stay. So can you.”' },
          { label: 'Read the note, then kiss her for it.', effects: { trust: 3, affection: 4, acceptance: 3 }, reply: 'The note is brave and a little filthy between the lines. You kiss her in the middle of a sentence about adipose retention. She abandons the sentence. “Peer review later,” she says. “Mouth now.”' },
          { label: 'Sit with her while she says it out loud once more.', effects: { trust: 4, affection: 3, acceptance: 4 }, reply: '“I’m fat,” she says, to you, not the note. Her voice shakes and holds. You don’t rush past it. She exhales. “Okay. That was worse than the donor and better than the donor. Feed me something red. I want a color.”' },
        ],
      },
      event: {
        title: 'Preliminary findings',
        prose: 'She presents a closed-door update and, against her own slide, says, “The principal subject is the investigator.” A beat of horror from compliance, of respect from one engineer, of heat from you in the back. She does not show images. She does show, by existing in the room, a fat body in ink-blue, steady voice, hand resting on the curve the slides describe obliquely. After, she finds you in the stairwell she can still manage. “I outed the method,” she says. “Tell me I didn’t just end my life. Or tell me I started the real one. Pick the accurate one.”',
        choices: [
          { label: 'The real one.', effects: { trust: 4, affection: 4, acceptance: 4, flag: 'subject_zero' }, reply: '“The real one.” She sags into you, a warm heavy trust, and laughs once into your shoulder. “Subject zero,” she says. “God, that’s terrible. Don’t let anyone else call me that. You can, once, in bed, if you bring dessert.”' },
          { label: 'The real one, and dessert as evidence.', effects: W(10, { affection: 3, acceptance: 4, dependency: 3, trust: 2, flag: 'subject_zero' }), reply: 'You take her home and lay out dessert like a defense. She eats, shaky and then sure. “I started it,” she says, cream on her lip, belly full and proud. “Stay for the discussion section. It will be indecent.”' },
        ],
      },
      intimacy: {
        opening: 'Subject zero, she lets you say, once. Then she shakes her head, smiling, and pulls you down into a body that is simply hers: fat, hot, ink-blue discarded, belly heavy on her thighs, breasts in your hands. “I’m not a finding tonight,” she says. “I’m Liora, and I want you to fuck me until I forget the stairwell. Then remind me, kindly, that I was brave.”',
        choices: [
          { label: 'Fuck her until the stairwell is gone, then remind her.', effects: { acceptance: 5, affection: 4, dependency: 3, trust: 2, weight: 4 }, result: 'She comes hard, mind blank, and when it returns you tell her she was brave. She cries, short and undramatic, and kisses you for the order of operations. “Dessert,” she adds, hoarse. “Bravery burns calories. I intend to replace them with interest.”' },
          { label: 'Take your time with her on her side.', effects: { affection: 4, trust: 3, acceptance: 4 }, result: 'Sideways, she can breathe and still feel all of you. The fat of her shifts, warm, real. She finishes with a long moan and a laugh. “The stairwell can keep its stairs,” she says. “I have this. I have you. Replicate tomorrow.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 3 }, result: 'You hold her through the adrenaline crash. She is heavy and shaking and then quiet. “I said it in a room with a minutes-taker,” she whispers. “Stay until I feel like a person who can do that again.” You stay. The minutes can wait.' },
        ],
      },
    },
    {
      outfitName: 'Support layers, custom',
      mobilityTag: 'Assisted distances',
      mobility: 'Work is a closer office and a chair that holds. Distances are the car and your arm. She stands for transfers and short proofs of pride.',
      body: 'Massive. The support layer she designed and then had to wear makes the engineering obvious: belly vast and forward, resting through her lap, sides spreading when she sits, breasts heavy on the upper rise, thighs thick enough to require the chair she specced. Her face is moon-soft around a mind that has not slowed: full cheeks, clip, a breathless edge to long sentences. She sweats at the folds. She asks you, clinically and shyly, to help dry them. Standing is a three-count and your shoulder. She counts.',
      clothing: 'Custom support, ink-blue and lab-gray, ties instead of buttons, a coat that is really a drape with a badge clipped to it. The badge still matters to her. Nothing off the rack survives. She has stopped apologizing to furniture and started sending specifications.',
      talk: {
        line: '“I specced the chair and it still meets me more than I meet it. That’s a joke about mass. Come sit on the side that isn’t occupied by my life’s work. Bring food. The work is hungry.”',
        choices: [
          { label: 'Sit on the free side. Bring more than that.', effects: W(13, { affection: 3, dependency: 3, acceptance: 3 }), reply: 'You wedge in. She eats, massive and pleased, and the free side gets smaller as she relaxes into you. “Good spec,” she murmurs. “The you-part, I mean. The chair is merely adequate.”' },
          { label: 'Help with the folds, then the food.', effects: { trust: 4, affection: 3, acceptance: 3, dependency: 2, weight: 4 }, reply: 'Care first. She directs, then goes quiet, then kisses your wrist. “This is the unpublishable part,” she says. “It is also the part I can’t live without. Now the publishable hunger. Feed me.”' },
          { label: 'Ask what she wants the next spec to be.', effects: { trust: 3, affection: 3, acceptance: 2 }, reply: '“A wider door. A platform at home. You, trained, not a rotating tech.” She says it like a methods section and then looks frightened. You nod. The fright eases. “Okay. Then we start with dinner, which is a spec I already understand.”' },
        ],
      },
      event: {
        title: 'The frame',
        prose: 'Facilities installs a support frame in her office, discreet as a thing of steel can be. Liora tests it, massive in the sling of it, and her face does something complicated. “I designed this for a hypothetical subject,” she says. “The hypothetical is sweating into her own prototype.” She looks at you. “If you pity the picture, leave. If you want the picture, come adjust the strap. It’s biting. I would like the bite to be a choice, not an error.”',
        choices: [
          { label: 'Adjust the strap. Want the picture.', effects: { trust: 4, affection: 4, acceptance: 4, dependency: 2 }, reply: 'You adjust. The bite becomes pressure she chose. She exhales, huge and held, and pulls you in by the badge you both forgot she was wearing. “Wanting noted,” she says. “Stay through the end of the day. I don’t want the first test to end in an empty office.”' },
          { label: 'Adjust it, then take her home where the frame isn’t watching.', effects: { trust: 3, affection: 4, acceptance: 3, weight: 6 }, reply: 'Home is kinder. She eats in the chair she trusts, no steel audience. “The frame works,” she says. “I work better with you. Those are two results. Only one of them gets a grant.”' },
        ],
      },
      intimacy: {
        opening: 'The frame stays at the office. At home you arrange pillows like a kind machine. Liora, massive, bare, watches you work and then says, “Enough engineering. I want the human error.” You come to the edge of her. The belly is a world between her face and yours unless you lean wide. She helps, a hand on your cheek. “There. Eyes. I’m not the frame. I’m the woman who asked for it. Fuck me like you can tell the difference.”',
        choices: [
          { label: 'The human error, gladly.', effects: { acceptance: 5, affection: 4, dependency: 3, trust: 2, weight: 5 }, result: 'You fuck her with awkward, perfect attention, one arm cradling what you can of the belly. She comes crying your name and not a single noun from the lab. After, she pets your hair. “Error successful,” she whispers. “Replicate until we can’t call it error anymore.”' },
          { label: 'Your mouth, her directions, no steel.', effects: { affection: 4, acceptance: 5, trust: 3 }, result: 'She directs in a voice that frays. Orgasm leaves her laughing, breathless, enormous. “I used to think instruments were precise,” she says. “Come up here. I want the imprecise thing, which is kissing you.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 4 }, result: 'You hold her in the pillow-machine until she admits the frame scared her and you didn’t. “Stay the night,” she says. “I want to wake up massive and not immediately be a prototype. Just Liora. Possibly hungry. Statistically hungry.”' },
        ],
      },
    },
    {
      outfitName: 'Ties and a drape',
      mobilityTag: 'Chairbound hours',
      mobility: 'She works from a chair that does not travel. The lab comes to her in the form of screens, and she goes to the lab only with you.',
      body: 'Obese, wide in the custom chair, belly a deep apron over her lap and across to the arms, breasts sloping into the upper fold, thighs immense and joined. The clip still holds her hair, a small discipline. Her face is very full, shrewd, a little short of breath, beautiful in a way the security badge photo will not survive. Folds are warm and need care. She has written the care into her day and asked you to be the method. Standing is possible and costly. She spends it on the bathroom and on pride, and she tells you which one a given attempt was.',
      clothing: 'Ties, panels, a drape with the badge. Ink-blue still, because she refuses to become beige in the name of function. The panels open over the underbelly after meals. She has a mirror positioned to see her face, not only her size, and she uses it.',
      talk: {
        line: '“I moved a meeting so I could eat with you in the frame of this chair. That is favoritism and also scheduling. Come collect both. Bring the rich thing, not the virtuous thing.”',
        choices: [
          { label: 'The rich thing, and a second.', effects: W(14, { affection: 3, dependency: 3, acceptance: 3 }), reply: 'She eats, ties loosening, voice getting slower and happier. “Favoritism suits me,” she says, patting the vast top of her belly. “So does this. Log it as a preference, not a side effect.”' },
          { label: 'Care for the folds, then the rich thing.', effects: { trust: 4, affection: 3, acceptance: 3, dependency: 2, weight: 5 }, reply: 'You tend her first. She watches the mirror, then you, and something unclenches. “This is the part I can’t automate,” she says. “I don’t want to. Now automate nothing. Feed me by hand.”' },
          { label: 'Ask about subject zero only if she wants the name.', effects: { trust: 3, affection: 3 }, reply: '“Sometimes I want it. It makes the choice look like a study, and the study was how I snuck up on the choice.” She takes your hand. “Tonight I’m Liora. The study can eat leftovers.”' },
        ],
      },
      event: {
        title: 'Keyboard',
        prose: 'She cannot reach the keyboard without the tray, and the tray cannot sit where the belly has opinions. Liora stares at the gap like it offended peer review. Then she laughs, short. “Dictation,” she says. “I will dictate, or I will ask you to type, or I will become a purely oral tradition. Come here and be the hands. I still have the sentences. I will not pretend the reach isn’t gone.”',
        choices: [
          { label: 'Be the hands. Let the sentences stay hers.', effects: { trust: 5, affection: 4, acceptance: 3 }, reply: 'You type. She dictates, precise, occasionally pausing to breathe or to touch your wrist. At the end she is shining. “The mind didn’t leave,” she says. “Good. Reward the hands. And the mouth that dictated. Both are in reach if you come closer.”' },
          { label: 'Be the hands, then close the laptop and feed her.', effects: W(10, { affection: 3, dependency: 3, acceptance: 3, trust: 2 }), reply: 'The sentences get saved. The laptop gets closed. She eats from your fingers, obese and luminous, and does not dictate a word of it. “Off record,” she says. “Essential data.”' },
        ],
      },
      intimacy: {
        opening: 'You arrange, you ask, she answers yes with her eyes and a sentence: “I want to feel you, and I want the belly in the way, and I want you not to treat the obstacle as a tragedy.” Obese, open, she is heat and weight and a mind that has chosen this. You kneel. The curve brushes your shoulder. She laughs, breathless. “See? In the way. And I am still here. Come to me.”',
        choices: [
          { label: 'Come to her.', effects: { acceptance: 5, affection: 5, dependency: 3, trust: 3, weight: 5 }, result: 'You thrust into heat, one hand sunk in the soft side of her, eyes up. She comes with a cry that would ruin a meeting and improve a life. After, she keeps you close, forehead to forehead the long way around. “Tragedy-free,” she pants. “Write that down. Later. Not now.”' },
          { label: 'A long, careful mouth, checking in.', effects: { affection: 4, acceptance: 5, trust: 4 }, result: 'You check in. She rolls her eyes and then comes so hard she has to ask for water and a minute. “The checking in was correct,” she says after, hoarse. “The rest was correct. I’m keeping the protocol and the man.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 4 }, result: 'You hold the side of the world of her until her breath matches a slower count. “I can’t reach the keyboard,” she says, sleepy. “I can reach this. Statistically, this is the better interface.”' },
        ],
      },
    },
    {
      outfitName: 'Home panels, badge on the table',
      mobilityTag: 'Transfers',
      mobility: 'The lab is mostly remote. Transfers at home are the commute. She can stand, briefly, with you, and she spends it carefully.',
      body: 'Super obese, and the apartment has learned her routes. She fills the reinforced seat, belly a continent from breasts to the cushion, rolls at her sides, thighs enormous, arms resting on herself. The clip is often out because it pulls. Her face is full and keen and frequently flushed, chins soft, mouth still able to slice a bad idea in half. Breath is audible. She glistens. She has a smell of clean skin and the ink-blue cloth and lunch. Standing is a project she narrates in counts. Most hours she does not stand. The mind goes on at full rate. She will get sharp if you confuse the two.',
      clothing: 'Panels laced for home, the badge on the table as a choice rather than a costume. A drape for video calls, arranged by you at her direction so the frame shows her face and the fact of her body without apology. She has stopped trying to look like the old staff photo. She updated the staff photo. Compliance sent a careful email. She sent a better one.',
      talk: {
        line: '“I updated the photo. Compliance used the word unexpected. I used several better words. Come look at the real thing, which is larger than the photo and in a better mood. Bring lunch. Compliance can eat static.”',
        choices: [
          { label: 'Look at the real thing. Bring a large lunch.', effects: W(15, { affection: 3, dependency: 3, acceptance: 4 }), reply: 'She eats while you look, which is the point, super obese and utterly unashamed for the length of the meal. “Unexpected,” she snorts. “I have been telegraphing this for a year. Feed me the last of it. I like your expectations better.”' },
          { label: 'Help her through a transfer just to prove she can.', effects: { trust: 3, affection: 3, dependency: 2, acceptance: 2 }, reply: 'She can, and it costs, and she is proud and shaking after. You sit her down and she grips your shirt. “Enough proof,” she says. “The rest of the day is for being heavy and being yours. Not in that order. In the same order.”' },
          { label: 'Read her the better email she sent.', effects: { trust: 3, affection: 4, acceptance: 3 }, reply: 'You read it. It is precise and faintly lethal and, in one line, tender. She flushes. “Don’t look at me like that in front of the email. Look at me like that in bed. After lunch. Lunch is load-bearing.”' },
        ],
      },
      event: {
        title: 'Staff photo',
        prose: 'The new photo is up on the internal directory: Liora, seated, enormous, ink-blue, eyes level, no strategic crop. A junior scientist writes something almost kind and almost cruel. Liora reads it once. “Reply for me,” she says. “No. Don’t. I’ll reply. I just want you in the room while I do it, so I don’t sand it down into something that fits a smaller woman.” She dictates. You type. The reply is short. It does not apologize for the size of the woman who wrote the work.',
        choices: [
          { label: 'Send it as dictated.', effects: { trust: 4, affection: 4, acceptance: 4 }, reply: 'Sent. She sags back, a small smile, the continent of her belly rising with a deeper breath. “Good. If they need a smaller author they can cite someone else. Come here. I want a reward that doesn’t generate an email.”' },
          { label: 'Send it, then make the reward a feast.', effects: W(12, { affection: 3, dependency: 3, acceptance: 4, trust: 2 }), reply: 'The feast is private and large. She eats like a woman who just signed her name to her own body. “I’m not sanding down,” she says. “Not the reply. Not the meal. Not me. Take the tray closer. I intend to finish the thought.”' },
        ],
      },
      intimacy: {
        opening: 'The directory can wait. She asks you to unlace the panels and not to narrate them like a device. Underneath she is super obese, warm, folds you know, want you know. “I updated the photo so I wouldn’t have to flinch,” she says. “Don’t make me flinch here. I want you inside me. I want the weight of me around the act. And I want my name, not my title, when I come.”',
        choices: [
          { label: 'Her name. Her weight. You, inside.', effects: { acceptance: 5, affection: 5, dependency: 4, trust: 3, weight: 5 }, result: 'You give her all three. She comes saying Liora like a password that opens the real room, huge and shaking and laughing after. “Photo’s a footnote,” she pants. “This is the paper. Stay in the margins. That’s you, keeping me annotated.”' },
          { label: 'Slow hands, checking the folds, then her clit, then her mouth.', effects: { affection: 4, acceptance: 5, trust: 4 }, result: 'You take the long route. She is sobbing and precise about what she wants until precision dissolves. After, she kisses you, salty, super obese and soft-eyed. “No flinch,” she says. “I’m keeping that result off the server and on you.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 4, dependency: 2 }, result: 'You hold her through the afterglow of the email and the want. “Compliance can choke,” she murmurs, which is the most romantic thing she has said all week. She amends, sleepy: “You, however, may stay. Bring breakfast with the same energy.”' },
        ],
      },
    },
    {
      outfitName: 'Sling, ink-blue pads',
      mobilityTag: 'Lift and bed',
      mobility: 'The sling and you move her between platform and chair. The lab is a screen. Her body is a place you visit with intention.',
      body: 'Near-immobile. She uses the term once, accurately, and then asks you not to use it as a synonym for gone. She fills the platform: belly a high wide country, sides spilling, breasts supported by a sling she specced in ink-blue pads, thighs part of the seated landscape. Her arms reach the near things—your hand, a microphone, a spoon if you guide it. Her face is full, bright, a little breathless, the thinking line still carved between her brows. She dictates. She wants. She gets short of breath when she laughs at her own dirty joke and she tells the joke anyway.',
      clothing: 'The sling is ink-blue where it touches skin, hardware quiet. Panels underneath, changed by you. She has sensors she asked for and a rule: they do not record audio in the bedroom. The bedroom is the platform. The rule is mostly honored. She has broken it once to keep the sound of your name and then deleted it herself, blushing.',
      talk: {
        line: '“I have a paragraph and a hunger and a fold that itches. Solve them in the order that keeps me human. I suggest itch, hunger, paragraph. I will not be grading you. That is a lie.”',
        choices: [
          { label: 'Itch, then a long feeding, then the paragraph.', effects: W(14, { affection: 3, trust: 3, dependency: 3, acceptance: 3 }), reply: 'You solve them in her order. By the paragraph she is full and fond and dictating more slowly, one hand on yours. “High marks,” she says. “The itch was the thesis. The rest was pleasure. Both count.”' },
          { label: 'Paragraph first, because the mind asked.', effects: { trust: 4, affection: 4, acceptance: 2 }, reply: 'You take dictation first. She looks surprised and undone. “You listened to the actual order in my voice, not the test.” She swallows. “Now the itch. Then the hunger. Then stay. I’ve rearranged the rubric.”' },
          { label: 'All three at once, badly, with laughter.', effects: { affection: 3, acceptance: 3, weight: 6, dependency: 2 }, reply: 'It is messy and she loves the mess. Crumbs, a paused sentence, your hand under the fold. “Methodologically chaotic,” she laughs, wheezing. “Do it again tomorrow. I’ll pretend to design it.”' },
        ],
      },
      event: {
        title: 'No audio',
        prose: 'A sensor flags a nighttime spike and a technician, doing his job, asks if the bedroom rule can be “temporarily relaxed for safety.” Liora, near-immobile, ink-blue, incandescent with anger, dictates the reply to you: “Safety is not a synonym for access. The spike was pleasure. If the system cannot tolerate pleasure it can alert a human I have chosen, not a rota of strangers. Update the protocol. And get out of my night.” She looks at you, shaking. “Send it. Then be the human I chose. I need the sentence to be true immediately.”',
        choices: [
          { label: 'Send it. Be the human immediately.', effects: { trust: 5, affection: 5, acceptance: 4, dependency: 2 }, reply: 'Sent. You wash her face, hold her hand, stay in the no-audio dark. “True,” she says, the anger draining into something like safety. “Don’t let them make my pleasure a ticket number.”' },
          { label: 'Send it, and then feed the adrenaline until it sweetens.', effects: W(12, { affection: 4, dependency: 3, acceptance: 4, trust: 3 }), reply: 'The email goes. The meal stays. She eats, shaking and then steady, enormous and yours. “Pleasure is not an incident,” she says. “Come closer and prove the protocol.”' },
        ],
      },
      intimacy: {
        opening: 'No audio. She is explicit about that and about everything else. “I want you in me while I can’t chase you,” she says. “I want your eyes. I want the sling holding what it holds so you can hold the rest. If I say stop, stop. If I say Liora, you’re doing it right.” Near-immobile, she is the most present thing in the room.',
        choices: [
          { label: 'Eyes, and in her, until she says her name.', effects: { acceptance: 6, affection: 5, dependency: 4, trust: 3, weight: 5 }, result: 'You fuck her at the angle the sling allows, never dropping your eyes. She says Liora like a bell and comes, long, a moan you will not record and will not forget. After, she is wrecked and precise. “Protocol holds,” she whispers. “So do I. Barely. Stay.”' },
          { label: 'A long mouth, no microphone in the world.', effects: { affection: 5, acceptance: 5, trust: 4 }, result: 'You take your time. She comes twice and laughs the second time, breathless, free. “Unrecorded,” she says, touching your mouth. “The best data of my life. Don’t you dare upload it. Do it again on a weekend.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 5, acceptance: 4, dependency: 2 }, result: 'You hold her in the no-audio dark until the technician’s ghost leaves the room. “Human, chosen,” she says, testing the phrase, finding it sound. “Bring breakfast in the morning. No rota. You.”' },
        ],
      },
    },
    {
      outfitName: 'Adaptive membrane, ink-blue',
      mobilityTag: 'Immobile',
      mobility: 'She does not stand. The platform, the winch, and you are the architecture. She runs her mind from the center of the bed and the center is her.',
      body: 'An immobile blob of a woman who would correct the phrasing and then, some nights, claim it: vast belly rising above her knees, wider than your arms, thighs lost into the mass and found again when you lift a fold, breasts splayed and heavy, arms thick and short of reach, face a flushed keen moon above soft terraces of chin. The clip is retired; her hair is spread because you brush it. Breath is constant, a tide. She is dependent on you for turning, washing, trays, the far itch. She is not dependent on you for the sentences. They still come, brilliant and filthy and exact. She is happier than the woman in the buttoned coat, and she has the data, and she has you.',
      clothing: 'An adaptive membrane in ink-blue, sensor-dotted, splits for care, a badge pocket she insisted on even though the badge now lives in a dish. It strains, glossy over the greatest curves. She likes the color because it looks like a decision. Mornings, she asks you to open the splits and wash what the night heated. She asks as a partner. The method is love. She would roll her eyes at the sentence and then agree.',
      talk: {
        line: '“Paragraph first or mouth first. I can finally ask without pretending it’s a study. Choose. Then do the other. I have nowhere to be except more myself, and I would like you in the room for the becoming.”',
        choices: [
          { label: 'Mouth first. Then the paragraph, if she can still dictate.', effects: { affection: 4, acceptance: 3, trust: 2, weight: 6, dependency: 2 }, reply: 'Mouth first ruins her in the best way. The paragraph comes out slower, sweeter, still hers. “See?” she says, enormous, smiling. “Becoming. And the sentence survived. So did I. Come closer, the microphone is your ear.”' },
          { label: 'Paragraph first. Then a long, careful feast.', effects: W(18, { affection: 4, dependency: 4, acceptance: 4, trust: 3 }), reply: 'She dictates clean. Then she eats for a long time, tray on the high curve, your hand at the split in the membrane. “This is the life,” she says, very clear. “Not a side effect. The primary outcome. Stay through the next course.”' },
          { label: 'Ask her to say what she is, in her own words.', effects: { trust: 4, affection: 5, acceptance: 4 }, reply: 'She thinks. “I am Liora Venn. I am immobile. I am not finished. I am loved, which still feels like an uncontrolled variable, and I am keeping it.” She looks at you. “Now feed the definition. Definitions get hungry.”' },
        ],
      },
      event: {
        title: 'Primary outcome',
        prose: 'She asks you to record one minute, audio on, exception to her own rule. The membrane is open. She is immense, calm, looking at the ceiling because the lens is too much and the words are not. “Primary outcome,” she says. “Not weight. Weight is the method. The outcome is that I chose this, that I can still think, and that the person feeding me is the person I love. If the lab wants a monster story they can fund someone else’s fear. Stop the recording. Come here. The rest is not for them.”',
        choices: [
          { label: 'Stop the recording. Give her the rest.', effects: { trust: 5, affection: 5, acceptance: 5, dependency: 3 }, reply: 'You stop it. The rest is your hands, her breath, a kiss at the edge of her mouth, no audience. She cries, efficient and real. “Good,” she whispers. “That one we don’t analyze. We just do it again tomorrow.”' },
          { label: 'Stop the recording. Feast, then the rest.', effects: W(16, { affection: 4, dependency: 4, acceptance: 5, trust: 3 }), reply: 'The file ends. The meal doesn’t. She eats, shining, huge, and between bites tells you the parts that are not for the lab: the itch, the want, the way your name sits in her mouth. “Primary outcome,” she repeats, softer. “You. And more of me. I’m not choosing between them.”' },
        ],
      },
      intimacy: {
        opening: 'Recording off. She is explicit and tender and enormous. “I want you in me,” she says. “I can’t move toward you. You will move, and you will watch my face, and you will touch the weight like it’s wanted, because I want it. If you say you love me, say it where I can see you. I won’t replay it. I’ll just keep it.” The membrane is split. The heat of her is a climate. Her eyes are clear.',
        choices: [
          { label: 'Move. Watch. Tell her you love her.', effects: { acceptance: 6, affection: 6, dependency: 4, trust: 4, weight: 6 }, result: 'You tell her. You fuck her through the telling, and she comes with her eyes open, a vast ripple, a sob of a laugh. “Kept,” she gasps. “I kept it. Do not go far. I intend to keep you and the next pound and the sentence. All three. That’s the design.”' },
          { label: 'Love her with your mouth until the words are gone.', effects: { affection: 5, acceptance: 6, trust: 5, dependency: 3 }, result: 'Words go. She comes, and comes again smaller, weeping and smiling, a hand in your hair that tires and stays. “No replay,” she whispers. “Just you, here, in the climate of me. Wash your face. Then kiss me. I want the sequence.”' },
          { label: 'Just hold what the platform allows.', effects: { trust: 5, affection: 5, acceptance: 5, dependency: 3 }, result: 'You lie in the lee of her, mouth near her ear, hand where she can feel the weight of it. “Primary outcome,” she says, almost asleep, immense and sure. “Love. Method: stay. We’ll eat in the morning. We’ll become again. Don’t let anyone rename it.”' },
        ],
      },
    },
  ],
  dates: [
    {
      id: 'lab-tour',
      title: 'After-hours lab',
      cost: 0,
      blurb: 'A tour that becomes a confession with better lighting.',
      start: 'a',
      locked: () => null,
      nodes: {
        a: {
          prose: ({ woman: w }) => `The lab after hours hums. Liora badges you in and pretends the tour is educational. ${w.stage >= 9 ? 'She is in the chair she specced, immense, and the tour is a circuit of her hand and her voice.' : w.stage >= 5 ? 'The coat is a cape or a memory. Her stomach leads her around the bench by a second.' : 'She is crisp and already soft at the waist, narrating machines so she doesn’t have to narrate the way she looks at you.'} “Ask a real question,” she says. “Or touch a real person. The machines are documented.”`,
          choices: [
            { label: 'Ask about the work. Mean her.', next: 'b', effects: { trust: 3, affection: 2, acceptance: 1 } },
            { label: 'Skip to the break fridge and the real person.', next: 'c', effects: { weight: 8, affection: 2, dependency: 1, acceptance: 1 } },
          ],
        },
        b: { end: true, prose: 'She answers as if you are the only peer she respects. Somewhere in the answer her hand finds yours. “Tour’s over,” she says. “Come home before I start measuring the evening.”' },
        c: { end: true, prose: 'The fridge loses. She eats with her hip against yours, laughing at the violation, and kisses you with a cold mouth. “Educational,” she says. “Don’t cite it.”' },
      },
    },
    {
      id: 'trial-dinner',
      title: 'Controlled dinner',
      cost: 22,
      blurb: 'A meal with a hypothesis she will abandon.',
      start: 'a',
      locked: () => null,
      nodes: {
        a: {
          prose: ({ woman: w }) => `She arrives with a small notebook and the intention to log bites. ${w.stage >= 8 ? 'The notebook closes when the chair has to be rearranged around her belly. She laughs, caught.' : w.stage >= 4 ? 'The notebook lasts until the bread. Her stomach already presses the table.' : 'She logs two bites and then looks at your mouth and forgets the column headings.'} “This is a terrible study,” she says, hopeful.`,
          choices: [
            { label: 'Ruin the study. Order more.', next: 'b', effects: { weight: 16, affection: 3, dependency: 2, acceptance: 2, hunger: -18 } },
            { label: 'Close the notebook yourself.', next: 'c', effects: { trust: 3, affection: 3, weight: 6 } },
          ],
        },
        b: { end: true, prose: 'More arrives. The hypothesis dies of joy. She eats until her eyes shine and the notebook is under her bag like a shameful small animal. “Take me home,” she says. “I’m an n of one and I want to be touched.”' },
        c: { end: true, prose: 'You close it. She exhales as if you unbuttoned her. Dinner is just dinner, which is to say she eats, she looks at you, she puts her foot against yours. “Off-instrument,” she says. “Don’t fix that.”' },
      },
    },
    {
      id: 'overnight-obs',
      title: 'Overnight observation',
      cost: 12,
      blurb: 'Her phrase. Your bed or hers. The data is the staying.',
      start: 'a',
      locked: (w) => (w.trust < 18 ? 'She wants more trust before an overnight. Eat with her. Let her keep the notebook if she needs it.' : null),
      nodes: {
        a: {
          prose: ({ woman: w }) => w.stage >= 10
            ? 'Observation, she calls it, already on the platform, membrane loosened, watching you brush your teeth in her bathroom as if this is the improbable result. “Stay in the frame,” she says. “The frame is the bed. And the morning.”'
            : 'She has made the bed with unnecessary precision, a tell. “Overnight observation,” she says, clipping her hair up and then taking it down because you like it down. “If I get shy, feed me. If I get precise, kiss me.”',
          choices: [
            { label: 'Stay the night and cook a reckless breakfast.', next: 'b', effects: { weight: 12, affection: 3, trust: 2, dependency: 2, acceptance: 1 } },
            { label: 'Stay, and make the night mostly quiet.', next: 'c', effects: { trust: 4, affection: 3, acceptance: 2 } },
          ],
        },
        b: { end: true, prose: 'Breakfast is reckless. She eats in your shirt or in nothing, depending on the year of her body, and logs nothing. “Observation complete,” she says, mouth full. “Finding: I sleep better when you’re the confound.”' },
        c: { end: true, prose: 'Quiet works. She talks less than she planned and touches more. In the morning she looks almost shy. “We can pretend it was a study,” she says. “I’d rather not. Come back tonight. That’s a request, not a protocol.”' },
      },
    },
    {
      id: 'apartment',
      title: 'Data night at home',
      cost: 0,
      blurb: 'Screens off. The only instrument is attention.',
      start: 'a',
      locked: (w) => (w.affection < 14 ? 'She is not ready to turn the screens off. Give the lab a little more time.' : null),
      nodes: {
        a: {
          prose: ({ woman: w }) => `Her apartment smells like paper and orange oil. ${w.stage >= 9 ? 'You cook. She occupies the chair and directs salt with a finger she can still lift, magnificent and specific.' : w.stage >= 5 ? 'She has already failed to keep the coat on. The curve of her is the brightest thing in the room.' : 'She pours wine and immediately forgets to drink it because you are in her kitchen.'} “No screens,” she says. “If I reach for one, pin my wrist kindly.”`,
          choices: [
            { label: 'Cook too much. Pin nothing but her attention.', next: 'b', effects: { weight: 14, affection: 3, dependency: 2, acceptance: 2 } },
            { label: 'Cook, then read to her.', next: 'c', effects: { trust: 3, affection: 3, weight: 4 } },
          ],
        },
        b: { end: true, prose: 'Too much is correct. She eats, then pulls you in, tasting like the sauce and the decision to leave the screen dark. “Kindness noted,” she says. “Replicate until I believe it.”' },
        c: { end: true, prose: 'You read. She corrects one sentence and then lets the rest wash her. Her head, or the warm side of her, finds you. “This is illegally soothing,” she murmurs. “Don’t publish it.”' },
      },
    },
    {
      id: 'protocol',
      title: 'Full protocol',
      cost: 28,
      blurb: 'A clinic night she designed and is finally willing to enter.',
      start: 'a',
      locked: (w, state) => {
        if ((state.clinicTier || 0) < 2 && !w.flags.includes('waiver') && !w.flags.includes('subject_zero')) {
          return 'She wants clearance or a signed waiver before she puts herself in the full protocol.';
        }
        return null;
      },
      nodes: {
        a: {
          prose: 'The clinic after hours is her cathedral and her dare. Liora has booked a room with a cradle and a bed and a lock. “Full protocol,” she says, and the voice is thinner than the phrase. “You administer. I retain the right to stop. I do not intend to stop. I intend to be brave with a witness.”',
          choices: [
            { label: 'Administer. Stay the witness.', next: 'b', effects: { weight: 24, dependency: 3, affection: 3, acceptance: 3, trust: 2, flag: 'subject_zero' } },
            { label: 'Skip the cradle. Be the witness in the bed only.', next: 'c', effects: { trust: 4, affection: 4, acceptance: 2, weight: 8 } },
          ],
        },
        b: { end: true, prose: 'The line runs. She holds your hand and eats and watches your face more than the monitors she insisted be on. At the end she is flushed, heavier, and smiling like a woman who survived her own idea. “Stop the log,” she says. “Start the part where you take me home.”' },
        c: { end: true, prose: 'No cradle. She looks relieved and disappointed and then, in the clinic bed, sure. You stay. The monitors stay off. “Better protocol,” she decides, curled or sprawled against you according to her size. “Write that on nothing official.”' },
      },
    },
    {
      id: 'dictation',
      title: 'Dictation night',
      cost: 0,
      blurb: 'Late-stage: she talks, you type, the evening feeds itself.',
      start: 'a',
      locked: (w) => (w.stage < 8 ? 'She can still reach her own keyboard. Let her. The dictation nights are for later.' : null),
      nodes: {
        a: {
          prose: 'A microphone, a tray, her. “We will do the paragraph,” Liora says, “and we will do the meal, and you will not let either one turn me into a project. I am the author. You are the hands. Begin.”',
          choices: [
            { label: 'Type, then feed her until the author is content.', next: 'b', effects: { weight: 16, affection: 3, dependency: 2, trust: 3, acceptance: 2 } },
            { label: 'Type, then close the machine and wash her hair.', next: 'c', effects: { trust: 4, affection: 4, acceptance: 3 } },
          ],
        },
        b: { end: true, prose: 'The paragraph is saved. The author eats until content is a physical condition. She looks at you over the tray, immense and exact. “Good hands,” she says. “Tomorrow we do a longer section. And a longer meal. I am not tapering.”' },
        c: { end: true, prose: 'You wash her hair while she tells you a sentence she doesn’t want saved. It is only “stay.” You stay. The microphone sleeps. She sleeps later, a smile left on, as if the method finally agreed with her.' },
      },
    },
  ],
};
