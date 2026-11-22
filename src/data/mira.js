const W = (weight, extra = {}) => ({ weight, hunger: -8, ...extra });

export const mira = {
  id: 'mira',
  name: 'Mira Chen',
  age: 24,
  role: 'Literature grad student, closer at Second Shelf',
  hairStyle: 'long',
  accent: '#d46a78',
  hair: '#241612',
  skin: '#f0c2aa',
  blush: '#e0898a',
  baseWeight: 112,
  startStage: 1,
  metabolism: 3,
  activity: () => 0.92,
  start: { affection: 20, trust: 16, dependency: 4, acceptance: 8 },
  bio: 'Mira is halfway through a thesis on appetite in nineteenth-century novels, which she insists is not a confession. She is slight, ink-stained, and careful with chairs. She keeps the late shift at Second Shelf because the café is quiet after ten and the unsold pastry has to go somewhere. She already likes you more than she thinks is wise.',
  refuseStrong: 'Mira turns the vial in her fingers and gives it back. “I want dinner. I don’t want to be a trial. Not when you look at me like that and I can’t tell which one you’re offering.”',
  refuseExtreme: 'She laughs once, frightened. “That thing is for bodies in the brochures. I’m still trying to button my coat. Ask me when I trust you with the version of me that can’t run.”',
  reactions: {
    pastry: [
      'She breaks the tart with both hands so it won’t flake on her notes, then eats the center first, eyes shut, as if she is stealing it.',
      'The tart disappears in small, guilty bites. After, she rests a hand on the new curve of her stomach and says, “Don’t narrate it. I can hear you narrating it.”',
      'You set the tart on the upper swell of her belly because the table is farther than it used to be. She eats slowly, flushed, and thanks you like you brought medicine.',
    ],
    honey: [
      'She licks honey from the spoon and coughs on the sweetness. “That’s not from the café.” She takes another spoonful anyway.',
      'Honey on her lip, breath thicker. “If I keep drinking this I’ll have to tell my advisor the truth. The truth being pastry.”',
      'You tip the jar. She drinks, swallows hard, and a shiver goes through all of her. “More,” she says, surprised to hear it out loud.',
    ],
    feast: [
      'She tries to be polite and fails at the cheese. “Stay. If you stay it’s a meal and not a lapse.”',
      'Halfway through she unties her waistband under the table and gives you a mortified, grateful look. She keeps eating.',
      'The board sits on a tray across her middle. She works through it with concentration, one hand braced on a fold, and hums when the bread is gone.',
    ],
    still: [
      'She swallows the capsule with tea and looks relieved and a little betrayed. “Okay. A pause. Don’t let me make the pause into a personality.”',
      '“Good,” she says, then, quieter, “I was starting to plan my days around the next thing you’d bring.”',
      'She takes it, but her eyes shine. “You can slow it down. You can’t make me small again. I’m not sure I want you to.”',
    ],
    nectar: [
      'Nectar-9 fizzes against her lip. She drinks, blinks, and laughs. “Oh, that’s rude. I can feel it deciding things.”',
      'Two swallows and her knee bounces. She reaches for whatever is closest, which is the heel of yesterday’s bread, and does not apologize.',
      'She drinks lying back, throat working, one hand circling the place where her stomach growls loud enough for both of you.',
    ],
    spike: [
      'The ampoule leaves a pink dot on her arm. Twenty minutes later she is standing in the kitchen in her socks, eating rice from the pot, talking very fast about a poem.',
      'She grips your wrist. “You did this. Don’t go anywhere. I need— food, yes, but also you in the chair so I don’t eat the chair.”',
      'Hunger hits her like weather. She whimpers, half laughs, and opens her mouth for the first thing you offer. There is no performance left in it.',
    ],
    keel: [
      'She lets you smooth the patch just above her hip, ears red. “If this works I’m blaming the literature.”',
      'The patch sits on a softness that wasn’t there in spring. She presses it flat and says, “So I’m keeping things now. Officially.”',
      'You need both hands to smooth the patch along her side. She watches you work and says, almost proud, “Find a place that isn’t already busy.”',
    ],
    cradle: [
      'Getting her into the cradle takes coaxing and a joke that breaks halfway. Once the line is in, she stares at the ceiling and whispers, “Don’t quote this back to me in the morning.”',
      'She fills the cradle more than the diagram suggested. The tone counts her swallows. She covers her face with one arm and eats, and eats, and lets you hold the other hand.',
      'The rig has to be extended. She is beyond shy and past refusing. “Stay where I can feel you,” she says. “If I’m going to be this much, I want the witness I chose.”',
    ],
    bloom: [
      'She reads the label twice. Then she offers her arm. “For the record, I am terrified. Also, yes.”',
      'The serum goes in and her breath catches, not from pain. She looks down at herself as if the future has already sat on her lap. “Oh,” she says. “Oh, we’re really doing it.”',
      'You dose her on the platform. There is nowhere else. She cries a little and pulls your hand to the vast warm rise of her belly. “Let it take. I’m tired of almost.”',
    ],
    loom: [
      'The loft’s measuring tape makes her giggle and then go silent. She orders a dress she can breathe in and pretends it is only practical.',
      'She stands, then sits, because standing for the fitting is a negotiation. The tailor—unblinking, kind—builds a skirt around the belly instead of against it.',
      'They drape the cloth over her where she rests. She chooses a color like tea. “Something that looks like I meant to be seen,” she says.',
    ],
    sling: [
      'The sling is early for her, and she snorts. “I’m chubby, not a bridge project.” She tries it on anyway, secretly pleased by the gold thread.',
      'She lets the weave take her breasts and the undercurve of her stomach. The relief in her shoulders is immediate. She hates that you can see it, and leans anyway.',
      'Clipping her into the sling is part of the morning now. She lifts her arms as far as they go. “Tight enough that I feel held. Not so tight that I can’t feel you under it.”',
    ],
    aerosol: [
      'She sniffs the air in your apartment and narrows her eyes. “It smells like peaches and a decision.” She stays the night.',
      '“The room is doing something,” she murmurs, half asleep, hand on her stomach. “I don’t hate it. That’s the problem I’m choosing.”',
      'She can barely turn her head toward the diffuser and still smiles. “So even the air is on your side. Greedy. Come here.”',
    ],
  },
  texts: {
    early: [
      'The café tried to give away the last tart and I said I was holding it for someone. That someone is my mouth. You can still come.',
      'Thesis sentence of the day: hunger is a setting, not a sin. I highlighted it and then ate cereal from the box.',
      'My jeans fit if I don’t sit and don’t breathe and don’t exist. A normal Tuesday.',
      'Are you walking past Second Shelf? No reason. The bell works. So do I. Mostly.',
    ],
    mid: [
      'I took the long way so I wouldn’t pass the bakery and then I passed the bakery. Tell me that is character development.',
      'A chair in the library complained about me and I have never been more perceived.',
      'I need a bigger apron. I typed that to you and stared at it. I’m sending it anyway.',
      'If you come over, bring something soft to wear or something sweet to eat. Or you. You count as both on bad days.',
    ],
    late: [
      'I got from the bed to the chair. That was the heroic part of the day. The rest was bread and missing you.',
      'Don’t bring flowers. Bring food you can balance on me. I mean that more tenderly than it sounds.',
      'Breathing is loud when I laugh. I laughed at a poem and then I couldn’t find the end of the breath. It was still a good poem.',
      'The door is unlocked because getting up to open it is a whole plot. Come in. I’m where you left me, plus a little.',
    ],
  },
  ambients: {
    early: [
      {
        title: 'Margin notes',
        prose: 'Mira sends a photo of a library page with a tart crumb in the gutter. Under it she has written, in pencil, I’m not a metaphor. Then she has crossed it out.',
        choices: [
          { label: 'Reply that she’s allowed to be literal.', effects: { affection: 2, trust: 2 }, reply: 'She sends back a single heart and, after a long pause, a picture of a second crumb.' },
          { label: 'Tell her to save you the next pastry.', effects: { weight: 4, dependency: 1, affection: 1 }, reply: 'She shows up later with a bag and a look that says she already failed at saving anything.' },
        ],
      },
      {
        title: 'Closing shift',
        prose: 'From the street you see her through Second Shelf’s glass, stacking cups, cardigan sleeves over her hands. She sways a little to a song you can’t hear. She looks up as if she felt the looking.',
      },
    ],
    mid: [
      {
        title: 'The borrowed coat',
        prose: 'Mira texts from a shop fitting room: nothing here is for a body that is in the middle of a sentence. She has been in the middle for weeks.',
        choices: [
          { label: 'Take her to the Loom loft instead.', effects: { acceptance: 4, trust: 2, money: -20 }, reply: 'You pay the consult from your own pocket. She stands very still while they measure her, then exhales like a person set down.' },
          { label: 'Tell her the tight clothes are the point.', effects: { weight: 2, trust: -2, dependency: 2 }, reply: 'She goes quiet long enough to worry you. Then: “Fine. But you have to be there when they split. I’m not doing the punchline alone.”' },
        ],
      },
      {
        title: 'Stairs',
        prose: 'She calls instead of texting, which means the stairwell at the literature building. “I’m pretending to check my mail,” she says, breathing. “There are three flights left and my thighs are having a seminar.”',
      },
    ],
    late: [
      {
        title: 'Unread on purpose',
        prose: 'A draft dissertation chapter arrives in your inbox by mistake, or not. In the acknowledgments, already, your initial. In the margin of a paragraph about feast scenes: I am not sorry. The file’s last edit was at 3 a.m.',
        choices: [
          { label: 'Leave a comment: I’m not sorry either.', effects: { affection: 3, acceptance: 3 }, reply: 'She deletes the comment and writes, in the document itself, good. Then she asks you to bring breakfast and not to make her reach for it.' },
          { label: 'Offer Stillpoint and a week of quiet.', effects: { trust: 3, dependency: -2 }, reply: 'She thinks about it. “Quiet, yes. The capsule, not today. I want to feel what I did to the chapter.”' },
        ],
      },
      {
        title: 'Rain on the glass',
        prose: 'You pass her building and see, through the second-floor window, only the dune of a blanket and the small motion of a hand turning a page. She is home. The city is doing its work without you. You feel it anyway, low and proprietary and fond.',
      },
    ],
  },
  overnight(woman, day) {
    const early = [
      'She graded papers in bed and ate the emergency noodles.',
      'A tart went missing at Second Shelf. The camera footage is just her, looking at the camera.',
      'She walked home the long way and still stopped for a bun.',
      'Her watch spun on her wrist all day. She tightened it and it still spun.',
    ];
    const mid = [
      'She took the lift and felt caught, then took it again after lunch.',
      'Two dinners, both “small,” both denied in the group chat.',
      'She repaired a seam and split it again sitting down.',
      'The library chair left ridges in her hips. She wrote about them and then deleted the paragraph.',
    ];
    const late = [
      'She ate where she sat, which is where she lives now.',
      'A neighbor left bread outside the door. She cried, then finished it.',
      'Turning over took ten minutes and a muttered apology to no one.',
      'She fell asleep with honey on her lip and woke hungry anyway.',
    ];
    const pool = woman.stage >= 9 ? late : woman.stage >= 5 ? mid : early;
    return pool[day % pool.length];
  },
  tableLine(woman) {
    const s = woman.stage;
    if (s >= 9) return 'Mira arrives early because arriving at all is a project. They seat her in a reinforced chair and she still spills softly past its edges, cardigan draped like a flag of truce over a belly that rests on her lap. She reads the menu and then looks at you, shy and already hungry.';
    if (s >= 5) return 'Mira edits the menu with her thumb and orders the thing she would have called too much last spring. Her dress is stretch, honestly losing, and when she sits, her stomach meets the table edge with a soft, unmistakable kiss.';
    return 'Mira takes the end chair, ankles crossed, and steals olives off the shared plate as if literary theory requires them. Her cardigan is buttoned. For now.';
  },
  stages: [
    {
      outfitName: 'Ivory cardigan, high-waisted jeans',
      mobilityTag: 'Light on the stairs',
      mobility: 'She takes the café stairs two at a time and only uses the rail to spin herself around the landing.',
      body: 'Mira is slender in the literal sense: a narrow waist, wrists the café watch keeps sliding down, collarbones that catch the Second Shelf lamps. Her breasts are small and high, her stomach a flat quiet between the ribs and the waistband, thighs slim enough that a gap remains when she stands with her boots together. The face is all eyes and a careful mouth. When she reaches for a cup, the cardigan slips off one shoulder and there is nothing extra to catch it. She perches. She does not yet settle.',
      clothing: 'The ivory cardigan buttons without pulling. Her jeans sit where jeans are supposed to sit. The café apron wraps her twice; she ties it in a bow and still has string left over, which she tucks, embarrassed by the excess.',
      talk: {
        line: '“I saved you the corner stool. Don’t look at chapter three, it’s a mess, and also it’s about hunger, which is not about me. Sit. The tarts are legally abandoned after ten.”',
        choices: [
          { label: 'Ask about the chapter instead of the tart.', effects: { trust: 3, affection: 1 }, reply: 'She glows, suspicious and pleased. “Fine. But if you quote me, I’ll deny the crumb on my lip.” She talks with her hands and forgets to eat until the tart is cold, then eats it anyway.' },
          { label: 'Slide her the tart and watch.', effects: W(5, { affection: 2, dependency: 1 }), reply: '“You’re a menace,” she says, and eats it in four bites, licking sugar off her thumb. A flush sits high on her cheeks. “Same time tomorrow. For the chapter. Obviously.”' },
          { label: 'Tease the oversized cardigan.', effects: { affection: 1, trust: -1 }, reply: 'She pulls the sleeves over her hands. “It’s armor. Against drafts. And people who notice things.” She smiles anyway and bumps your knee with hers.' },
        ],
      },
      event: {
        title: 'The corner stool',
        prose: 'After close she keeps the corner stool empty even when a couple wants the window. When you finally come in from the rain she looks so relieved it embarrasses her. She has written your initial in the foam of a coffee she made twenty minutes ago. The foam has collapsed. She tries to fix it with a spoon and makes it worse, laughing, thin shoulders shaking, the apron bow enormous at the small of her back.',
        choices: [
          { label: 'Drink it anyway.', effects: { affection: 3, trust: 2 }, reply: 'You drink the ruined coffee. She watches your mouth and then has to retie her apron for something to do. “Okay,” she says. “Okay. Good data.”' },
          { label: 'Stay to help her close, and finish the pastries.', effects: W(6, { affection: 2, dependency: 1 }), reply: 'You wipe tables while she “tests” three tarts for staleness. None are stale. She locks the door with sugar on her mouth and says, quietly, “I like the place better with you in it.”' },
        ],
      },
      intimacy: {
        opening: 'Her room is mostly books and a plant she keeps apologizing to. Mira kisses like she is checking a citation, careful, then less careful. Clothes come off and she is all clean lines: the small rise of her breasts, ribs you can rest a thumb between, a stomach that jumps when you breathe on it. She guides your hand with academic seriousness and then loses the sentence. “I’m not fragile,” she says, voice thin. “I just want you to notice the actual me, not the one you’re planning.”',
        choices: [
          { label: 'Slow, and let her set the pace.', effects: { affection: 4, trust: 3, acceptance: 1 }, result: 'You follow her hands. She comes with a startled laugh against your shoulder, skinny thighs tight around your hips, and afterward traces your mouth as if she plans to write about it and knows she won’t.' },
          { label: 'Tell her you want to feed her after.', effects: W(4, { dependency: 2, affection: 2, acceptance: 1 }), result: 'The words land. She hides in your neck, then nods. Sex is a little messy, a little eager, and the toast you bring her in bed becomes the second event. She eats it naked, cross-legged, crumbs on a stomach that is still flat, and looks at you like a door opened.' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 2 }, result: 'You stay dressed enough to be a blanket. She talks into your collarbone about the thesis until the words blur. Her body is a light weight against you, easy to gather. She falls asleep mid-sentence and does not apologize until morning.' },
        ],
      },
    },
    {
      outfitName: 'Same jeans, softer tee',
      mobilityTag: 'Easy, slightly slower',
      mobility: 'She still beats you up the stairs, but she holds the rail at the top and pretends she is only waiting.',
      body: 'Lean, not thin. A month of abandoned tarts has left a tenderness under her navel, a small warm curve that folds by a finger’s width when she sits and leans over the laptop. Her thighs meet now if she stands carelessly. Her face is a shade less hollow; the cheekbones are still the main event, but sugar shows at the edges. Her breasts fill the camisole that used to gap at the sternum. She has started resting a hand there when she laughs, as if she might spill.',
      clothing: 'The jeans button, but the skin above the band pillows gently over it by evening. The cardigan hangs differently, catching on the new softness instead of falling straight. She tugs it down without seeming to notice she does it.',
      talk: {
        line: '“If you say I look healthy I will file a complaint. I look like a person who has discovered clotted cream. Sit down, the chapter got away from me and so did lunch.”',
        choices: [
          { label: 'Say she looks like herself, only easier.', effects: { acceptance: 2, affection: 2 }, reply: 'She considers this with the gravity of a defense. “Easier,” she repeats. “I can live with easier.” Her shoulders drop. She steals a bite from your plate without performing the theft.' },
          { label: 'Offer street honey in your coffee.', effects: W(6, { dependency: 1, affection: 1 }), reply: 'She drinks from your cup, makes a helpless sound, and wraps both hands around it. “That’s not fair. You can’t invent a flavor and then expect me to be normal about you.”' },
          { label: 'Ask if she wants to slow down.', effects: { trust: 2, dependency: -1 }, reply: '“Maybe,” she says. Then, honest: “Not tonight. Tonight I want the noodles and your knee against mine. Ask me again when I’m not cold.”' },
        ],
      },
      event: {
        title: 'The spinning watch',
        prose: 'She shakes her wrist at you across the café, laughing. The watch, once tight enough to leave a faint mark, spins. “I’ve been eating the merchandise,” she says, like a confession in a play. “My wrist is the only part of me that got smaller, which is rude, the wrist was not the problem.” She pushes the sleeve up. The forearm is the same and not the same—softer at the edge, a faint dimple where the tendon used to show.',
        choices: [
          { label: 'Fasten the watch on a tighter hole.', effects: { affection: 2, trust: 2 }, reply: 'Your fingers at her pulse make her go quiet. There is no tighter hole. You move it to the next one and it fits. She looks at the new notch like a plot point she is not ready to publish.' },
          { label: 'Kiss the wrist and buy her a bun.', effects: W(5, { affection: 3, acceptance: 1 }), reply: 'She makes a noise that is mostly vowel. The bun is gone before you reach the corner. “For the record,” she says, sugar on her lip, “the wrist started it.”' },
        ],
      },
      intimacy: {
        opening: 'She keeps the tee on at first, then gets annoyed with her own shyness and pulls it off. The difference is a handful: breasts a little heavier in your palm, a stomach you can actually cup, warm and new. She watches your face the entire time for disappointment and finds none. Her thighs press your hips with more insistence than last time. “Don’t catalog me,” she whispers, already arching. “Or do. Just don’t do it out loud.”',
        choices: [
          { label: 'Worship the new softness.', effects: { acceptance: 4, affection: 3, weight: 2 }, result: 'You kiss the small curve under her navel until she squirms and laughs and then doesn’t laugh. She comes with her hand in your hair and a look of startled ownership. After, she spreads her fingers across the softness as if measuring what you just praised.' },
          { label: 'Take her the way you did when she was sharper.', effects: { affection: 2, trust: 1, acceptance: -1 }, result: 'It still works—she is eager, vocal, gripping—but she goes a little distant when your hand skips her stomach to get to her hip. She pulls your palm back and plants it there. “That too. If you want me, want the draft I’m in.”' },
          { label: 'Just hold her.', effects: { trust: 3, affection: 3 }, result: 'You fit together more closely than before; there is simply more of her against your chest. She notices. She doesn’t move away. “You’re warm,” she says, which is not what she means, and sleeps with one leg thrown over you, heavier than she remembers to be.' },
        ],
      },
    },
    {
      outfitName: 'Snug jeans, protesting apron',
      mobilityTag: 'Unhurried',
      mobility: 'She still walks everywhere, but she pauses at the top of the department stairs and blames the plot of the novel in her bag.',
      body: 'Softening. The word fits her mouth better than chubby, so she uses it and hopes. Her waist has thickened enough that the apron bow sits higher, as if her body is editing the uniform. Sitting, a small roll forms over the jeans and vanishes when she stands, mostly. Her upper arms have lost their sharpness; she notices when she waves at you from the counter and the wave has a follow-through. Her face is warmer, less winter. Breasts sway when she turns quickly. There is a mark on her stomach from the button, a red moon she presses with a thumb.',
      clothing: 'The jeans leave a red imprint by dusk and require a strategic inhale in the morning. She bought a size up “for laundry day” and has not put them on. The cardigan does not quite button over the chest. She wears it open and calls it a look.',
      talk: {
        line: '“I have a bruise from my own pants. If you laugh, I’ll put it in the acknowledgments as a villain. Also, hi. I missed your face. That’s disgusting of me.”',
        choices: [
          { label: 'Kiss the button-mark.', effects: { acceptance: 3, affection: 3, trust: 1 }, reply: 'She lifts her shirt in the stockroom like a dare and then can’t look at you. Your mouth on the red mark undoes her. “Okay,” she says, shaky. “Okay. The pants can lose.”' },
          { label: 'Bring a replacement—soft, larger, and full of honey.', effects: W(8, { dependency: 2, acceptance: 2 }), reply: 'She changes into the size-up in the bathroom and comes out furious at how good they feel. Then she eats. “I hate gifts that are correct,” she says, mouth full, eyes bright.' },
          { label: 'Suggest Stillpoint.', effects: { trust: 1, dependency: -2, acceptance: -1 }, reply: 'Her smile tightens. “You can want me smaller. Just don’t pretend it’s only concern.” She squeezes your hand to take the sting out, and does not take the capsule.' },
        ],
      },
      event: {
        title: 'The red moon',
        prose: 'She finds you on the library steps and, instead of hello, pulls the waistband of her jeans down an inch under her coat. A red crescent shines above it, angry from a day of sitting. “It has a plot,” she whispers. “Rising action.” People pass. She is mortified and thrilled to be showing you. The skin around the mark is softly padded, warmer than the air, a private weather.',
        choices: [
          { label: 'Cover her with your coat and take her to dinner.', effects: W(7, { affection: 3, acceptance: 2 }), reply: 'Dinner is noodles. She undoes the button under the table and her whole face changes. “I can think again,” she says. “Terrible. Now I want dessert.” You get dessert.' },
          { label: 'Tell her to wear the larger pair tomorrow.', effects: { trust: 2, acceptance: 2, affection: 1 }, reply: '“Bossy,” she says, but the next day the red moon is gone and she moves like someone who slept. She thanks you by reading you a paragraph with her feet in your lap.' },
        ],
      },
      intimacy: {
        opening: 'The button comes undone before you ask. Mira shivers when the waistband releases and her stomach eases out into your hand, a soft handful that wasn’t there at the start of term. She is wetter for the embarrassment than she wants analyzed. You press her into the mattress and there is more give everywhere—arms, breasts, the insides of her thighs starting to touch. She rocks up against you with a new, heavier rhythm.',
        choices: [
          { label: 'Keep a hand on the softness the whole time.', effects: { acceptance: 4, affection: 3, weight: 3, dependency: 1 }, result: 'She comes shaking, your palm spread over the little roll, and bites your shoulder to stay quiet. After, she puts your hand back there herself. “If you stop touching it I’ll think it was a gag,” she says. You don’t stop.' },
          { label: 'Pin her wrists and take her harder.', effects: { affection: 2, trust: 1, dependency: 1 }, result: 'Her wrists are still slim enough to hold in one hand. The contrast—delicate bones, softening body—makes her gasp. She meets you thrust for thrust until the headboard ticks. “Again,” she says, greedy, surprised. “I’m not made of paper anymore. Act like it.”' },
          { label: 'Just hold her.', effects: { trust: 3, affection: 2, acceptance: 2 }, result: 'You slide a hand under the open jeans and let her spill into it while you talk about nothing. She cries, briefly, from relief. “They hurt all day,” she admits. You rub the mark until the red fades and she sleeps half-dressed, button abandoned on the nightstand.' },
        ],
      },
    },
    {
      outfitName: 'Relaxed dress, retired cardigan',
      mobilityTag: 'Deliberate',
      mobility: 'She gives herself an extra second to stand and disguises it as gathering her books. The disguise is getting thin.',
      body: 'Soft and rounded, and no longer only after meals. Her belly is a distinct warm mound, pushable, resting on the waistband when she forgets to suck in—which she forgets more often around you. Hips have widened into chairs. Thighs spread when she sits and she tugs the dress down with a gesture that is becoming habit. Her face is rounder; the smile has more cheek to travel. Breasts hang a little lower, heavy enough to move when she trots across the street. A faint second chin appears when she looks down at her notes. She is pretty in a way that takes up space.',
      clothing: 'The cardigan has given up. She wears a soft dress in a size she paid for with tip money, and it skims most places and clings at the stomach after lunch. The old jeans are in a bag by the door, neither donated nor dead. The café apron ties, barely, and leaves a gap at the side she pins.',
      talk: {
        line: '“I wore a dress so I could pretend it was a choice and not a ceasefire. You can look. You’re going to look. I’d rather be in the room when you do it.”',
        choices: [
          { label: 'Look, and tell her what you like.', effects: { acceptance: 4, affection: 3 }, reply: 'You tell her the truth: the mound of her stomach under the cloth, the way the dress works for it. She covers her face and then doesn’t. “Disgusting,” she whispers, smiling. “Do it again with nouns.”' },
          { label: 'Suggest a bakery detour.', effects: W(8, { dependency: 2, affection: 2 }), reply: '“I had a whole personality planned,” she says, and follows you. She eats a bun on the walk and another at your table. The dress creases across her lap. She leaves it creased.' },
          { label: 'Offer your arm on the hill.', effects: { trust: 2, affection: 2 }, reply: 'She takes it after a theatrical sigh. Halfway up she is leaning more than the joke requires. At the top she says, “Don’t make it a thing,” while making it a thing, forehead on your shoulder.' },
        ],
      },
      event: {
        title: 'The low chair',
        prose: 'In the library she sits in a sagging armchair she has used for two years and, when it is time to leave, does not rise on the first try. The chair holds her hips. Panic flashes across her face, then fury at the panic. You are the only one who sees. She rocks once, breath catching, soft stomach pressing her thighs, and makes it up on the second try. For a moment she stands there, dress twisted, eyes bright. “If you tell anyone,” she says, “I’ll haunt your degree.”',
        choices: [
          { label: 'Offer a hand next time, lightly.', effects: { trust: 3, affection: 2, acceptance: 2 }, reply: '“Next time,” she repeats, which admits there will be one. She lets you keep her hand until the circulation desk. Her palm is damp. She does not let go first.' },
          { label: 'Tease her and buy her a consolation eclair.', effects: W(6, { affection: 1, trust: -1, dependency: 2 }), reply: '“You are a bad person,” she says, eating the eclair in the cloister. Then, smaller: “The chair is also a bad person. We’re even.” Sugar on the new curve of her lip. She kisses you so you have to share it.' },
        ],
      },
      intimacy: {
        opening: 'The dress comes off over her head and her hair crackles. Naked, Mira is frankly soft: a belly that settles into a gentle overhang when she sits astride you, breasts that pool slightly against your chest, thighs that spread and warm your hips. She reaches down to touch herself and her stomach rests against her wrist. The sound she makes is half shame, half thrill. “I can feel it move,” she says. “When I— when I do this. Stay with me.”',
        choices: [
          { label: 'Hold her belly while she rides you.', effects: { acceptance: 5, affection: 3, dependency: 2, weight: 3 }, result: 'You cradle the warm weight of it and she comes apart, grinding, the softness jolting in your hands. She collapses onto you after, heavier than you’re braced for, and you both laugh into the impact. “Rude,” she pants. “Perfect. Don’t you dare diet-voice me now.”' },
          { label: 'Lay her back and fuck her deep.', effects: { affection: 3, trust: 2, acceptance: 2 }, result: 'On her back the belly flattens into a plush rise that shakes with each thrust. She watches it, mesmerized, one hand pinning it so she can see you. Orgasm makes the whole soft middle of her tremble. She pulls you down into it, smothering, happy.' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 2, acceptance: 2 }, result: 'You curl behind her and fit your arm under the new weight of her breasts, palm on her stomach. She threads her fingers through yours. “It feels less like a problem here,” she says. You stay until the window goes blue.' },
        ],
      },
    },
    {
      outfitName: 'Plus-size knit, honest bra',
      mobilityTag: 'Short rests',
      mobility: 'Campus walks require a bench strategy. She knows three, and pretends she is only people-watching.',
      body: 'Pleasantly chubby, which is the phrase the shop uses and the phrase she is trying on. Her belly overhangs the waistband in a soft shelf when she slouches and remains a heavy curve when she doesn’t. Breasts fill her hands and then some; she crosses her arms under them without thinking. Thighs rub with a faint sound she pretends is her bag. A double chin gathers when she laughs and tucks her face toward you. Upper arms dimple. She is sweaty after a brisk block and annoyed that you can tell, and lovely while annoyed. Standing from low seats takes a hand on the table and a small private grunt.',
      clothing: 'She has crossed into plus-size denim and a knit dress that tells the truth about her stomach. The bra is new, stronger, and leaves grooves in her shoulders by evening. The café apron is an embarrassment; the ties vanish into her sides. She has started wearing a soft wrap over her uniform and calling it warmth.',
      talk: {
        line: '“I sweated through the wrap and I have opinions about the hill behind the library. None of them are academic. Feed me or flatter me. I’m collecting evidence for both.”',
        choices: [
          { label: 'Flatter her with specifics.', effects: { acceptance: 4, affection: 3 }, reply: 'You mention the shelf of her stomach, the way the knit holds her breasts, the flush on her throat. She squirms, pleased. “Evidence accepted,” she says, and climbs into your lap until the chair creaks and she freezes, then stays.' },
          { label: 'Feed her, properly.', effects: W(10, { dependency: 3, affection: 2, acceptance: 2 }), reply: 'You cook rice and eggs and she eats at the counter with her dress hiked so the waistband isn’t a character in the scene. She gets sleepy and heavy-eyed and fond. “This is the best thesis year of my life,” she mumbles.' },
          { label: 'Walk the hill slowly with her.', effects: { trust: 3, affection: 2, weight: 2 }, reply: 'You stop twice. She hates the stops and loves you for not narrating them. At the top she is flushed, chest working, and she kisses you with salt on her lip. “Again tomorrow,” she says, reckless. “Or noodles. Noodles are also a hill.”' },
        ],
      },
      event: {
        title: 'The apron string',
        prose: 'Closing time. The new girl has gone. Mira is in the stockroom trying to tie the apron and the strings are lost in the softness at her sides. She has been trying for a while; you can tell by the way she won’t look up. “It fit in September,” she says to the shelf of cups. Her voice frays. “I am being defeated by cotton.” When she turns, her eyes are wet and her belly, bare of the apron, pushes proudly against the black tee she wore underneath, the hem riding up.',
        choices: [
          { label: 'Find a longer tie and fasten it for her.', effects: { trust: 3, affection: 3, acceptance: 3 }, reply: 'You splice in a spare string and tie a bow she can live with. Your arms have to reach around more of her than either of you says. She leans back into you for one breath. “Okay. I can finish the shift. Don’t be nice about the crying or I’ll do it more.”' },
          { label: 'Tell her to skip the apron and eat something.', effects: W(8, { dependency: 2, acceptance: 2, affection: 1 }), reply: 'She abandons the apron on a sack of beans, locks the door, and eats a sandwich sitting on the prep table, belly free, tears drying into hunger. “This is unbecoming of a scholar,” she says, and takes another bite.' },
        ],
      },
      intimacy: {
        opening: 'She warns you that the bed is louder now. It is. When she climbs over you the mattress dips and her belly swings, warm, brushing your stomach before her mouth finds yours. Chubby everywhere you put a hand: the plush inside of her thigh, the roll at her side, breasts that spill out of your grip. She is self-conscious for a minute and then the minute ends, because your hands are not hesitant and she is tired of being the only one who knows her body.',
        choices: [
          { label: 'Let her ride and praise the weight.', effects: { acceptance: 5, affection: 3, dependency: 2, weight: 4 }, result: 'She braces on your chest and the impact of her is real. Every roll of her hips sends a wave through her stomach and breasts. You tell her. She comes with a sob of relief, grinding down, sweat between you. “Say it again when I can hear,” she pants, and you do, and she shudders through a second crest.' },
          { label: 'Take her from behind so she can hide her face.', effects: { affection: 2, trust: 2, acceptance: 1 }, result: 'She hides, then stops hiding, looking back. You hold the soft handles of her hips—actual handles now—and she pushes back with a grunt that would mortify her in daylight. The bed ticks the wall. She laughs into the pillow and comes shaking, thighs pressed tight.' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 3 }, result: 'Spooning takes arranging. You fit your knees behind hers and an arm over the shelf of her belly and she melts so completely you think she might be crying again. She isn’t. “I fit,” she says, amazed. “In the bed. In your arm. Sort of. Don’t move.”' },
        ],
      },
    },
    {
      outfitName: 'Stretch denim, strained tee',
      mobilityTag: 'Heavy steps',
      mobility: 'She budgets stairs. One flight is fine. Three require a landing and a lie about her shoe.',
      body: 'Plump, obviously, generously. Her belly is heavy enough that she cradles it with a forearm when she climbs, a gesture she has stopped noticing. Love handles spill around the stretch denim in a soft bracket. Her arms are thick and dimpled at the elbow; raising them to pin her hair takes a sway of her chest. The face is full, eyes a little smaller in the kindness of her cheeks, mouth still quick. She occupies a booth that once held her and her bag and now holds her. After a short walk her breath goes deep and audible. Sitting, her stomach rests in her lap. Standing, it precedes her by a second.',
      clothing: 'The plus denim cuts a red line into her hips by afternoon. She ordered stretch from a shop two districts over; the package is late, and today’s tee has ridden up to show a band of underbelly. A side seam on her cardigan—retrieved out of nostalgia—popped on the café stairs. She is safety-pinning her life together.',
      talk: {
        line: '“The seam gave up before I did. That’s the epigraph. I have a safety pin and a moral crisis and I want dumplings. You may choose the order.”',
        choices: [
          { label: 'Dumplings first.', effects: W(10, { affection: 3, dependency: 2, acceptance: 2 }), reply: 'She eats nine and steals your tenth and sits back with both hands on her stomach, dress pin abandoned. “Crisis postponed,” she says, blissful and round. “Walk me the long way so I can pretend we exercised.”' },
          { label: 'Fix the seam, then talk.', effects: { trust: 3, affection: 2, acceptance: 1 }, reply: 'You sew badly. She watches your hands and goes tender. “No one has mended anything of mine since I was small.” She kisses your knuckles. The cardigan will not survive the week. She wears it home anyway.' },
          { label: 'Tell her she is plump and beautiful.', effects: { acceptance: 4, affection: 2, trust: 1 }, reply: 'She tests the word plump like a hot plate. Then she nods. “Okay. From you it sounds like a place I can sit.” She sits, in your lap, carefully, and the chair complains for both of you.' },
        ],
      },
      event: {
        title: 'The pop',
        prose: 'It happens on the café stairs, in front of the owner and a man buying beans. A seam at Mira’s hip gives with a small, indecent sound. She freezes. The stairwell is very quiet. A pale strip of thigh shows through black thread, soft enough to press the gap wider as she shifts. She laughs, once, high and awful. The owner looks at the ceiling with professional mercy. Mira’s ears are crimson. Her belly heaves against the tee with the laugh she is trying to kill.',
        choices: [
          { label: 'Put your coat around her waist.', effects: { trust: 4, affection: 3, acceptance: 2 }, reply: 'You do it without a joke. She clutches the coat shut over the split and the swell of her hip and lets you walk her to the stockroom. Inside, she shakes. Then she kisses you like a person pulled out of traffic. “I need clothes that are on my side,” she says.' },
          { label: 'Make it ordinary: laugh with her, then feed her.', effects: W(6, { affection: 2, acceptance: 3, dependency: 1 }), reply: 'You laugh, kind, and the awfulness breaks. After close she eats leftover quiche standing in your coat, the ruined pants unzipped, belly out. “If the seam was the worst thing today,” she says, “today was actually fine.”' },
        ],
      },
      intimacy: {
        opening: 'She asks to keep a shirt on and then takes it off because it won’t stay down. Plump and naked, Mira is a generous sprawl: breasts splayed to the sides when she lies back, belly rising like a hill you can rest your cheek on, thighs wide enough that you settle between them in a valley of heat. She is shy about the way her stomach folds when she sits up, and then she sits up anyway to kiss you and the fold is right there, soft and damp at the crease. “I want you,” she says. “I also want to not have to strategize my own body. Help.”',
        choices: [
          { label: 'Love the weight directly.', effects: { acceptance: 5, affection: 4, dependency: 2, weight: 4 }, result: 'You kiss under the belly, where the skin is hottest, and she yelps and opens her legs wider. Fucking her means bracing, sinking into softness. She comes with her stomach quivering against your abdomen, a full-body ripple, and drags your hand to the crease to keep you there. “That. Again. Don’t tidy me.”' },
          { label: 'Take her on her side.', effects: { affection: 3, trust: 3, acceptance: 3 }, result: 'Sideways, she is easier and somehow more obscene, the plump stack of her belly and breasts shifting with each stroke. She reaches back to grip your thigh. The sounds are wet and close. She finishes with a long groan and laughs at the groan, delighted, face half-buried in the pillow.' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 3 }, result: 'You pile pillows until her middle is supported and then wrap around what the pillows don’t cover. There is a lot of her. She sighs so deeply the sigh moves you. “I thought you’d want the old shape,” she admits. You tighten your arm. She believes you, a little. It is a start that feels like a meal.' },
        ],
      },
    },
    {
      outfitName: 'Stretch only, apron retired',
      mobilityTag: 'Blocks, not miles',
      mobility: 'She can do the café and the corner shop. The university hill has become a taxi or a favor.',
      body: 'Fat, and the word is in the room now. Her belly dominates, round and low, parting every open layer, navel deep in the curve. It rests on her thighs when she sits and sways when she walks, a weight she manages with one hand underneath. Thighs are thick columns that press from knee to hip. Breasts rest on the upper swell of her stomach and pillow outward. A roll has formed at her back; bras are a negotiation. Her face is full and flushed easily, a soft chin present even when she lifts her head. She avoids stools entirely. Standing from your couch takes a rock, a grip on the table, and a grunt she no longer bothers to hide from you.',
      clothing: 'Nothing tailored survives. She lives in stretch knits and a black skirt with mercy in the waist. The café issued a larger apron; the ties still end too soon, and she has stopped pretending, working in a tee that clings and darkens under her breasts by the end of a shift. She owns two outfits that truly fit and washes them constantly.',
      talk: {
        line: '“Say it or don’t. Fat. I said it to the mirror and the mirror didn’t grant me a diploma. I’m hungry and my feet hurt and I want you to come closer than polite. That is the whole thesis.”',
        choices: [
          { label: 'Say it, tenderly, and mean the want.', effects: { acceptance: 5, affection: 4, trust: 2 }, reply: '“Fat,” you say, and “I want you.” She shuts her eyes. A tremor goes through the heavy curve of her stomach. “Okay,” she whispers. “Then you can have dinner with the woman you just named.”' },
          { label: 'Cook a dinner bigger than the apology.', effects: W(12, { dependency: 3, affection: 3, acceptance: 2 }), reply: 'She eats until she is glossy and slow, one arm draped over the crest of her belly. “I can’t believe I get to be this comfortable and this full,” she says. “Don’t ruin it with a moral.” You don’t.' },
          { label: 'Rub her feet and skip the word.', effects: { trust: 3, affection: 3, acceptance: 1 }, reply: 'You rub her feet in your lap while she pretends to read. The belly rises between her and the book. She peers over it at you. “Coward,” she says, fond. “Kind coward. The arch, yes, there.”' },
        ],
      },
      event: {
        title: 'Fat, out loud',
        prose: 'It is not a crisis so much as a room she decides to enter. You are doing dishes. She is at the table in the stretch skirt, belly bare because the tee lost, spoon in a jar of honey. “I’m fat,” she says to your back. The spoon clinks. “Not cute-soft. Fat. I got stuck in a booth today for a second and a child looked and I wanted to die and then I wanted dumplings. Both things were true. I need to know if you’re still walking toward me or touring me.”',
        choices: [
          { label: 'Walk toward her. Sit. Stay.', effects: { trust: 5, affection: 4, acceptance: 4 }, reply: 'You sit and put your forehead against the warm top of her belly, ridiculous and sincere. She laughs wetly and palms the back of your head. “That’s a disgusting answer,” she says. “I’ll take it. I’ll take you.”' },
          { label: 'Tell her you want her fatter.', effects: W(8, { dependency: 4, acceptance: 3, affection: 2, trust: 1 }), reply: 'The spoon stops. Her breath goes shallow, then deep. “You can’t just— in the kitchen—” She pulls you in by the shirt. “Say it again after I finish the honey. And then take me to bed before I think.”' },
        ],
      },
      intimacy: {
        opening: 'Sex has a logistics preface now. Pillows under her belly if she’s prone, a stable chair if she wants to be on top, your hand ready when she needs to turn. She is fat and luminous and done pretending the jiggle is a secret. When you push into her she gasps at the way her stomach surges against you, a heavy warm tide. Her thighs clamp with real force. “I can feel how much of me there is,” she says, wonder and filth in the same breath. “Use it. Use me. Don’t hover.”',
        choices: [
          { label: 'Fuck her deep and keep her belly in your hands.', effects: { acceptance: 5, affection: 4, dependency: 3, weight: 5 }, result: 'You gather what you can of that heavy curve and she wails, grateful, shaking the bed. Every thrust rolls through her. She comes hard enough to knock a book off the sill, then pulls you flat onto the soft mass of her, both of you panting. “Stay on me. I want the weight of you while I have all of this.”' },
          { label: 'Let her sit in your lap and grind.', effects: { affection: 3, trust: 2, acceptance: 4, dependency: 2 }, result: 'The chair is a risk. You brace it. She sinks onto you and the fat of her thighs spreads over your legs, belly pressed to your chest, immense and intimate. She can only roll, not bounce, and the roll is devastating. She comes biting your ear, sweat pooling under her breasts, laughing from joy.' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 4, acceptance: 3 }, result: 'You lie on your back and she settles along you, a heavy, trusting sprawl. Breathing is work for her and the work moves you. You stroke the long curve from breast to underbelly until she drools a little on your shoulder and doesn’t care. “This is the safest I’ve been,” she says. “Don’t make it small in the morning.”' },
        ],
      },
    },
    {
      outfitName: 'Custom skirt, open shirt',
      mobilityTag: 'Assisted distances',
      mobility: 'A few blocks with your arm, or a cab. She bumps hips on doorframes and has started turning sideways out of habit.',
      body: 'Massive. The word the tailor uses without cruelty. Her belly reaches her lap even when she tries to sit straight, and when she doesn’t it spreads to her sides in a slow collapse of weight. The underbelly is warm, a little damp by afternoon, sensitive where the skin folds. Thighs have merged visually with her hips; crossing her legs is a story she tells about last year. Upper arms are heavy; the top shelf is a production involving a stool and, often, you. Her face is moonlike, a soft double chin at rest, cheeks that blotch when she’s warm. She walks with a sway that knocks picture frames. Breath is a companion. She is still quick in the eyes, still Mira, and the quickness looks out from a body that has become a place.',
      clothing: 'A tailor who does not blink made her a skirt that starts under the breasts and opens a vent beneath the belly. It is already snug at the vent. Shirts are men’s, worn open, with a band beneath her breasts she tugs down a dozen times a day. The café has quietly moved her to inventory emails two shifts a week. She cried, then admitted the stairs were a kind of hate.',
      talk: {
        line: '“The tailor looked at me like a project worth doing. I tipped him so I wouldn’t cry. I still cried in the cab. Come here. I want your hands on the part the skirt is losing to.”',
        choices: [
          { label: 'Put your hands where the skirt is losing.', effects: { acceptance: 4, affection: 3, dependency: 2 }, reply: 'She guides you under the vent to the damp, heavy underside. Her eyes flutter. “That’s the worst of it and the best of it,” she says. “You don’t get to be delicate. I’m not a teacup. I’m a— stay.”' },
          { label: 'Order in a feast and eat it on the floor with her.', effects: W(12, { affection: 3, dependency: 3, acceptance: 2 }), reply: 'The floor is easier than the chairs tonight. She eats with concentration, belly pooling between her folded legs as far as they fold. After, she tips against you, massive and trusting. “I could live in this radius,” she says. “You, food, no stairs.”' },
          { label: 'Talk about the café shifts she gave up.', effects: { trust: 4, affection: 2 }, reply: 'She picks at the hem. “I love the place and it doesn’t fit through the door in me anymore. Or I don’t.” You listen. She ends up in your arms anyway, face hot, relieved to have said a true thing without a joke first.' },
        ],
      },
      event: {
        title: 'The frame',
        prose: 'Her apartment doorframe is old and slightly narrow. Tonight, coming home with groceries you are carrying, she turns sideways and still the wood kisses both her belly and her back. A picture in the hall tilts. She makes it through and stands in the entry breathing, one hand under the great curve of her stomach, eyes shut. There will be a bruise on the hip. You both know it. “I measured,” she says, absurdly, a scholar to the end. “I thought I had an inch. I don’t have an inch.”',
        choices: [
          { label: 'Promise to have the frame widened.', effects: { trust: 4, affection: 3, acceptance: 2, money: -40 }, reply: 'You spend the money without a speech. When the carpenter leaves, the gap looks like permission. Mira walks through twice, slowly, belly clearing by a finger. She cries in the good way and makes you dumplings that are mostly an excuse to keep you there.' },
          { label: 'Kiss the place the wood hit.', effects: { affection: 3, acceptance: 3, dependency: 2, weight: 4 }, reply: 'You kneel and kiss the reddening hip, then the belly that led her into the frame. She sways, hand in your hair. “That’s a ridiculous altar,” she whispers, and pulls you up into a kiss that tastes like the humiliation turning into heat.' },
        ],
      },
      intimacy: {
        opening: 'You have a system. It is tender and obscene. Mira lies back on a nest of pillows that keep her from being rolled by her own belly, and you stand or kneel, because climbing fully on top without thought would press the air out of her. She wants some of that weight. She tells you how much. Her body is massive under your hands, a landscape of give: breasts splayed, belly a planet, thighs that swallow your hips when you lean in. She is slippery at the folds. She is loud. “I can’t toss you,” she pants. “So you have to— yes— do it. I can still take you. I want to take you.”',
        choices: [
          { label: 'Give her your weight, carefully.', effects: { acceptance: 5, affection: 4, dependency: 3, trust: 2, weight: 4 }, result: 'You lower onto her until her belly surges up around your sides and she groans, full, pinned in the way she asked for. Short thrusts. Her hands scrabble at your back. She comes with a cry that breaks into laughter and then into tears, overwhelmed, holding you down so you can’t turn it into caution.' },
          { label: 'Use your mouth until her thighs shake.', effects: { affection: 4, acceptance: 4, trust: 2 }, result: 'You have to lift the belly gently out of the way and she nearly comes from that alone. Then your mouth. She can’t buck much; the pleasure rolls through her in slow seismic shudders. When she finishes she clamps your head with soft enormous thighs and apologizes and does not let go.' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 3, acceptance: 3 }, result: 'You lie at her side and sink into the heat of her, one arm barely cresting the belly. She guides your hand to the underfold and sighs when you don’t flinch at the damp. “This is the part I thought I’d have to hide forever,” she says. You keep your hand there until she sleeps, snoring softly, unashamed for once even in sleep.' },
        ],
      },
    },
    {
      outfitName: 'Bespoke panels, clinic drape',
      mobilityTag: 'Mostly seated',
      mobility: 'She prefers visits to outings. A block means stopping, one hand under the belly, your arm at her back. Standing is a negotiation she can still win.',
      body: 'Obese, and the mirror has stopped being metaphorical. She is wide enough that the café half-door is a farewell she already said. Her belly hangs in a deep apron over her lap and spreads to the sides of the reinforced chair, resting on her thighs when she settles. Breasts are heavy slopes melting toward the upper fold. Ankles swell by evening; she leaves the laces loose. Arms rest a little out from her body because they have to. Her face is very full, beautiful in a ripe way, eyes bright and slightly short of breath when she talks in long sentences. She can stand, with help: a rock, your hands, a gasp, the weight arriving in her knees. The old wooden chair is gone. It did not survive her.',
      clothing: 'Zips have lost. She wears clinic-cut panels that tie at the sides, soft and structural, and a drape of a coat when she must be seen from the street. The ties dig if she eats, which she does, so she loosens them and lets the panel gap over the underbelly. Shoes are wide and still ambitious by night. She talks about custom the way other people talk about rain: constant, practical, a little weary.',
      talk: {
        line: '“I stood today. That’s the headline. The subhead is that I sat back down and ate rice because standing is not a personality. Come sit where my stomach isn’t. That is a smaller and smaller country.”',
        choices: [
          { label: 'Sit close and let her spill onto you.', effects: { affection: 4, acceptance: 3, dependency: 2 }, reply: 'You wedge in beside her and the side of her belly overtakes your lap, warm as a laundry day. She watches your face, finds no flinch, and goes boneless with relief. “Hi,” she says, small, from inside the largeness.' },
          { label: 'Feed her rice and the next thing, and the next.', effects: W(14, { dependency: 4, affection: 3, acceptance: 2 }), reply: 'She eats steadily, loosening ties, breath deepening. By the end her eyes are glazed with comfort and she can only pat the vast top of her belly and say, “You did this with me. Don’t you dare look away now.”' },
          { label: 'Plan a day that asks nothing of her legs.', effects: { trust: 4, affection: 3 }, reply: 'You make a schedule of chair, bath, book, food, you. She cries at the kindness of a plan with no stairs in it. “I used to think rest was quitting,” she says. “Stay and I’ll consider new theories.”' },
        ],
      },
      event: {
        title: 'The chair gives up',
        prose: 'The wooden chair fails at lunch, not dramatically at first: a tick, a sigh, then a crack like a branch. Mira drops a few inches and stops, caught by the frame and by shock, belly surging up against the table edge. Rice scatters. She makes a sound you have never heard, small and animal. For a second she cannot get purchase; her arms are too soft, the angle wrong, her own weight seating her deeper in the wreck. You are there. It is ugly and intimate and she will remember the ceiling of that moment for a long time.',
        choices: [
          { label: 'Get her up, then get her a chair that deserves her.', effects: { trust: 5, affection: 4, acceptance: 3, money: -50 }, reply: 'You lift with your legs and a lot of murmured instruction. She is shaking. By evening a reinforced chair is in the room and she lowers herself into it like a person testing ice. It holds. She covers her face and laughs. “Buy it a drink,” she says. “It just met me.”' },
          { label: 'Hold her on the floor until the shame burns down.', effects: { trust: 4, affection: 4, acceptance: 4, dependency: 2 }, reply: 'You don’t haul her up at once. You kneel in the rice and put your arms around as much of her as you can. She sobs once, then eats a grain of rice off her thumb, absurd, alive. “Okay,” she says. “Okay. We’re on the floor. The floor is honest.”' },
        ],
      },
      intimacy: {
        opening: 'She wants you and she wants you not to injure either of you with optimism. You help her onto her side, which takes both of your strengths and a joke that goes breathless in the middle. Obese and aroused, she is a furnace: the fold under her belly slick, thighs a heavy gate, breasts stacked toward the mattress. You enter her from behind and she moans at the fullness and at the way her stomach surges forward, unsupported, enormous. “Hold it up,” she begs. “Hold me up. I can take the rest. I want the rest.”',
        choices: [
          { label: 'Hold her belly and take her slow.', effects: { acceptance: 5, affection: 4, dependency: 4, trust: 2, weight: 5 }, result: 'You cradle the hanging weight—both arms, and still a prayer—and thrust slow. She sobs with pleasure, the mass of her rippling. Orgasm is long, rolling, almost frightening in its depth. After, you ease her belly back to the pillows and she gropes for your hand. “I felt enormous,” she says. “I felt wanted. Don’t separate those.”' },
          { label: 'Let her lie back while you kneel between her thighs.', effects: { affection: 4, acceptance: 4, trust: 2 }, result: 'On her back she is a vista. You spread her with your palms and use your mouth, lifting folds with reverence and hunger. She can’t see you over herself and that undoes her more than the tongue. She comes crying your name, one arm flung over her eyes, the whole bed answering.' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 4 }, result: 'No sex, by her breathless request that becomes, five minutes later, a maybe, and then a no that is actually a rest. You oil the crease under her belly so it won’t chafe and she stares at the ceiling like a person being worshipped correctly. “Tomorrow,” she says, voice wrecked with fondness. “Tomorrow you can have me. Tonight finish the oil.”' },
        ],
      },
    },
    {
      outfitName: 'Laced panels, tailor at home',
      mobilityTag: 'Transferred',
      mobility: 'Standing is a two-person event she can still do once or twice a day. The apartment has been rearranged around the radius of her chair.',
      body: 'Super obese, and the apartment knows it. She lives in a reinforced loveseat that is mostly her. The belly is a vast soft shelf from the band of her breasts to mid-thigh, sloping off to both sides in rolls that stack when she leans. Her thighs are enormous, each one spreading across a cushion, the insides always touching, always warm. Arms rest away from her ribs; she can’t pin them flat. Her chin folds softly into her neck and her smile has become a small bright event in a full moon face. She can stand if you help: rocking, your shoulder, a gasp that is half laugh, the weight dropping into knees that complain. Walking is a shuffle to the bathroom and back, and she is proud of the shuffle in a way she mocks and means.',
      clothing: 'The tailor comes to her now. Clothing is laced panels, built on her body, loosened after every meal and relaced before sleep if she feels vain. Most afternoons she doesn’t. A sheet would do. She chooses color anyway—tea-brown, plum—because she refuses to become a medical object while she can still name a preference. Shoes are often theoretical.',
      talk: {
        line: '“I shuffled to the sink and back and I want a medal and also noodles. The tailor says hi. He also says the next panels need more panel. Kiss me before I pretend I don’t need help sitting up.”',
        choices: [
          { label: 'Kiss her, help her, stay.', effects: { affection: 4, trust: 3, dependency: 2, acceptance: 2 }, reply: 'The kiss is soft and breath-limited. Getting her more upright takes your forearm and her grit. She laughs when she arrives. “Victory,” she says, and pats the sea of her stomach. “Now the noodles. Victory is hungry.”' },
          { label: 'Bring the noodles and a second bowl.', effects: W(14, { dependency: 4, affection: 3, acceptance: 3 }), reply: 'She eats both, slower toward the end, a hand unable to cover the top of her belly and trying anyway. “I’m going to outgrow the loveseat,” she says, calm. “Be here when I do. I don’t want a stranger’s hands.”' },
          { label: 'Read to her until she sleeps.', effects: { trust: 3, affection: 4 }, reply: 'You read the novel she is too tired to hold up. She sleeps in pieces, waking to say “don’t stop” and to shift, with your help, a fold that aches. When she finally goes under, the room is all her breathing. You stay.' },
        ],
      },
      event: {
        title: 'The loveseat’s opinion',
        prose: 'A seam on the reinforced loveseat opens under her left thigh with a sound like a sigh. Mira goes very still, one hand on the vast belly, eyes on the little mouth of stuffing. “I knew,” she says. “I felt it yesterday and I didn’t want the day to be about it.” She cannot easily get off the wounded seat; standing is a production, and there is nowhere else in the room rated for her except the bed, which is a journey of six steps and your whole body. The apartment feels, briefly, like a problem with only one answer.',
        choices: [
          { label: 'Move her to the bed and order a real platform.', effects: { trust: 4, affection: 4, dependency: 3, acceptance: 3, money: -60 }, reply: 'The six steps take a long time and a lot of love. She collapses onto the bed, which also complains, and you put the order in while she catches up on air. “A platform,” she says. “Say it plainly. A bed for a woman my size. I want it in writing.”' },
          { label: 'Sit on the floor against her and make the day about something else.', effects: { affection: 4, acceptance: 3, trust: 3, weight: 6 }, reply: 'You feed her fruit by hand and tell her a stupid story about Helix’s lobby. She laughs, then winces as the laugh moves through her, then laughs again. “Okay,” she says. “The chair can be tomorrow. Today you’re here. That’s load-bearing.”' },
        ],
      },
      intimacy: {
        opening: 'The loveseat is too wounded and the bed is a labor, so you love her where she is, which is the truest sentence of the month. You kneel between thighs that dwarf your shoulders. Getting to her cunt means lifting a roll, then another, the heat astonishing, her hands resting on the upper planet of her belly because that is how far they comfortably go. She is super obese and shining with sweat and want. “I can’t thrust,” she says, plain. “I can squeeze. I can feel. Don’t you dare make a smaller woman out of your imagination while you’re in me.”',
        choices: [
          { label: 'Stay between her thighs and let her squeeze.', effects: { acceptance: 5, affection: 4, dependency: 4, trust: 2, weight: 4 }, result: 'You push in and she bears down with a strength the rest of her can’t spend on walking. The sensation is crushing and sweet. She comes in a slow, overwhelming wave, belly heaving, voice broken. You kiss what you can reach. She pets your hair with fingers that barely clear her chest. “Good,” she whispers. “Mine.”' },
          { label: 'Use your hands and mouth and keep eye contact when she can see you.', effects: { affection: 4, acceptance: 5, trust: 3 }, result: 'You climb up beside her more than once so she can see your face over the rise of herself, then go back down. The back and forth makes her cry. Pleasure stacks. When she comes she grabs your wrist hard enough to hurt and says your name like a thesis she finally proved.' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 4, dependency: 2 }, result: 'You wedge yourself along her side, half swallowed by softness, and breathe with her until the want turns into comfort without anyone losing. She is too much to hold and you hold the part you can. “This counts,” she says, fierce. “This is not a consolation prize. This is the thing.”' },
        ],
      },
    },
    {
      outfitName: 'Loom sling over a sheath',
      mobilityTag: 'Bed and lift',
      mobility: 'She moves from bed to loveseat with the sling’s micro-winch and your shoulder. Stairs are a rumor. The bathroom is the far country, and she still makes the pilgrimage.',
      body: 'Near-immobile. The phrase is clinical and she has made it hers by saying it first, chin up as far as the chin allows. Her body is a landscape that rarely changes postal codes: belly spreading across her lap and bulging toward both armrests, hips lost in the mass of her thighs, breasts splayed into the upper rolls. She can reposition with effort and the Loom sling, which she once called “just for hills” and now wears in the house. Her face is a flushed, beautiful moon above terraces of softness, eyes unchanged, witty, a little shy of being seen from across a room because across a room takes work. She gets short of breath when she laughs too hard, which is often when you are kind. The bed has a groove shaped like her. She fits it too well.',
      clothing: 'The sling is the outfit that matters: gravity-weave, gold-threaded because she refused the medical beige, taking weight so her ribs can do their job. Under it, a simple sheath that has to be changed with help. Ordinary clothes are a project she declines most days. When she wants to feel dressed she asks you to retie the sling “like you mean it” and paint her mouth.',
      talk: {
        line: '“I laughed at a line in the book and then I had to recover from the laugh like it was a sport. Worth it. Come put your cold hands on me. I’m too much surface and not enough you.”',
        choices: [
          { label: 'Warm your hands in her folds until she shivers.', effects: { acceptance: 4, affection: 4, dependency: 3, trust: 2 }, reply: 'She guides you, unembarrassed, to the places that ache: underbelly, the crease of a thigh, the soft shelf where a breast meets belly. “There. God. If you stop being brave I will assign you a chapter.” You don’t stop.' },
          { label: 'Feed her dinner in courses, slow.', effects: W(12, { dependency: 4, affection: 3, acceptance: 3 }), reply: 'Courses, because she asked to taste each thing. By the last one she is panting lightly, belly drum-tight and then, as it settles, even wider. She kisses your fingers clean. “I’m not sorry,” she says. “Write that down for my committee.”' },
          { label: 'Read, and turn the pages she can’t reach.', effects: { trust: 3, affection: 4 }, reply: 'You become her hands for the book. She becomes, gradually, asleep, mouth open, enormous and young and trusting. You mark the page. You check the sling. You stay until your own leg goes numb and you don’t mind.' },
        ],
      },
      event: {
        title: 'The widened door',
        prose: 'The carpenter finishes the bedroom door at noon. Mira watches from the loveseat, which has been dragged—by two neighbors you now owe wine—into the hall. She cannot pace with nerves, so the nerves stay in her hands, twisting the sling strap. When the new gap is revealed she is quiet. It is wide enough for her and the chair and a future she has not said out loud. “I thought I’d feel erased,” she says. “I feel… invited. That’s worse for my dignity and better for my life. Take me through it.”',
        choices: [
          { label: 'Take her through, slowly, like a procession.', effects: { trust: 4, affection: 4, acceptance: 4, dependency: 2 }, reply: 'It is a procession: sling, your shoulder, six shuffling steps, her belly brushing nothing at all. On the other side she laughs until she wheezes. “Again tomorrow,” she says, “so I remember the door is mine.”' },
          { label: 'Celebrate with a feast in the newly opened room.', effects: W(14, { affection: 3, dependency: 4, acceptance: 3 }), reply: 'You spread the feast on a table pulled up to her. She eats like a woman at her own banquet, which she is. Crumbs collect in the sling. She does not care. “If the door is invited,” she says, “so is the rest of me. All of it. More of it.”' },
        ],
      },
      intimacy: {
        opening: 'Intimacy is a moved chair and a negotiated angle. With the sling supporting the heaviest of her, Mira can be tipped back enough for you to kneel between her thighs, which rise on either side of you like warm walls. She is near-immobile and incandescently present. Her cunt is soft and swollen and easy to miss under the rolls if you are careless; you are not careless. She pants through the prep, one hand on the remote of the winch like a joke, the other in your hair. “I can’t chase you,” she says. “So come here and stay. I want to feel used and kept in the same hour.”',
        choices: [
          { label: 'Stay and give her exactly that.', effects: { acceptance: 5, affection: 5, dependency: 4, trust: 2, weight: 5 }, result: 'You fuck her in short, deep strokes while the sling holds what her core can’t. She wails, thank you tangled up in harder words, and comes so hard the winch ticks. After, you don’t pull away. You rest your cheek on the great inner thigh and she pets you, ruined and radiant. “Kept,” she repeats. “Yes. That one.”' },
          { label: 'Make her come with your mouth, unhurried.', effects: { affection: 4, acceptance: 5, trust: 3 }, result: 'It takes arranging and then it takes time, and the time is the point. She crests twice, the second one smaller and sweeter, tears at the corners of her eyes from effort and relief. “I can’t kick,” she laughs, hoarse. “Consider yourself unevicted.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 4, dependency: 2 }, result: 'You climb up, half onto the bed, half onto her, and she sighs at the living weight. The sling hums. You hold the side of her face and the side of her belly and she says, “This is my whole country.” You stay until the light goes and the laugh she attempts only makes her breathless in the gentlest way.' },
        ],
      },
    },
    {
      outfitName: 'Adaptive membrane',
      mobilityTag: 'Immobile',
      mobility: 'She does not stand. Turning, washing, and meals happen with you or not at all. The Loom membrane and the Helix platform are the architecture of her days.',
      body: 'Immobile, and still entirely herself. The bed is a wide Helix platform and Mira fills the heart of it, a vast soft expanse of belly rising higher than her knees, spreading so wide your arms do not meet when you try to gather her. Her thighs have joined the central mass and can still be distinguished when you lift a fold and she makes a helpless, wanting sound. Her arms are thick and short of reach; she can hold a book if you prop it, a fork if the tray rides the upper curve, your hand if you bring it to her chest. Her face is a small flushed moon above terraces of chin, hair spread because lifting it is work you do for her. She is dependent. She is also, mortifyingly, happier than she has ever been, and she will tell you so if you stay close enough to hear her over her own breathing.',
      clothing: 'The adaptive membrane is a Loom skin, breathable, split for care, sensor-dotted because Liora asked and Mira said yes to the data and to the feeling of being held by something that would not sigh and give up. It is the only thing that fits, and even it strains, glossy at the greatest curves. She asks you, some mornings, to open every split and let the air touch the damp places. Modesty has been replaced by preference. Her preference is you, the membrane, and not being rushed.',
      talk: {
        line: '“I finished a page. You’ll have to take the credit for holding the book. I’m going to say something disgustingly sincere: I like my life. It’s huge and it’s mine and I need you to wash my hair. In that order.”',
        choices: [
          { label: 'Wash her hair and listen.', effects: { trust: 4, affection: 5, acceptance: 3, dependency: 2 }, reply: 'You wash her hair in a basin, careful with her neck. She talks about the page, then about the way your hands feel, then about nothing. When you kiss her forehead she smiles with her whole moon face. “Sincere was correct,” she says. “Write it in the margin.”' },
          { label: 'Feed her until she is glazed and wordless.', effects: W(16, { dependency: 5, affection: 4, acceptance: 4 }), reply: 'Tray after tray on the high curve of her. She eats with devotion, breath thickening, eyes on you. At the end she can only hum. A hand pats blindly for you and lands on her own breast. You take it anyway. She squeezes. That is a speech.' },
          { label: 'Read her the sincere thing back.', effects: { affection: 4, trust: 3, acceptance: 3 }, reply: 'You repeat it. She cries without enough breath to make it dramatic, which makes it worse and better. “Good,” she whispers. “Don’t turn me into a tragedy. I’m a woman in a bed who loves you and wants dinner after this.”' },
        ],
      },
      event: {
        title: 'The platform',
        prose: 'Helix installs the platform on a Tuesday while Mira directs from a temporary sling like a queen in exile, which is to say she is terrified and hiding it under vocabulary. When they transfer her—the winch, your arms, a tech who has the decency to look at her face—she settles into the new center and the gel contours sigh and hold. The room rearranges itself around a fact. She tests the splits in the membrane with her fingers, cannot reach the far ones, and looks at you with naked hope and naked fear. “Stay the night,” she says. “Not as staff. As the person who knows which fold hurts and which one is only shy.”',
        choices: [
          { label: 'Stay. Learn the platform. Learn her.', effects: { trust: 5, affection: 5, dependency: 4, acceptance: 4 }, reply: 'You stay. In the dark she tells you where it hurts and where she wants pressure and where she wants a kiss. By morning you can turn her a few degrees without making her gasp. She calls that a love letter. She is not wrong.' },
          { label: 'Stay, and celebrate with a long, careful feast.', effects: W(18, { affection: 4, dependency: 5, acceptance: 4, trust: 2 }), reply: 'You stay and you feed her until the new platform has a history. She moans at the fullness, at the gel holding what she has become, at your voice. “More life,” she says, sticky and shining. “That’s all I meant. More life, with you in it.”' },
        ],
      },
      intimacy: {
        opening: 'You ask, because asking is the sex. She says yes with her eyes and with a small squeeze of your fingers, the reach of which is its own intimacy. The membrane opens along the splits. Under it she is immense, damp, fragrant with heat and clean skin, every fold a place that has not been touched unless you touched it. You cannot lay on her. You can lay between, you can climb beside, you can put your mouth where she nods. She is an immobile blob of a woman and she is looking at you like you invented weather. “I want to feel you inside,” she says, clear. “And I want to feel my whole body answer, since it can’t do much else. Give me that.”',
        choices: [
          { label: 'Enter her and let her answer.', effects: { acceptance: 6, affection: 5, dependency: 4, trust: 3, weight: 6 }, result: 'You work in slowly, one hand sunk in the hot fold of her thigh, and she answers everywhere: a ripple through the belly, a gasp that becomes a moan, fingers tightening. She can’t move to meet you. She doesn’t have to. The orgasm arrives like a tide under the skin, vast, and she cries through it, laughing at the end. “I felt all of me,” she says. “Do you understand how rare that is.”' },
          { label: 'Spend an hour on the places only you know.', effects: { affection: 5, acceptance: 5, trust: 4, dependency: 3 }, result: 'You map her: the shy crease, the underside, the heavy breast, the lip of her cunt. She directs you with words and with breath. Two orgasms, one almost accidental from the underbelly alone, leave her weeping and radiant. “I’m not gone,” she says. “I’m here. I’m so here. Don’t you dare treat this like an ending.”' },
          { label: 'Just hold what you can.', effects: { trust: 5, affection: 5, acceptance: 5, dependency: 3 }, result: 'You lie along the high warm side of her, membrane open, your arm across a fraction of her belly, your face near her face. She turns, with effort, enough to kiss your nose. “This,” she says, “is filthy and holy and mine.” You stay while she eats a late spoon of honey from your hand and falls asleep mid-laugh, enormous, safe, still gaining.' },
        ],
      },
    },
  ],
  dates: [
    {
      id: 'shelf',
      title: 'After close at Second Shelf',
      cost: 10,
      blurb: 'The café is hers after ten. So are the pastries no one paid for.',
      start: 'a',
      locked: (w) => (w.stage > 9 ? 'The stairs and the half-door have retired her from closing. She does inventory from home now.' : null),
      nodes: {
        a: {
          prose: ({ woman }) => {
            const s = woman.stage;
            const body = s >= 7
              ? 'She meets you already in the stretch tee, apron abandoned, belly resting on the prep table when she leans to count cups. The lean is a commitment.'
              : s >= 4
              ? 'The apron is pinned at her side and her dress creases under the belly when she hops up to sit on the prep table, which she does with a bounce and a wince.'
              : 'She is a flick of cardigan and ink, locking the door with her hip, already sliding you the tray of what the day didn’t sell.';
            return `Second Shelf after close smells like orange peel and warm metal. ${body} “Legally abandoned,” Mira says. “Morally a trap. Sit.”`;
          },
          choices: [
            { label: 'Eat the abandoned tray with her.', next: 'b', effects: { weight: 12, affection: 2, dependency: 2, hunger: -20 } },
            { label: 'Help her close properly, food second.', next: 'c', effects: { trust: 2, affection: 2, weight: 4 } },
            { label: 'Kiss her against the counter first.', next: 'd', effects: { affection: 3, acceptance: 1 } },
          ],
        },
        b: {
          end: true,
          prose: ({ woman }) => woman.stage >= 6
            ? 'You eat until the tray is a crime scene. She unties whatever is still tied and lets her stomach spread against the steel, groaning happily. “If my advisor could see the methodology,” she says, and licks jam off your thumb, plump and shining in the counter light.'
            : 'The tray vanishes between you. She gets loopy on sugar and leans her head on your shoulder, a light or not-so-light weight, and confesses she saves the corner stool even on nights you don’t come. You walk her home the long way.',
        },
        c: {
          end: true,
          prose: ({ woman }) => woman.stage >= 5
            ? 'Closing takes longer. She needs a stool to reach the high cups and a minute after the trash run, hand under her belly, pretending to check a receipt. You don’t narrate it. She thanks you by splitting a final tart on the walk, softer against your side than she used to be.'
            : 'You fall into an easy choreography, cups and receipts and her hip bumping yours. She rewards the virtue with one tart, then a second “for the walk,” and kisses you at the corner like a dare she has researched.',
        },
        d: {
          end: true,
          prose: ({ woman }) => woman.stage >= 7
            ? 'The kiss becomes her pressed between you and the counter, the give of her belly and breasts overwhelming the space. She laughs into your mouth when a cup tips. “Take me home,” she says, flushed, “before I try to be impressive on a prep table that has opinions.”'
            : 'She tastes like sugar and nerves. The kiss is brief and then not. She hops down, straightens a cardigan or a dress that is doing its best, and says, “Okay. That was data. I need more data. And possibly the last eclair.”',
        },
      },
    },
    {
      id: 'library',
      title: 'The late carrel',
      cost: 8,
      blurb: 'A library night that is supposed to be about her chapter.',
      start: 'a',
      locked: (w) => (w.stage > 7 ? 'The library chairs and the walks between them have become a kind of no.' : null),
      nodes: {
        a: {
          prose: ({ woman }) => {
            const s = woman.stage;
            const sit = s >= 5
              ? 'She lowers herself into the carrel chair with care and still overflows the sides a little, notebook balanced on the shelf of her stomach.'
              : s >= 3
              ? 'She sits sideways so the button of her jeans doesn’t argue with the desk, one knee against yours.'
              : 'She tucks into the carrel like a footnote, all elbows and whisper.';
            return `The library at nine is a held breath. ${sit} “If we get caught,” she whispers, “I’m blaming your face.”`;
          },
          choices: [
            { label: 'Actually help with the chapter.', next: 'b', effects: { trust: 3, affection: 2 } },
            { label: 'Sneak in sweets and a heavier kind of help.', next: 'c', effects: { weight: 10, dependency: 2, affection: 2, acceptance: 1, hunger: -12 } },
          ],
        },
        b: {
          end: true,
          prose: 'You work. She is brilliant and mean to her own sentences and, somewhere in hour two, her foot hooks your ankle and stays. You walk her to the stairwell. The kiss there tastes like graphite. “Come tomorrow,” she says. “I write better when I’m slightly ruined.”',
        },
        c: {
          end: true,
          prose: ({ woman }) => woman.stage >= 5
            ? 'The sweets vanish. She gives up on elegant posture and lets her belly press the underside of the desk, eyes half-lidded, still arguing with a paragraph. A librarian passes and Mira only smiles, chubby and unbothered, your hand hidden under the desk against her thigh.'
            : 'You feed her honey candies one by one while she edits. By the end her focus is sugar-bright and she is leaning, warm, into your side. “This is corruption,” she whispers, delighted. “Cite it.”',
        },
      },
    },
    {
      id: 'bakery',
      title: 'The proofing room',
      cost: 16,
      blurb: 'A baker she knows leaves the back door kind.',
      start: 'a',
      locked: (w) => (w.stage > 10 ? 'The back step and the heat are too much. She asks the baker to send a box instead.' : null),
      nodes: {
        a: {
          prose: ({ woman }) => {
            const s = woman.stage;
            const heat = s >= 8
              ? 'Heat finds every fold. She stands, then sits on a flour sack that complains, belly glistening, and fans herself with a tray liner.'
              : s >= 4
              ? 'The warmth makes her dress cling. She is pink to the throat and visibly pleased about the trays.'
              : 'She darts between racks, delighted, a slim thief in a good coat.';
            return `The proofing room is yeast and butter and a secret. ${heat} “They’ll throw these out,” she says. “I refuse the waste. I’m a humanitarian.”`;
          },
          choices: [
            { label: 'Be humanitarians together.', next: 'b', effects: { weight: 16, affection: 3, dependency: 2, hunger: -24, acceptance: 1 } },
            { label: 'Steal one each and walk by the river.', next: 'c', effects: { weight: 6, affection: 3, trust: 2 } },
          ],
        },
        b: {
          end: true,
          prose: ({ woman }) => woman.stage >= 6
            ? 'She eats until she has to lean back on the sack, both hands failing to span her stomach, flour on the upper curve. You wipe her mouth. She looks drugged with butter and fondness. “Take me home before I propose to a bread rack,” she says. The walk is slow. She holds your arm the whole way.'
            : 'You lose track of the count. She gets giggly and brave and kisses you with butter on her tongue, then makes you smuggle a loaf out under your coat like a farce.',
        },
        c: {
          end: true,
          prose: 'The river path is dark and kind. She talks about a novel where no one finishes their meal and calls it unrealistic. At her door she lingers, softer at the edges than the walk started, and says, “Next time we stay for the racks.”',
        },
      },
    },
    {
      id: 'fitting',
      title: 'A room with mirrors',
      cost: 22,
      blurb: 'Clothes that tell the truth, and a mirror that does too.',
      start: 'a',
      locked: (w) => {
        if (w.stage < 3) return 'Nothing she owns is fighting her yet. Give it time, or a few more tarts.';
        if (w.stage > 10) return 'She fits at home now. The shop mirrors are a commute she won’t make.';
        return null;
      },
      nodes: {
        a: {
          prose: ({ woman }) => `The shop is all warm bulbs and curtains. Mira eyes the mirror like it owes her money. Stage sits on her whether she names it or not: ${woman.stage >= 8 ? 'she needs the wide bench and still overflows it, breathing, waiting for you to choose a drape that won’t lose.' : woman.stage >= 5 ? 'the plus rack is the honest rack, and she touches a knit with reluctant want.' : 'she is between sizes, a red mark at the waist, daring the mirror to blink first.'} “If you laugh I become a ghost,” she says. “A well-read ghost.”`,
          choices: [
            { label: 'Choose the thing that fits the body she has.', next: 'b', effects: { acceptance: 6, affection: 3, trust: 2, money: -10 } },
            { label: 'Choose the thing that almost fits, on purpose.', next: 'c', effects: { acceptance: 1, dependency: 3, affection: 1, weight: 4, trust: -1 } },
          ],
        },
        b: {
          end: true,
          prose: 'The right size looks like relief. She turns, or shifts, and the cloth follows instead of fighting. In the mirror her eyes go wet. “I look like I meant to arrive,” she says. You pay the difference. She wears it out and holds your hand with a grip that means try and take this day back.',
        },
        c: {
          end: true,
          prose: 'The almost-fit is a thrill and a trap. Seams complain when she sits on the cab ride home. She is flushed, bothered, a little hurt and a little lit up. “You’re terrible,” she says, squirming. “Come upstairs and take it off me before it does something irreversible. And bring snacks. The irreversible kind.”',
        },
      },
    },
    {
      id: 'couch',
      title: 'A film and a blanket',
      cost: 0,
      blurb: 'Her place, your lap, something with subtitles you will not finish.',
      start: 'a',
      locked: () => null,
      nodes: {
        a: {
          prose: ({ woman }) => {
            const s = woman.stage;
            const room = s >= 11
              ? 'You barely pretend there is a film. She is the platform and the evening; you sit against the high warm side of her with a bowl she can reach if you hold it.'
              : s >= 8
              ? 'The couch is a negotiation she wins by taking most of it. You get the corner and a lapful of her legs, heavy and good.'
              : s >= 4
              ? 'She claims the middle cushion and then some. The blanket does heroic work over a belly that insists on being in the scene.'
              : 'She tucks under your arm with room to spare, cold feet, a bowl of something sweet balanced on a stomach that barely makes a hill.';
            return `Her apartment smells like paper and orange cleaner. ${room} “If it’s bad we’ll talk,” she says. “If it’s good we’ll also talk. I’m a problem.”`;
          },
          choices: [
            { label: 'Ignore the film and feed her bites.', next: 'b', effects: { weight: 8, affection: 3, dependency: 2, hunger: -10 } },
            { label: 'Actually watch, and rub the place she aches.', next: 'c', effects: { trust: 3, affection: 3, acceptance: 2 } },
          ],
        },
        b: {
          end: true,
          prose: ({ woman }) => woman.stage >= 9
            ? 'Bites become a bowl, then another. She eats with her eyes on the screen and her attention on you, sighing when a fold stops complaining. By the credits she is glazed and enormous against you, and the night has nowhere else it needs to be.'
            : 'You make it through forty minutes and most of the snacks. She ends up drowsing, mouth sweet, a hand possessive on your shirt. “Stay,” she says, already winning.',
        },
        c: {
          end: true,
          prose: ({ woman }) => woman.stage >= 7
            ? 'You work the heel of your hand where her belly folds, slow, until she makes a sound the film does not deserve. She kisses you during a quiet scene and misses the plot on purpose. “Leave it,” she murmurs. “This is the better scene.”'
            : 'Your hand finds the small of her back, or the new softness above her waistband, and she pretends to watch while her ears go red. When the credits roll she climbs into your lap and the rest of the night is unsubtitled.',
        },
      },
    },
    {
      id: 'platform-night',
      title: 'Night on the platform',
      cost: 0,
      blurb: 'A late-stage evening that does not ask her to be portable.',
      start: 'a',
      locked: (w) => (w.stage < 10 ? 'She is not housebound. Ask her out into the city while she still wants the city.' : null),
      nodes: {
        a: {
          prose: 'You bring the city to her in pieces: a flower she can smell, a story from the stairwell you widened, food in containers that fit the tray across her. The platform holds. The membrane is open at her request. She watches you move around the room with an affection so bare it is almost hard to look at. “Report,” she says. “Then feed your report.”',
          choices: [
            { label: 'Feed her the whole report.', next: 'b', effects: { weight: 18, dependency: 3, affection: 4, acceptance: 3, hunger: -25 } },
            { label: 'Wash her, change the membrane, stay close.', next: 'c', effects: { trust: 4, affection: 4, acceptance: 3, dependency: 2 } },
          ],
        },
        b: {
          end: true,
          prose: 'She eats until speech goes simple. You wipe her mouth and the upper curve of her, and she follows your wrist with her eyes. “I felt every bite land,” she says, awed, huge, kind. “Stay on my left. I sleep better when the room has you in it.”',
        },
        c: {
          end: true,
          prose: 'Care is the date. You wash what she cannot reach, powder the deep folds, settle the membrane so nothing pinches. She gives instructions and then praise and then a kiss that misses and lands on your cheek because turning is work. “Romance,” she says, dry and wrecked. “Don’t you dare call it less.”',
        },
      },
    },
  ],
};
