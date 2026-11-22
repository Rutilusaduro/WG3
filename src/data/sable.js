const W = (weight, extra = {}) => ({ weight, hunger: -8, ...extra });

export const sable = {
  id: 'sable',
  name: 'Sable Voss',
  age: 31,
  role: 'Owner of the Low Orbit club',
  hairStyle: 'undercut',
  accent: '#e2b15a',
  hair: '#1b1b1d',
  skin: '#e7b89a',
  blush: '#c46a62',
  baseWeight: 148,
  startStage: 3,
  metabolism: 4,
  activity: (stage) => (stage < 6 ? 1 : 1.12),
  start: { affection: 24, trust: 20, dependency: 12, acceptance: 42 },
  bio: 'Sable built Low Orbit out of a bankrupt lounge and a talent for making people feel chosen. She is already curvy on purpose: hips she dresses for, a laugh that fills a booth, gold at her throat. She treats appetite as hospitality and her own growing body as a long performance she intends to enjoy. She likes you because you don’t ask her to be less, and because you look like you might help her become more.',
  refuseStrong: 'She flicks the vial back into your palm, smiling. “Darling, I don’t refuse the destination. I refuse a cheap door. Buy me dinner first or bring me the real thing.”',
  refuseExtreme: '“Not yet,” she says, and the yet is a velvet rope. “I want the room watching when I cross that line. Earn the spectacle.”',
  reactions: {
    pastry: [
      'She eats the tart in two bites and licks gold-dusted sugar off her thumb. “Sweet. Provincial. I’ll allow it.”',
      'The tart is a prelude. She taps her stomach, already rounding over the silk, and says, “Again, if you’re trying to impress me.”',
      'You set it on the high curve of her and she eats without looking, a queen at a private service. “More ceremony next time. More cream.”',
    ],
    honey: [
      'She drinks from the jar like a dare. “Street honey. I serve worse to men with better watches.”',
      'Honey shines on her mouth. She pulls you in by the collar so you have to taste it off her. “That’s the tax.”',
      'She lets it drip and doesn’t chase the drip down her chest. That’s your job. She watches you do it, huge and pleased.',
    ],
    feast: [
      '“A board,” she says, delighted. “Finally someone courts me in my native language.” She eats the best parts first and offers you the second best.',
      'She clears half before the ice melts. A hand rests on the soft shelf of her belly, proprietary. “Tell the kitchen this is a standing order.”',
      'The board is a landscape on a tray across her. She finishes it, breath deep, and rings a glass she can’t quite reach without you. “Encore.”',
    ],
    still: [
      'She examines the capsule as if it insulted her mother. Then she takes it. “A intermission. Don’t get used to directing me.”',
      '“Fine. A pause in the music,” she says. “The body stays. You’re not putting me back in last year’s dress.”',
      'She swallows it with wine. “If this makes me smaller I’ll have you thrown out. If it only slows the encore, you may live.”',
    ],
    nectar: [
      'Nectar-9 in a coupe, because she has standards. “Oh, that’s filthy,” she purrs. “Pour another before I decide I like you too much.”',
      'Two coupes and her appetite goes theatrical. She orders fries to the VIP booth and eats them with her ring hand, unashamed.',
      'You hold the glass. She drinks, throat working, the great rise of her belly answering. “Leave the bottle,” she says. “And you.”',
    ],
    spike: [
      'The ampoule delights her. Within the hour she is in the club kitchen, eating standing up, laughing at her own hunger. “Look what you did. Take responsibility.”',
      'She grips the booth and looks at you like weather. “Bring food or be food-adjacent. I am not joking and I am not waiting.”',
      'Hunger strips the performance down to the gold. She opens her mouth for what you bring and moans, honest, when it hits. “Again. Don’t make me polite.”',
    ],
    keel: [
      'She hikes the silk and shows you the exact place: the soft hip she is proud of. “Stick it. I intend to keep my investments.”',
      'The patch vanishes into a curve. She pats it. “Good. I was leaking time. Now I’m keeping it.”',
      'Both hands to smooth it along a side you can’t span. She watches, heavy-lidded. “Find skin. Any skin. I’m mostly result now.”',
    ],
    cradle: [
      'She treats the cradle like a new room in the club. “Straps looser. Tone lower. And you, where I can see you being awed.” She eats like a woman being paid to.',
      'The rig creaks. She laughs, delighted, overflowing the diagram. “Note the failure of the diagram,” she tells no one. “Note that I like it.”',
      'Extended straps, her body a throne in the cradle. She doesn’t cover her face. “This is the most honest appliance I own. Don’t stop the line.”',
    ],
    bloom: [
      '“Finally,” she says, and offers an arm already soft at the undercurve. “If it works, we throw a party. If it works too well, we throw a bigger one.”',
      'The serum goes in and she exhales like a toast. “I want to feel it take. Sit on the bed and watch me become a problem.”',
      'You dose her where she holds court. She can’t offer an arm easily; you come to her. “Good,” she murmurs as it blooms. “Let them invent a new door.”',
    ],
    loom: [
      '“Measure me like you mean to dress a parade,” she tells the loft, and tips the tailor with a smile that has ended careers.',
      'She commissions two sizes ahead and winks at you. “Optimism. Also strategy.”',
      'They build on her body because there is no other way. She chooses black and gold. “If I can’t walk the room, the room can walk to a well-dressed event.”',
    ],
    sling: [
      'She tries the sling, snorts, and then goes quiet at the relief. “Hideous. Do it in gold. I’ll call it jewelry and I’ll be right.”',
      'Gold hardware, her idea. She lifts her arms as far as they go, which is not far, and looks imperial. “Tighter. I like a plot.”',
      'Clipping her in is a dressing ritual. “This is how a woman who cannot stand still wears power,” she says. “Don’t you dare look sorry.”',
    ],
    aerosol: [
      'She smells the apartment and grins. “You’re feeding the air. I knew you were extravagant. I’m staying the weekend.”',
      '“Everyone who sleeps here gets a little greedier? Darling, that’s just my hospitality with extra steps.”',
      'She inhales, vast on the bed you reinforced for visits. “Good. Let the room be an accomplice. I prefer a full cast.”',
    ],
  },
  texts: {
    early: [
      'Booth’s yours if you arrive before the sad men do. Wear something I can grab.',
      'I ate the staff meal and then my own dinner. This is called leadership.',
      'A dress split and I made it couture. Come see the bruise. It’s artistic.',
      'Don’t bring flowers. Bring something with calories and a spine.',
    ],
    mid: [
      'The dance floor and I are in negotiations. I am winning on a technicality called your lap.',
      'I ordered a dress for the woman I’m about to be. She’s expensive. You’ll like her.',
      'Come hungry or don’t come. Actually come either way. I’ll fix you.',
      'A photographer flinched. I did not. Tell me you’re proud or tell me you’re hard. Both accepted.',
    ],
    late: [
      'I am receiving. That is the entire invitation. Bring food and your best version.',
      'The stairs and I have divorced. The back room gets the better settlement.',
      'If you are late I will start without you and you will hear about every bite.',
      'Gold sling, black drape, no patience. Come worship correctly.',
    ],
  },
  ambients: {
    early: [
      {
        title: 'Velvet rope',
        prose: 'From the street you see Sable turn a regular away with a smile that still gets him to thank her. Then she leans on the host stand and the lean has a new softness at the waist, silk pulling. She looks toward the dark window as if she knows you are there.',
        choices: [
          { label: 'Go in and let her seat you.', effects: { affection: 2, weight: 4 }, reply: 'She puts you in the booth and slides in after, hip first. “Observed,” she says. “Now feed the observation.”' },
          { label: 'Send a bottle instead of yourself.', effects: { trust: -1, affection: 1 }, reply: 'She drinks it and texts: Cowardice, vintage. Come tomorrow or I’ll spend the rest on someone less interesting.' },
        ],
      },
      {
        title: 'After hours',
        prose: 'A voice note, club-quiet: ice, her laugh, the low sound of her sitting down harder than she meant to. “The booth and I are collaborating,” she says. “Don’t make me say the rest into a microphone.”',
      },
    ],
    mid: [
      {
        title: 'Commission',
        prose: 'A photo: Sable in a half-pinned dress, belly and breasts marked with tailor’s chalk, grin feral. The caption is one word. Soon.',
        choices: [
          { label: 'Tell her soon isn’t fast enough.', effects: { weight: 6, dependency: 2, affection: 2, acceptance: 2 }, reply: 'She shows up later with chalk still on her skin and an appetite that ruins your evening plans in the correct way.' },
          { label: 'Pay the rush fee.', effects: { money: -30, affection: 3, acceptance: 2 }, reply: 'The dress arrives in two days. She wears it once, splits a seam on purpose during the second song, and bows.' },
        ],
      },
      {
        title: 'Staff meal',
        prose: 'Her head bartender mentions, carefully, that the boss has started taking the family meal twice. He says it like a weather report. Sable, across the room, raises a glass at you as if she heard through the bass.',
      },
    ],
    late: [
      {
        title: 'Receiving hours',
        prose: 'The club’s social channels list a new policy in Sable’s voice: the owner receives friends in the back room after midnight. No photos unless she offers. Food welcome. Pity not admitted.',
        choices: [
          { label: 'Arrive with a feast and no pity.', effects: { weight: 12, affection: 3, dependency: 2, acceptance: 2 }, reply: 'She has the door shut behind you and eats like a private show. “This is the policy working,” she says, immense, gold glinting.' },
          { label: 'Arrive with your hands and nothing to prove.', effects: { trust: 3, affection: 3 }, reply: 'You bring no spectacle. She is suspicious, then visibly moved, then covers it by ordering you to rub the place the sling bites. You do. She keeps you.' },
        ],
      },
      {
        title: 'The stair divorce',
        prose: 'A carpenter’s invoice, photographed, captioned: alimony. She has had the back room widened. The stairs are roped off with a silk cord, which is the pettiest, most Sable solution in the district.',
      },
    ],
  },
  overnight(woman, day) {
    const early = [
      'She closed the club and ate the untouched oyster tray rather than “insult the ocean.”',
      'A side zip left a mark. She showed the mark to the mirror and smiled.',
      'She walked the floor all night and felt powerful and a little winded.',
      'Someone called her thick. She put them on the list. The good list.',
    ];
    const mid = [
      'She stopped dancing at midnight and held court instead. The court brought snacks.',
      'A custom dress already pulls at the hip. She called that punctuality.',
      'She took the freight lift and tipped the operator to forget it.',
      'Dinner was a tasting menu. She added a second tasting on the way home.',
    ];
    const late = [
      'She received three visitors and ate their gifts. Hospitality, she claims.',
      'The sling stayed on through a nap that became a night.',
      'She dictated the week’s playlist from the banquette and did not stand for the staff meeting.',
      'A photographer was admitted, shot upward, and left looking converted.',
    ];
    const pool = woman.stage >= 9 ? late : woman.stage >= 5 ? mid : early;
    return pool[day % pool.length];
  },
  tableLine(woman) {
    const s = woman.stage;
    if (s >= 9) return 'Sable arrives last, which is a kind of entrance even now: gold sling, black drape, your arm doing quiet work. She takes the head and overflows it, magnificent, and tells the server the wine list is a suggestion.';
    if (s >= 5) return 'Sable sits as if the chair applied for the job. Silk stretches over a proud belly and serious hips. She orders for the table without looking up, then looks at you like the order included you.';
    return 'Sable is already there, gold at her throat, dress winning, one arm along the booth behind the space she saved you. “You’re late,” she lies, pleased.';
  },
  stages: [
    {
      outfitName: 'Black column, old life',
      mobilityTag: 'Floor-ready',
      mobility: 'She can work a room until close and still take the stairs in heels.',
      body: 'This is the Sable she keeps in a photograph behind the bar: tall in the posture if not in inches, waist defined, hips and breasts already the argument, thighs strong under a slit. There is no spare belly yet, only a smoothness that catches light when she laughs and leans. Her face is sharp, undercut precise, mouth painted like a decision. She moves as inventory she owns.',
      clothing: 'The black column dress fits like a rumor she started. The zipper is a formality. Gold sits light on her collarbones. She could wear anything in the wardrobe and she knows which three things are weapons.',
      talk: {
        line: '“Don’t hover in the door, you look like a man about to apologize. Sit. Tell me something true or something expensive.”',
        choices: [
          { label: 'Tell her the club looks like her.', effects: { affection: 2, trust: 1 }, reply: '“Flattery with architecture. I’ll allow it.” She hooks a heel behind your calf under the table and leaves it there, proprietary.' },
          { label: 'Order the kitchen’s worst indulgence.', effects: W(4, { affection: 2 }), reply: 'She eats the rich thing without performing reluctance. “Again,” she says. “You’re courting correctly.”' },
          { label: 'Ask what she was like before the club.', effects: { trust: 3 }, reply: 'A rarer answer: a smaller apartment, a louder hunger, a woman who measured herself in other people’s tabs. “I kept the hunger,” she says. “I fired the rest.”' },
        ],
      },
      event: {
        title: 'The dress she doesn’t wear',
        prose: 'In the office above the club she shows you a dress from her bartender years, narrow as a blade. She holds it up to her body and the hips are already a polite impossibility. “Sentimental,” she says, sneering at herself. “I keep it to remember I chose this mouth, this room, this appetite. I am not going back into that zipper. I might, however, let you take me out of this one.”',
        choices: [
          { label: 'Leave the old dress on the hook.', effects: { acceptance: 2, affection: 3, trust: 2 }, reply: 'You hang it up yourself. She watches, then kisses you like a contract. “Good. I hate nostalgia that wants a refund.”' },
          { label: 'Take her out of the current one.', effects: { affection: 3, acceptance: 1 }, reply: 'The office lock sticks. Neither of you cares. She is warm, fit, and smug against the desk, and she fixes her lipstick after with devastating calm.' },
        ],
      },
      intimacy: {
        opening: 'Sable fucks like she hosts: attentive, a little mean, completely in charge until she chooses not to be. The black dress becomes a puddle. She is curves with intent, waist still a handhold, breasts heavy in your palms, thigh thrown over you with muscle under the softness. “Eyes up,” she says. “I don’t do anonymous.”',
        choices: [
          { label: 'Let her run it.', effects: { affection: 3, trust: 2 }, result: 'She rides you until the chair complains, comes with a sharp laugh, and then—rarer—lets you flip her and finish the thought. After, she smokes nothing and talks business into your neck, fond.' },
          { label: 'Tell her you want her bigger.', effects: W(3, { dependency: 2, acceptance: 2, affection: 2 }), result: 'Her hips stutter. Interest, bright and dangerous. “Say it again.” You do. She comes harder and afterward orders food to the office like a benediction. “We’ll see if you deserve what you’re asking.”' },
          { label: 'Just hold her.', effects: { trust: 3, affection: 2 }, result: 'She is suspicious of stillness and then, gradually, heavy with it. “Don’t tell the floor,” she murmurs. The gold comes off. She sleeps twenty minutes, which she will deny.' },
        ],
      },
    },
    {
      outfitName: 'Silk with a margin',
      mobilityTag: 'Heels optional',
      mobility: 'She still closes every night on her feet. The heels come off in the office a little earlier.',
      body: 'Lean on Sable is not lean on anyone else. The waist has softened by a palm, a plush little rise above the silk when she sits and crosses her legs. Her breasts sit lower in the dress, more of them, and her thighs have begun to ask the slit for mercy. The face is the same weapon with a kinder cheek. She looks edible and knows the market.',
      clothing: 'Dresses are bought with a margin now, “for long dinners.” The margin is half gone. A gold chain she used as a waist joke sits higher. She calls it inflation and tips herself a drink.',
      talk: {
        line: '“If you’re here to tell me I look healthy, leave. If you’re here to look at the dress losing an argument, stay and be useful.”',
        choices: [
          { label: 'Be useful with your hands.', effects: { affection: 3, acceptance: 2 }, reply: 'You fit a hand to the new softness at her waist in the dark of the booth. She exhales through a smile. “There. That’s a review I can use.”' },
          { label: 'Send for the tasting plates.', effects: W(6, { affection: 2, dependency: 1 }), reply: 'Plates arrive. She eats with focus and feeds you one bite for every three of hers. “Ratio,” she says. “Learn it.”' },
          { label: 'Ask her to dance while the floor is empty.', effects: { trust: 2, affection: 2 }, reply: 'One song, her body a sure thing against yours, the new softness at her stomach unmistakable. “Next year this dance changes,” she says. “Stay if you want tickets.”' },
        ],
      },
      event: {
        title: 'The gold chain',
        prose: 'She measures her waist with the chain at the end of the night, doors locked, lights up. It doesn’t meet where it met in spring. She laughs, bright and mean and happy. “Look at that. Growth. My accountant will weep and I’ll fire him if he does it where I can hear.” She loops the chain around your wrist instead. “You’re the record now.”',
        choices: [
          { label: 'Wear the chain home.', effects: { trust: 3, affection: 3 }, reply: 'You wear it. In the morning she texts a single gold emoji and the words: Bring it back on your body. I’m not finished measuring.' },
          { label: 'Take her to a late kitchen.', effects: W(6, { affection: 2, acceptance: 2, dependency: 1 }), reply: 'Eggs, bread, her lipstick on the fork. She taps the chain against the plate. “This is the last time it closes,” she says, cheerful. “Order something fried to celebrate the divorce.”' },
        ],
      },
      intimacy: {
        opening: 'Silk up, not off, because she likes the picture. The picture includes a softer stomach that presses your chest when she leans in, breasts heavier, breath a little shorter when she works for it. She notices you noticing and grinds down harder. “Don’t be coy. I didn’t get this way by accident and neither did you.”',
        choices: [
          { label: 'Praise the difference.', effects: { acceptance: 3, affection: 3, weight: 2 }, result: 'You tell her, filthy and specific. She comes with her forehead on yours, smile ruined, then makes you say it again while she strokes you. “Good. We’ll build on that review.”' },
          { label: 'Fuck her over the office desk.', effects: { affection: 3, trust: 1 }, result: 'The desk earns its keep. She is solid, warm, still easy to move and pleased that you use that while you have it. After, she adjusts the silk and pours two drinks. One of them is mostly cream.' },
          { label: 'Just hold her.', effects: { trust: 3, affection: 2 }, result: 'She allows the couch, heels off, stomach against your side. “If you make this a habit I’ll charge you rent,” she says, and pulls your arm tighter so the threat fails.' },
        ],
      },
    },
    {
      outfitName: 'VIP black, working zip',
      mobilityTag: 'Booth and floor',
      mobility: 'She works the floor, then claims the booth like a throne she can still leave.',
      body: 'Softening in a way she refuses to call accidental. The belly is a smooth proud curve under the dress, not an apron yet, enough to rest a coupe on if she is showing off, which she is. Hips have widened into the booth; getting out requires a breath and a smile she turns into choreography. Thighs touch all the way down. Her upper arms are plush and strong. The face is lush, lipstick precise, a faint softness under the chin when she looks down at her own chest with satisfaction.',
      clothing: 'The VIP black still zips. It announces the belly rather than hiding it, which is the point, until late, when the zip bites. She changes into a backup slip in the office and calls the bite “audience feedback.”',
      talk: {
        line: '“You’re staring at the dress like it owes you money. It doesn’t. I do, possibly, in the form of your attention. Give it here.”',
        choices: [
          { label: 'Give her the stare she ordered.', effects: { acceptance: 3, affection: 3 }, reply: 'You look, slow, from mouth to the curve under the silk. She blooms under it, which she would call strategy. “Approved,” she says, and pulls you into the booth by the belt.' },
          { label: 'Order oysters and the cream thing.', effects: W(8, { affection: 2, dependency: 2, acceptance: 1 }), reply: 'She eats oysters like a ritual and the cream thing like a sin she invented. A hand settles on her stomach. “We’re just getting started, you and this,” she says, including you in the architecture.' },
          { label: 'Ask her to come home before close.', effects: { trust: 2, affection: 2 }, reply: 'She almost says no on principle, then hands the keys to the bartender. “Don’t get proud,” she tells you in the cab. Her head finds your shoulder. The curve of her stays against your ribs the whole ride.' },
        ],
      },
      event: {
        title: 'Belt loop',
        prose: 'She pulls you into the VIP booth by the belt in front of a table that paid for the privilege of proximity. The pull has weight behind it; when you land, her hip and the new curve of her stomach pin you to the tufted back. She kisses you once, showy, then speaks against your mouth. “Let them see what I’m keeping,” she says. “Unless you embarrass easily. In which case, leave, and I’ll spend the oysters on a braver man.”',
        choices: [
          { label: 'Let them see.', effects: { affection: 3, acceptance: 3, dependency: 1, flag: 'claimed' }, reply: 'You kiss her back as if the booth is a private room. It isn’t. She glows, dangerous and pleased, and feeds you an oyster with her fingers. The room recalculates her. She lets it.' },
          { label: 'Take her somewhere actually private.', effects: { trust: 3, affection: 2 }, reply: '“Possessive,” she says, delighted anyway. Upstairs she drops the performance by a degree and eats the rest of the tray in her slip, barefoot, softer. “Better,” she admits. “Don’t tell the room.”' },
        ],
      },
      intimacy: {
        opening: 'The slip goes. Sable is softening and glorious: a belly you can cup with both hands, breasts that spill, thighs that make a lush trap when she straddles you. She braces on the headboard and the motion ripples. “I want you to feel what the dress was bragging about,” she says. “And I want you to work for it.”',
        choices: [
          { label: 'Work for it.', effects: { affection: 3, acceptance: 3, weight: 3 }, result: 'You hold her hips—wider, real—and let her use you. She comes loud, unashamed of the jiggle, then puts your hands on her belly and makes you feel the aftershocks. “This is going to get so much worse,” she says, tender as a threat. “Keep up.”' },
          { label: 'Put her on her back and spoil her.', effects: { affection: 3, trust: 2, acceptance: 2 }, result: 'On her back the curve of her stomach shines. You fuck her slow and kiss the underside of a breast until the hostess voice breaks into something raw. She thanks you by dragging you down into the softness and biting your shoulder.' },
          { label: 'Just hold her.', effects: { trust: 3, affection: 2, acceptance: 2 }, result: 'She permits the lights off. The belly against your side is a new fact she enjoys hearing you notice. “Stay until the ugly hour,” she says. “I look expensive in the morning too. We’ll test it.”' },
        ],
      },
    },
    {
      outfitName: 'Silk that argues',
      mobilityTag: 'Heels for entrances',
      mobility: 'Entrances still happen. By last call she is in the booth with her shoes under the table, rubbing one foot, unbothered.',
      body: 'Soft and rounded, a body that arrives before the punchline. Her belly is a distinct warm mound under every dress, resting toward her lap when she sits deep in the booth. Breasts are heavy enough to need the structures she pretends are jewelry. Hips widen the seat. A plush roll at the side is visible when she lifts an arm to summon staff, and she does not put the arm down faster. Her face is full-lipped and a little rounder, chin soft when she laughs big. She is winded after a fast song and turns the breathlessness into a look.',
      clothing: 'The side zip fails on a Tuesday and she makes the gap part of the act, a flash of hip. Backup dresses are getting fewer. She has started leaving the top clasp undone and calling it décolletage. It is also relief.',
      talk: {
        line: '“The zip died in public and I gave it a eulogy. You’re late for the funeral. Bring something rich and sit where your hand can find the gap.”',
        choices: [
          { label: 'Find the gap.', effects: { affection: 3, acceptance: 3, dependency: 1 }, reply: 'Your fingers slip through failed teeth of the zip into warm hip. She hums. “Mourning dress optional,” she says. “Harder.”' },
          { label: 'Bring the rich thing and a second.', effects: W(10, { affection: 2, dependency: 2, acceptance: 2 }), reply: 'She eats with leisure and malice, unzipped, belly easing out into the gap. “See? The dress was the only one suffering. I’m thriving. Have a bite. Have two.”' },
          { label: 'Take her shoe off and rub the foot under the table.', effects: { trust: 2, affection: 3 }, reply: 'A surprisingly quiet thank you. She watches the room while you do it, then looks at you like you stole something valuable. “Dangerous service,” she murmurs. “Do the other one and I’ll consider loyalty.”' },
        ],
      },
      event: {
        title: 'The side zip',
        prose: 'It goes during a toast. Sable is mid-sentence, glass up, and the zip travels of its own accord over the widest part of her hip. The sound is tiny. The result is not: a lush spill of her side, the black edge of underwear, the curve of a belly no longer theoretical. She does not clutch the dress. She finishes the toast. Then she looks at you across the room, eyes bright, and mouths: well?',
        choices: [
          { label: 'Cross the room and stand at her side like it’s planned.', effects: { affection: 4, acceptance: 3, trust: 2, flag: 'claimed' }, reply: 'You stand where the gap is, a hand at the small of her back, turning exposure into entourage. She leans into you, heavy, delighted. “Hire yourself,” she says. “The job is proximity.”' },
          { label: 'Meet her in the office with food and a bigger dress.', effects: W(6, { affection: 2, acceptance: 2, dependency: 1 }), reply: 'She changes, eats, and examines the dead dress with affection. “Bury it,” she says. “Or frame it. I want the next one arrogant.”' },
        ],
      },
      intimacy: {
        opening: 'She keeps the broken dress on for the first minute because the failure excites her, then peels it and shows you the red mark the zip left across a soft hip. “Kiss the casualty,” she says. Naked she is rounder than the room expects, belly fully present, breasts swaying, thighs plush and strong. She pulls you in so the belly presses first. “That’s the introduction. The rest of me is the venue.”',
        choices: [
          { label: 'Kiss the mark and everything it was trying to hold.', effects: { acceptance: 4, affection: 3, weight: 3, dependency: 1 }, result: 'You follow the mark down into softness and she gets loud, gripping your hair, belly brushing your forehead. She comes shaking and immediately hungry, which she treats as a second act. You feed her in bed. She calls it aftercare and also dinner.' },
          { label: 'Take her against the office wall while she can still be lifted.', effects: { affection: 3, trust: 1, acceptance: 2 }, result: 'You can still lift her, just. The effort makes it filthy. She laughs, delighted, legs locked, softness crushed to your front. “Remember this,” she pants. “Soon you’ll have to come to me. I want you nostalgic and obedient.”' },
          { label: 'Just hold her.', effects: { trust: 3, affection: 3, acceptance: 2 }, result: 'The couch, her back to your chest, your hands spanning less of her stomach than they used to. She places them where she wants pressure. “I could get used to being a person who is held,” she says, warning you. “Don’t start if you’re a tourist.”' },
        ],
      },
    },
    {
      outfitName: 'Commissioned, one size ahead',
      mobilityTag: 'Booth throne',
      mobility: 'She dances a song or two, then rules from the booth. Standing is easy. Standing for hours is no longer the brand.',
      body: 'Pleasantly chubby is too sweet a phrase and she rejects it for plump, said like a vintage. The belly is heavy enough to rest in her lap when she reclines, a soft shelf above a wider lap. Breasts fill every neckline and then negotiate with it. Thighs spread unapologetically; the booth has become a one-woman banquet. Arms are thick and bangled. Her face is lusher, cheeks high with drink and heat, a definite softness under the jaw that her earrings brush. She gets up with a hand on the table now, and turns the brace into a gesture.',
      clothing: 'She commissioned a dress two sizes up and is already haunting the seams. It is black, cruel, and beautiful, and by midnight a button at the hip leaves a dot in her skin. She refuses to change. “Let it struggle,” she says. The gold is heavier, resized.',
      talk: {
        line: '“I ordered a dress for a woman with my ambition and she is arriving ahead of schedule. Feel. Tell me if the tailor was brave enough.”',
        choices: [
          { label: 'Feel, and tell the truth.', effects: { acceptance: 4, affection: 3 }, reply: 'The truth is that the dress is losing and she is winning. You say it with your hand full of her side. She shivers, pleased. “Brave enough,” she decides. “Barely.”' },
          { label: 'Call for a second dinner to the booth.', effects: W(12, { dependency: 3, affection: 2, acceptance: 2 }), reply: 'Second dinner is indecent and perfect. She eats one-handed, the other on you, belly crowding the table. “Cancel the last song,” she tells a passing staffer. “I’m busy becoming.”' },
          { label: 'Dance the one song she still wants.', effects: { trust: 2, affection: 3, weight: 2 }, reply: 'One song. She is heavier in your arms, proud of it, a little breathless. At the end she laughs. “That’s the last fast one. From here we grind or we sit. Both are arts.”' },
        ],
      },
      event: {
        title: 'Two sizes ahead',
        prose: 'The tailor delivers to the club because Sable does not wait in other people’s shops. She tries the dress in the office with the door open a crack on purpose. Even the ambitious size cups her breasts, clings to the belly, and pauses at the hips. She sucks in, then stops, offended at herself. “No,” she says. “If it doesn’t close on the woman I actually am, it’s a costume for a coward. Let it out. And add an inch for next month. I am not a surprise I intend to waste.”',
        choices: [
          { label: 'Back her in front of the tailor.', effects: { trust: 3, acceptance: 4, affection: 3, money: -15 }, reply: 'You tell the tailor to add the inch. Sable’s eyes flick to you, bright. When the door shuts she kisses you hard enough to smudge. “Spend money on my future,” she says. “It’s the sexiest budget.”' },
          { label: 'Ask her to keep the tight one for a night.', effects: { dependency: 2, affection: 2, acceptance: 1, weight: 4, trust: 1 }, reply: '“Greedy,” she says, thrilled. She wears the tight version one hour, panting, glowing, then rips the plan up and eats dinner in a robe that doesn’t survive the sitting either.' },
        ],
      },
      intimacy: {
        opening: 'The commissioned dress comes off like a fight she wins. Chubby, powerful, she climbs into your lap and the weight of her is the point: belly pressing your chest, breasts at your mouth, thighs spreading over your legs until the chair is a rumor. “I want to hear you notice,” she says. “Out loud. I’ve fired people for less honesty.”',
        choices: [
          { label: 'Notice, out loud, the whole time.', effects: { acceptance: 5, affection: 3, dependency: 2, weight: 4 }, result: 'You narrate her. She rides you to the soundtrack and comes with a shout she would charge cover for. After, she stays on you, heavy, sweating, delighted. “Again tomorrow. Bring a sturdier chair and a worse mouth.”' },
          { label: 'Bend her over the arm of the couch.', effects: { affection: 3, acceptance: 3, trust: 1 }, result: 'The arm of the couch digs into that soft belly and she loves the indignity of it. You fuck her until her knees go, then ease her down and kiss the red line. “Good,” she says, hoarse. “I like a mark that tells the truth.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 2 }, result: 'She is too restless for stillness until you pin her gently with an arm and a knee. Then she melts, suspiciously. “If this gets out I’ll deny it,” she murmurs into your throat. The belly between you is a warm treaty. She does not move for a long time.' },
        ],
      },
    },
    {
      outfitName: 'Stretch satin, custom',
      mobilityTag: 'Short sets',
      mobility: 'The floor is for a song. The booth is for the night. Stairs happen once, at the end, slowly, with the rail.',
      body: 'Plump, lush, deliberately enormous for the room and then a little more than even she scheduled. Her belly is a heavy curve she rests a ringed hand on, overhanging into her lap when she sits, swaying when she walks. Love handles pillow out of the satin. Breasts are a production, lifted by structure that leaves marks she shows you later. Thighs spread across the booth and touch all the way; crossing them is retired. Her face is opulent, cheeks full, mouth still the sharpest thing about her. After the stairs she is honestly out of breath and kisses you so you won’t make it a tragedy.',
      clothing: 'Stretch satin, custom, and it still shines where it is losing: under the belly, at the arm, across the back. She has a seamstress on retainer. Gold jewelry has been resized twice. She wears the tightness as suspense.',
      talk: {
        line: '“I took the stairs and they took a tax. Come feel how hard my heart is working. Then do something about the rest of me, which is also working.”',
        choices: [
          { label: 'Feel her heart, then her stomach.', effects: { affection: 3, acceptance: 3, trust: 1 }, reply: 'Heart first, rabbit-fast under a heavier breast. Then the stomach, dense and warm. She watches your face. “Good. You didn’t do the pity voice. You may live. You may also order cake.”' },
          { label: 'Order cake and the savory thing under it.', effects: W(12, { dependency: 3, affection: 2, acceptance: 2 }), reply: 'Cake, then meat, then her leaning back with the satin unclasped under the table. “I’m going to outgrow the suspense,” she says, joyful. “Help.”' },
          { label: 'Skip the club and take a car home.', effects: { trust: 3, affection: 3 }, reply: 'She lets you. In the car she is quiet, plump hand in yours, city lights on the curve of her cheek. “Don’t get used to the quiet,” she says. “Get used to the rest.”' },
        ],
      },
      event: {
        title: 'Last fast song',
        prose: 'She pulls you onto the floor for a song that is too fast and she knows it. For a minute the old Sable is there, hips, laugh, command. Then the breath goes. The plump weight of her belly and breasts carries momentum she has to manage. She turns the stumble into a grind, presses that heavy softness into you, and makes the room watch her choose slowness like a crown. When the song ends she is flushed and shining and done. “That’s the last one,” she says into your ear. “Applaud or feed me. Those are the options.”',
        choices: [
          { label: 'Applaud, then feed her.', effects: W(10, { affection: 3, acceptance: 4, dependency: 2 }), reply: 'You start the clap. A few regulars follow, unsure, then sincere. She bows, a full-body event, and hauls you to the booth where the food is already a love letter. “See?” she says, eating. “Arts.”' },
          { label: 'Get her off the floor and into your hands.', effects: { trust: 3, affection: 4, acceptance: 2 }, reply: 'You take her to the office, shoes in your hand, her weight on your arm. She drinks water and then kisses you, salty, grateful, annoyed at the gratitude. “Don’t make me soft about it,” she says, while being exactly that, in both senses.' },
        ],
      },
      intimacy: {
        opening: 'She doesn’t pretend she wants to be on top for long. “My thighs are on strike and my pride is flexible,” she says, which is a lie about the pride. You lay her back on the wide couch. Plump becomes a vista: belly rising, breasts sliding toward her arms, thighs open and heavy. She takes you in with a groan of satisfaction and a hand on the crest of her stomach. “Watch it move,” she orders. “I am so fucking proud of it.”',
        choices: [
          { label: 'Watch it move and tell her.', effects: { acceptance: 5, affection: 4, dependency: 2, weight: 4 }, result: 'Every thrust sends a wave through her and you narrate the wave until she comes, loud, one heel dug into the couch, the satin of her skin shining. She drags you down onto the softness after and laughs. “Buried. Good. Stay dead a minute.”' },
          { label: 'Turn her on her side and hold her open.', effects: { affection: 3, acceptance: 4, trust: 2 }, result: 'Sideways she is a heap of warm luxury and you fuck her deep, one hand sinking into the belly’s side. She pushes back with what she has, which is plenty of squeeze and not much leverage, and comes cursing your name like a compliment.' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 3, acceptance: 3 }, result: 'She lets the performance go. You spoon what you can of her, hand under the heavy breast, nose in the undercut. “I used to think rest was for customers,” she says. “Come back tomorrow. I’m not done being this, and I’m not done being yours.”' },
        ],
      },
    },
    {
      outfitName: 'Structural satin, open clasps',
      mobilityTag: 'Receiving',
      mobility: 'She walks the back hallway. The floor is ceremonial. She sits to host and means it.',
      body: 'Fat, and she has started using the word as a jewel. Her belly dominates the satin, round and low and proud, parting clasps, resting fully in her lap, a weight she hefts when she laughs to feel it move. Breasts mound over the top of a custom structure and bruise sweetly against it. Thighs are vast, spreading the booth into a single claim; her hips brush both arms of chairs meant for two. Arms are heavy with gold that leaves dents. Her face is full and imperial, double chin present when she looks down at you over it, eyes lined sharp. Standing from the booth takes a rock and a smile she dares anyone to misread. Breath deepens when she talks too long. She talks long anyway.',
      clothing: 'Clasps, not zips. Structural satin that is honestly a support garment pretending to be evening. She leaves the lower clasps open after dinner so the underbelly can ease out, and she does this at the table if she likes you. Shoes are gorgeous and often removed. She is one good month from needing the dress rebuilt again and she has the appointment.',
      talk: {
        line: '“Say fat. In the booth. Like you like it, because you do. Then pour me a drink I shouldn’t finish and will.”',
        choices: [
          { label: 'Say it where staff can hear.', effects: { acceptance: 4, affection: 3, dependency: 2, flag: 'claimed' }, reply: '“Fat,” you say, warm, wanting. A server pretends to be busy. Sable’s smile is a blade she kisses you with. “Correct. Now everyone has the minutes.”' },
          { label: 'Pour the drink and bring the kitchen’s heaviest plate.', effects: W(14, { dependency: 3, affection: 3, acceptance: 2 }), reply: 'She finishes the plate and loosens the clasps with a sigh that is half porn. “I’m going to need a wider legend,” she says, patting the revealed curve. “You’re hired as witness.”' },
          { label: 'Rub the marks the structure left.', effects: { trust: 3, affection: 3, acceptance: 2 }, reply: 'In the office you ease the satin off and kiss the red lines under her breasts and along the belly. She goes uncharacteristically quiet. “Careful,” she says softly. “I’ll get fond of being tended.”' },
        ],
      },
      event: {
        title: 'Where the staff can hear',
        prose: 'She waits until the staff meal, which she now attends like a benevolent disaster, plate already twice the cook’s. In front of them—bartender, cook, a new kid—she takes your hand and puts it on the crest of her stomach. “I am getting fatter because I want to,” she says, clear. “If anyone makes it a joke, they can find a thinner boss. If anyone makes it a problem, same. You—” she looks at you “—say it back.”',
        choices: [
          { label: 'Say it back.', effects: { trust: 4, affection: 4, acceptance: 5, dependency: 2, flag: 'claimed' }, reply: 'You say you want her this way and more. The cook grins into the pan. Sable’s ears go pink, which you will treasure, and she covers it by stealing bread from the kid’s plate. “Good staff meeting,” she says. “Adjourned to my mouth.”' },
          { label: 'Say it back, then serve her yourself.', effects: W(10, { affection: 3, acceptance: 4, dependency: 3, trust: 2 }), reply: 'You plate her a second staff meal and set it in front of her like service. She eats it slowly, watching you, immense and moved and pretending she isn’t. “You may stay after close,” she murmurs. “You may stay a long time.”' },
        ],
      },
      intimacy: {
        opening: 'The booth is too public and the office couch has been reinforced, because she plans. She spreads on it, fat and gleaming, clasps open, belly a proud dome, thighs a kingdom. “I won’t be tossed,” she says, cheerful. “I’ll be attended. Put your back into the attendance.” She is wet, ready, and watching you with the attention she usually spends on a room.',
        choices: [
          { label: 'Attend her with your back in it.', effects: { acceptance: 5, affection: 4, dependency: 3, weight: 5 }, result: 'You fuck her deep, hands sunk into the sides of that heavy belly, and she praises and commands until praise breaks. Orgasm rolls through the whole fat mass of her. She pulls you down to be crushed a little and sighs. “That’s the job, darling. Look at you, employed.”' },
          { label: 'Spend the night on your knees.', effects: { affection: 4, acceptance: 4, trust: 2 }, result: 'Knees, mouth, her hand in your hair like a leash made of rings. She comes twice and feeds you a strawberry between, obscene and sweet. “I could replace a religion with this,” she says. “Don’t make me pious.”' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 4, acceptance: 3 }, result: 'You haul her in—effort, real—and she allows a long, heavy quiet, face in your neck. “If you tell anyone I snored I’ll ruin you,” she slurs, already going. She snores, softly. You don’t tell. You also don’t leave.' },
        ],
      },
    },
    {
      outfitName: 'Rebuilt satin, banquet cut',
      mobilityTag: 'Assisted circuit',
      mobility: 'Back room, office, car, home. The main floor is a video she sometimes watches from a screen, amused.',
      body: 'Massive, and the rebuild of the dress only proves it. Her belly reaches her lap and spreads to the arms of the reinforced banquette, a vast soft authority. The underbelly rests on the seat between her thighs, warm, always a little damp by the second hour. Breasts are enormous slopes supported by engineering she helped design. Thighs have swallowed the idea of a lap; she pulls you onto the side of the seat, not onto her, unless she is in a mood to be climbed carefully. Arms are thick, rings tight. Her face is a full moon of makeup and appetite, chins soft, eyes lethal. She stands to transfer and for little else. The standing is a production she directs: your shoulder, a breath, a laugh, the weight arriving like a guest she invited.',
      clothing: 'Banquet-cut satin, rebuilt, already honest about failure at the lower ties. She wears a drape over it when she wants mystery and throws the drape off when she wants the room to suffer. Shoes are for the car. The gold has been recast again, wider links.',
      talk: {
        line: '“I watched my own club on a screen like a god with a snack. The snack was most of a cake. Come here and be the better half of the evening.”',
        choices: [
          { label: 'Be the better half. Bring more cake.', effects: W(14, { affection: 3, dependency: 3, acceptance: 3 }), reply: 'She eats cake from your fingers, massive and gleaming, and pulls you against the side of her belly until your ribs learn the shape. “Screen’s off,” she says. “Live performance.”' },
          { label: 'Rub what the banquet dress is doing to her.', effects: { trust: 3, affection: 3, acceptance: 3, dependency: 2 }, reply: 'Ties loosen. You work the red lines and the heavy undercurve until she melts out of host-voice. “You’re going to make me sweet,” she warns. “Then I’ll have to eat something salty to recover.”' },
          { label: 'Talk about the floor without making it a loss.', effects: { trust: 4, affection: 3 }, reply: '“I don’t lose rooms,” she says. “I relocate them.” A beat. “I do miss the crush. You’ll have to crush me here instead. That’s a solvable grief.” She smiles, smaller than usual, and keeps your hand.' },
        ],
      },
      event: {
        title: 'The banquette, reinforced',
        prose: 'The new banquette arrives and she tests it in front of the installer because shame is a service other people booked. She sits. It holds. She spreads, massive, satin shifting, and laughs a real laugh that shakes the whole installation. “Look at that,” she tells you. “Furniture that believes in me. Tip the man and then sit at my right. We’re christening the future with something fried.”',
        choices: [
          { label: 'Tip him. Order the fried thing. Christening.', effects: W(12, { affection: 3, acceptance: 3, dependency: 2, money: -20 }), reply: 'The installer leaves richer and slightly dazed. Sable eats, pats the banquette, pats her belly, pats you. “Three things that can handle me,” she says. “I’m collecting a set.”' },
          { label: 'Sit at her right and skip the audience.', effects: { trust: 3, affection: 4, acceptance: 2 }, reply: 'You wait until the door shuts. Then you sit where she put you, tucked against a side of her that is warmer than the room. She goes quiet in the good way. “Stay through the delivery high,” she says. “I don’t want to come down alone.”' },
        ],
      },
      intimacy: {
        opening: 'Christening the banquette was inevitable. You lock the door. Sable arranges herself, massive and open, and you kneel on a cushion she had made for exactly this, because she is romantic in the way of a general. “You won’t cover me,” she says. “You’ll come to the edge and I’ll take you. Hands on the belly. I want it worshipped while you work.” She is slick, swollen, and utterly sure.',
        choices: [
          { label: 'Worship while you work.', effects: { acceptance: 5, affection: 4, dependency: 3, weight: 4 }, result: 'You hold the great curve and fuck her at the edge of the seat, deep and limited and perfect. She comes like a toast that runs long, voice filling the back room. After, she makes you lay your cheek on the belly. “Seat of honor,” she says, stroking your hair. “Don’t abdicate.”' },
          { label: 'Let her direct your mouth for as long as she wants.', effects: { affection: 4, acceptance: 5, trust: 2 }, result: 'She directs. You obey. The cushion earns its price. She comes twice and feeds you a sip of wine from her glass, spilling a little into the crease of her breast on purpose so you’ll chase it. “I’m an excellent boss,” she says, ruined.' },
          { label: 'Just hold her.', effects: { trust: 4, affection: 4, acceptance: 3, dependency: 2 }, result: 'You climb up beside her on furniture that can take you both. She is too much to gather and gathers you instead, one heavy arm. “Listen,” she says, suddenly plain. “I am going to get bigger than this room’s imagination. If you’re staying, say so without a joke.” You say so. She kisses you like a seal.' },
        ],
      },
    },
    {
      outfitName: 'Clinic drape, gold still',
      mobilityTag: 'Transfers',
      mobility: 'She transfers with help: banquette, chair, car, the widened back room. Walking is a short, proud shuffle she spends carefully.',
      body: 'Obese, and the word pleases her more than plump ever did. The belly is an apron and a throne, hanging deep between her thighs and spreading across the banquette until the banquette’s edges are a suggestion. Rolls stack at her sides when she leans. Breasts rest on the upper swell and move like their own decision. Her thighs are immense, always touching, warm enough to fog a cool room. Arms stay out from her sides; she gestures smaller and makes you come closer instead. Face full, imperial, chins soft, lipstick still a weapon. She is sweaty under gold. She smells like perfume and skin and the kitchen. Standing is a three-step story. She likes telling it with you as the necessary furniture.',
      clothing: 'The eveningwear is a clinic drape cut in black, tied, not zipped, with gold hardware she insisted on so no one could call it medical without sounding stupid. It opens over the underbelly after meals. Ordinary chairs are a joke she has stopped attending. A wider coat exists for the car. She fills it.',
      talk: {
        line: '“I shuffled and I want it admired. Then I want a plate I don’t have to balance, because my lap is a country with no table space. Solve me.”',
        choices: [
          { label: 'Admire the shuffle. Solve the plate.', effects: W(12, { affection: 3, acceptance: 3, dependency: 3 }), reply: 'You set a table over her—she laughs at the ingenuity—and feed her between compliments. “I should charge admission to this,” she says, softer at the end. “I won’t. You’re the list.”' },
          { label: 'Help her transfer and then rub the joints that paid for it.', effects: { trust: 4, affection: 3, acceptance: 2, dependency: 2 }, reply: 'Transfer is intimate and unpretty and she refuses to be embarrassed. After, your hands on her knees and the crease of her hip make her sigh. “You’re building a terrible reputation,” she murmurs. “Kind. Stay.”' },
          { label: 'Tell her the back room looks like a court.', effects: { affection: 3, acceptance: 3 }, reply: '“Because it is.” She pulls you in by the drape until you are half on the throne of her. “Kneel or sit. There is no standing in this country unless I say the word, and I am off my words.”' },
        ],
      },
      event: {
        title: 'She picks the wider door',
        prose: 'The contractor wants to talk about “dignity” and “lines of sight.” Sable, seated, immense, gold on black, cuts him off. “The door is for my body, not your poetry. Wider. And the frame in metal. I intend to keep growing and I intend to keep receiving, and I will not turn sideways for a man who owns a pencil.” She looks at you. “Tell him I’m not exaggerating. Tell him what you watch me eat.”',
        choices: [
          { label: 'Tell him, plainly.', effects: { trust: 3, affection: 4, acceptance: 4, flag: 'claimed' }, reply: 'You tell him. The contractor adjusts the number and his face. When he goes, Sable laughs until she has to hold her belly, which takes both arms. “My hero,” she says. “Disgusting. Come here.”' },
          { label: 'Tell him, and add a feast to the invoice day.', effects: W(10, { affection: 3, dependency: 2, acceptance: 3, money: -25 }), reply: 'The door will be wide. The lunch you bring is wider. She eats looking at the chalk marks, eyes bright. “Mark it bigger,” she tells the empty room. “No. Bigger than that.”' },
        ],
      },
      intimacy: {
        opening: 'The new wider doorway is still a promise, so you love her in the room she already rules. You kneel on the cushion. Her belly rests against your head when you lean in, a heavy curtain of heat, and she laughs and lifts it with both hands so you can breathe and reach. “Chivalry,” she says. “Now earn the rest. I want to feel small-thing pleasure in this big-thing body. You’re the small thing. Don’t be offended. Be effective.”',
        choices: [
          { label: 'Be effective.', effects: { acceptance: 5, affection: 4, dependency: 3, trust: 2, weight: 5 }, result: 'You are. She comes with the belly lowered onto your shoulder, smothering, glorious, her voice gone rough. After, she doesn’t have a quip for a full minute. Then: “Effective. I’ll have a plaque made. It will say keep going.”' },
          { label: 'Have her in the way that needs the sling for a moment.', effects: { affection: 3, acceptance: 4, dependency: 3, trust: 2 }, result: 'The sling takes some of the weight and she groans at the relief and at you. Angle solved, pride intact. She pulls you in as deep as the physics allow and bites a compliment into your mouth. “Gold,” she pants. “I told you it was jewelry.”' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 3 }, result: 'You sit at her right and are gathered. The hold is mostly her holding you, which she likes more than she planned. “Stay through the delivery of the door,” she says. “And through dinner. And through the part where I pretend I don’t need help standing. You’ll know which part is pretend. It’s most of them.”' },
        ],
      },
    },
    {
      outfitName: 'Laced black, no stairs',
      mobilityTag: 'Receiving only',
      mobility: 'The penthouse comes downstairs. She does not go up. Transfers are the travel. She can still stand, briefly, for a reason she respects.',
      body: 'Super obese and staging it. The belly is a continent from breasts to the seat, sloping off both sides of the reinforced chair, folds stacking when she laughs, which moves the room. Thighs are two soft pillars she cannot bring together; the gap is theoretical and the contact is constant. Arms rest on her own mass. Her face is smaller in the expanse and still commands: full cheeks, soft neck, precise eyes, a mouth that can end a vendor. Breath is audible and unhidden. She glistens under the lights she had lowered for comfort and effect. A shuffle to the new door is an event with witnesses she chooses. She chooses you most often. She is not diminished. She is concentrated.',
      clothing: 'Laced panels in black, built on her, gold eyelets. They are loosened after the first plate and sometimes not retied until morning. A coat exists and needs two people. She wears perfume like a border. Shoes are a memory she keeps on a shelf to annoy herself pleasantly.',
      talk: {
        line: '“The penthouse can have opinions upstairs. I live here now, where the kitchen can find me. Climb the side of me and say hello properly.”',
        choices: [
          { label: 'Climb the side of her and say hello.', effects: { affection: 4, acceptance: 3, dependency: 2, trust: 2 }, reply: 'You brace and lean into the warm continent of her side. The kiss lands. She hums, victorious. “Properly. Now bring the kitchen with you on the way back.”' },
          { label: 'Bring the kitchen first.', effects: W(16, { affection: 3, dependency: 4, acceptance: 3 }), reply: 'She eats for a long time, unlaced, a queen in a state of expansion. At the end she can only gesture, and the gesture means come here. You come. She tastes like the whole menu and satisfaction.' },
          { label: 'Ask what she misses from upstairs.', effects: { trust: 4, affection: 3 }, reply: '“The window,” she says, immediate. Then, quieter, “And being able to cross a room to get to you instead of summoning you. So don’t make me summon twice. And someday put a window in this wall. I’ll pay. I’ll pay in any currency.”' },
        ],
      },
      event: {
        title: 'Downstairs for good',
        prose: 'The last night of the upstairs bed, she tries the stairs because she is stubborn and because she wants the story. It fails on the fourth step. Not a fall—you are behind her, you were always going to be behind her—but a stop. Her breath shreds. The super obese weight of her settles back into your arms and the rail. She stares up at a door she used to own casually. Then she laughs, fierce. “Fine. Bring the bed down. Bring the window if you can. I am not dragging this body up a throat of carpet for a view. The view can kneel.”',
        choices: [
          { label: 'Bring the bed down. Promise the window.', effects: { trust: 4, affection: 4, acceptance: 3, dependency: 3, money: -40 }, reply: 'Movers, a night of logistics, her directing from the banquette like a general in silk. By dawn the back room is a bedroom. She tests the bed with a groan of homecoming. “Window next,” she says, already half asleep, enormous and certain. “Don’t cheap out.”' },
          { label: 'Sit on the stair with her until the laugh is the whole story.', effects: { trust: 5, affection: 4, acceptance: 4 }, reply: 'You sit. She fills the step and you both know you can’t stay. The moment is the point. “I hate this part,” she says, plain. “I don’t hate you in it. Take me down. Then order something with butter. I intend to be unbearable on purpose.”' },
        ],
      },
      intimacy: {
        opening: 'Downstairs, the new bed, which holds. Getting her onto it is an act of love and physics. Once there she is a super obese sprawl of black lace undone, gold at her wrists, belly a world, thighs open because they have no other long-term plan. “I can’t chase,” she says. “I can overwhelm. Come be overwhelmed. And take the rest of that pride in your hands—yes, the fold. I want you disgusted in the devoted way.”',
        choices: [
          { label: 'Be devoted, including the fold.', effects: { acceptance: 5, affection: 5, dependency: 4, trust: 3, weight: 5 }, result: 'You touch the hottest places without flinching and fuck her in the short strokes her body allows. She is loud, wrecked, thrilled. Orgasm moves through her like a crowd. She gathers you onto the side of the belly after, panting. “Devoted,” she says. “I’ll allow the word. I’ll allow you.”' },
          { label: 'Use the sling so you can get deeper.', effects: { affection: 4, acceptance: 4, dependency: 3 }, result: 'Gold takes some of the weight and she groans at the angle, at you, at the ingenuity. “I love a tool,” she gasps, and comes clenching, one hand slamming the bed because she needs the emphasis. You stay inside while she laughs herself breathless.' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 4, acceptance: 4, dependency: 2 }, result: 'The transfer back to holding is its own intimacy. You lie in the lee of her, face at her shoulder, hand spread on a tiny fraction of her chest. “Window soon,” she slurs. “And you, sooner. Don’t go upstairs. Everything I like is on this floor.”' },
        ],
      },
    },
    {
      outfitName: 'Gold sling, black drape',
      mobilityTag: 'Lift and court',
      mobility: 'The sling’s winch and your body move her between bed and receiving chair. She does not walk the club. The club is brought in dishes and people.',
      body: 'Near-immobile, and she has made it a salon. Her body fills the receiving chair edge to edge and then some: belly a vast forward sea, sides spilling in rolls, breasts splayed and supported by the gold sling she redesigned twice. Thighs are part of the seat’s story. She can shift with the winch and with effort that leaves her flushed and proud. Her face is full, heavily made some nights, bare and shiny others, always exact in its expressions. Breath is a constant soft work. She turns her head to follow a room she can no longer tour. People come to the look. She is not a secret. She is a destination, and she knows how to host one from a chair she will not be getting out of for the evening, or the week.',
      clothing: 'The sling is jewelry, gold-weave, load-bearing. The drape is optional and usually off by the second course because she likes the reaction and the air. Underneath, panels changed by you or by a trusted attendant she still supervises with terrifying precision. She has opinions about every strap. They are good opinions.',
      talk: {
        line: '“I can’t stand to greet you, so the greeting is this: look at me, bring what you brought, and kiss me like the room isn’t a rumor. The room is a rumor. I started it.”',
        choices: [
          { label: 'Kiss her like a rumor with a source.', effects: { affection: 4, acceptance: 3, trust: 2 }, reply: 'The kiss is public enough. Someone at the door pretends to check their phone. Sable smiles against your mouth, near-immobile and entirely in charge. “Source confirmed,” she says. “Now the food.”' },
          { label: 'Bring a feast worthy of a destination.', effects: W(16, { dependency: 4, affection: 3, acceptance: 4 }), reply: 'She eats for a long, lavish time. Staff come and go. She does not pretend smallness. At the end she is glossy, huge, and gentle around the eyes. “Stay after the rumor goes home,” she says. “That’s the real list.”' },
          { label: 'Dismiss the room and tend the sling marks.', effects: { trust: 4, affection: 4, acceptance: 3, dependency: 2 }, reply: 'The room leaves. Under gold, red lines. You tend them and she talks more quietly than the club has ever heard. “I wanted this,” she says. “I want the next size of it. And I want you, not a staff of strangers, when I can’t turn myself. That’s the contract. Sign with your hands.”' },
        ],
      },
      event: {
        title: 'Jewelry',
        prose: 'A fashion writer, absurdly, asks to see the sling. Sable grants ten minutes. She is vast in the chair, gold taking a portion of the weight, drape off one shoulder on purpose. The writer keeps saying “brave.” Sable’s smile thins. “Brave is for people who fell into a hole. I bought the hole and furnished it. Write that I look expensive. Write that I can’t walk to you, so you came to me, and that this was the more interesting composition. Or don’t write. I’m not a lesson.” She glances at you. “Tell them what I am.”',
        choices: [
          { label: 'Tell them: a woman who got exactly this far on purpose.', effects: { trust: 4, affection: 4, acceptance: 5, flag: 'funded' }, reply: 'You say it without poetry. The writer leaves with something better than brave. Sable, when the door shuts, exhales and finds your hand. “Good dog,” she says, wrecked with fondness. “Horrible sentence. Come here so I can improve it.”' },
          { label: 'Tell them nothing. Feed her after.', effects: W(12, { affection: 3, trust: 3, dependency: 3, acceptance: 3 }), reply: 'You shut it down and bring food instead of copy. She prefers it. “Let them guess,” she says, eating, enormous. “Guessing is free advertising. This is the product.” She pats her belly. The pat is a full gesture.' },
        ],
      },
      intimacy: {
        opening: 'After the writer, after the room, the winch lowers her back a few degrees and the sling sings. You are between thighs that rise above your shoulders, the belly a ceiling you kiss. She is near-immobile and incandescent. “I want you in me while I can’t do a thing about it except feel and command,” she says. “That is the entire erotic thesis. Try to keep up. And touch the parts the writer didn’t earn.”',
        choices: [
          { label: 'Keep up.', effects: { acceptance: 6, affection: 5, dependency: 4, trust: 2, weight: 5 }, result: 'You fuck her under the gold, deep and pinned to her pace, hands in the soft places a stranger doesn’t get. She commands until she can’t, then only breathes and comes, a long rolling ruin. “Thesis proved,” she gasps. “We’ll add a volume. Don’t you dare look humble.”' },
          { label: 'Make the hour about your mouth and her patience.', effects: { affection: 5, acceptance: 5, trust: 3 }, result: 'Patience is a gift she spends. You take your time. She comes, swears, comes again smaller, and pets your head with a hand that tires. “Enough. Perfect. Up here where I can see the person who just ended me.” You go up. She kisses your wet mouth and laughs, breathless, proud.' },
          { label: 'Just hold her.', effects: { trust: 5, affection: 5, acceptance: 4, dependency: 2 }, result: 'The sling stays. You tuck against her side on the wide chair, half swallowed, her arm a heavy claim. “I am going to get worse in the way I want,” she says, almost gentle. “If the contract still sounds like a life, sleep here. If not, leave before I feed you breakfast and make it impossible.” You sleep. Breakfast will be impossible in the correct direction.' },
        ],
      },
    },
    {
      outfitName: 'Adaptive black membrane, gold stays',
      mobilityTag: 'Immobile',
      mobility: 'She does not stand. The winch, the bed, and you are how she meets the day. People are admitted to the edge of her. She calls that a club.',
      body: 'An immobile blob in the only way Sable would allow: on purpose, in black and gold, on a platform she art-directed. She fills it. The belly is a high wide world, spreading farther than your arms, thighs absorbed into the mass and still distinct when you lift them to wash or to fuck. Breasts are vast cushions sliding into the upper rolls. Her arms are thick and reach only the near parts of herself; everything else is staffed by you, and she is specific. Her face is a made-up or freshly washed moon above folds of chin, eyes undimmed, voice a little breathless and completely precise. She is dependent and she has turned dependency into a guest list. She is happier than the woman in the narrow dress, and she will say so while you feed her, one finger lazy in your hair.',
      clothing: 'An adaptive membrane in black, split for care, with gold stays she had added so it would still read as hers from the door. It strains, glossy, and she likes the strain. Some days she has you open every split and wears only perfume and jewelry. “Nudity is a dress if the jewelry is good,” she says. The jewelry has been resized for thicker fingers. It still comes off in your hands at night.',
      talk: {
        line: '“Report from the floor, then report to my mouth. I can’t tour and I don’t miss the shoes. I miss nothing I can’t summon. You, unfortunately, I like to summon in person. Hello. Come get summoned.”',
        choices: [
          { label: 'Give the report, then the mouth.', effects: { affection: 4, trust: 2, acceptance: 3 }, reply: 'You tell her the club is alive because she taught it how. Then you kiss her, careful of breath, and she smiles like a lock opening. “Adequate,” she says, which means stay the night and do it again.' },
          { label: 'Summon the kitchen and feed her yourself.', effects: W(18, { dependency: 5, affection: 4, acceptance: 4 }), reply: 'A long feeding, her eyes half shut, the membrane open, the belly rising even against its own enormity. She hums. At the end she says, very clearly, “This is the life. Don’t let anyone in the building call it a shame. It’s a venue.”' },
          { label: 'Ask if she wants the window yet.', effects: { trust: 3, affection: 4, money: -20 }, reply: '“Yes,” she says, immediate. You put money down on a stupid, perfect window plan. She goes quiet in the way that means you landed a hit. “I’ll watch weather I can’t walk in,” she says. “And I’ll do it next to you. That’s not a compromise. That’s set design.”' },
        ],
      },
      event: {
        title: 'Gravity well',
        prose: 'A regular—old money, old habits—asks to be admitted and then freezes in the door when he understands the scale. Sable is the whole center of the room, black and gold and breathing, a world of body with a precise face. She lets him freeze. Then she says, lightly, “You can come to the edge or you can leave. Both are dignified. Hovering is not. I don’t offer a smaller woman in the back. There isn’t one. This is the owner.” Her eyes find you. She is, beneath the poise, waiting to see where you stand.',
        choices: [
          { label: 'Stand at the edge with your hand on her.', effects: { trust: 5, affection: 5, acceptance: 5, dependency: 3, flag: 'claimed' }, reply: 'You put your hand where the room can see it, on the high curve. The man sits, stunned, and stays ten polite minutes. After, she turns her face to you and the performance drops into something bare. “Good,” she says. “That’s the whole vow. Do it again tomorrow.”' },
          { label: 'Clear him out and have a private service.', effects: W(14, { affection: 4, trust: 4, dependency: 4, acceptance: 4 }), reply: 'You close the door. The private service is food and your hands and her laughing until the laugh needs a minute. “Better than his face,” she says. “Feed me the good wine by the spoonful. I want to be ridiculous and perfectly happy.”' },
        ],
      },
      intimacy: {
        opening: 'The membrane is open. The splits gleam. She is immense, hot, shining with oil you warmed, every fold known to you and still a shock of plenty. You cannot cover her. You attend the edge, as the man could not. “I want you inside,” she says, voice a bell in a smaller room of her throat. “I want the whole rest of me to feel it, since that’s what I have instead of movement. And I want your eyes. Immobility is not absence. Look.”',
        choices: [
          { label: 'Look, and give her all of it.', effects: { acceptance: 6, affection: 5, dependency: 4, trust: 3, weight: 6 }, result: 'You push in and watch her face while the vast body answers in ripples she can’t steer. She comes long and shaking, a moan that would have sold out the old room. After, you stay in the golden lee of her, both of you sticky and calm. “I built this,” she whispers. “You helped. Don’t you ever call it an accident.”' },
          { label: 'Worship every place the guests don’t see.', effects: { affection: 5, acceptance: 6, trust: 4, dependency: 3 }, result: 'Under the belly, between the thighs, the soft crushed places: you kiss them until she is crying from it and ordering you not to stop in the same breath. Two orgasms. A third, smaller, from your hand resting heavy while you kiss her mouth. “Edge privileges,” she pants. “Revoked for everyone but you.”' },
          { label: 'Just hold what the platform gives you.', effects: { trust: 5, affection: 5, acceptance: 5, dependency: 3 }, result: 'You lie half on the platform, half against the side of the world of her, your hand over her heart’s general country. She turns her face, effort and will, and kisses your brow. “Sleep,” she says. “I’ll be here. That’s the joke and the promise. I’ll be so here.” In the morning she is heavier by a night of yes, and she asks for breakfast like a woman who intends to continue.' },
        ],
      },
    },
  ],
  dates: [
    {
      id: 'vip',
      title: 'VIP booth',
      cost: 30,
      blurb: 'A public seat at her right, if the room can still hold the two of you.',
      start: 'a',
      locked: (w) => (w.stage >= 12 ? 'She receives in the back room. The booth has been retired with honors.' : null),
      nodes: {
        a: {
          prose: ({ woman: w }) => `Low Orbit is all bass and amber. Sable installs you at her right. ${w.stage >= 9 ? 'She overflows the reinforced booth, gold hardware ticking when she breathes, and the table has been cut into a crescent so her belly has a bay.' : w.stage >= 5 ? 'Satin is losing a polite war with her stomach and hips, and she looks thrilled about the casualties.' : 'The black dress still reads as a weapon, and her knee finds yours like a signature.'} “Be interesting,” she says. “Or be hungry. Ideally both.”`,
          choices: [
            { label: 'Be hungry with her.', next: 'b', effects: { weight: 14, affection: 2, dependency: 2, hunger: -18 } },
            { label: 'Be interesting: tell the truth about her.', next: 'c', effects: { affection: 3, acceptance: 3, trust: 1 } },
          ],
        },
        b: { end: true, prose: ({ woman: w }) => w.stage >= 7 ? 'Courses arrive and vanish. She loosens whatever can be loosened and leans the warm mass of her side into you, public and unbothered. “This is my favorite sport,” she says, licking salt off a thumb. “Stay for the trophy.”' : 'She feeds you one perfect bite and keeps the rest with a pirate’s cheer. Under the table her foot strokes your ankle. You leave with her perfume and a promise of after-hours.' },
        c: { end: true, prose: 'You tell her what the room sees and what it doesn’t: the work, the want, the way she enjoys her own size. Her mouth goes soft for a half second. Then she kisses you in front of a tab that could fund a week and says, “Take me home before I do something sincere in public.”' },
      },
    },
    {
      id: 'dance',
      title: 'One song',
      cost: 18,
      blurb: 'The floor, while the floor is still a place she enters.',
      start: 'a',
      locked: (w) => (w.stage > 6 ? 'She retired the fast floor. Ask her for a grind in private or a seat in public.' : null),
      nodes: {
        a: {
          prose: ({ woman: w }) => `The floor is hot and close. Sable pulls you in. ${w.stage >= 4 ? 'There is more of her against you than the song was built for, belly and breasts a lush collision, her smile sharp about it.' : 'She moves like the club owes her rent, precise, a hand at the back of your neck.'} “Keep up,” she says, already sure you might not.`,
          choices: [
            { label: 'Keep up.', next: 'b', effects: { affection: 3, acceptance: 2, weight: 4 } },
            { label: 'Pull her off the floor for air and food.', next: 'c', effects: { trust: 2, weight: 8, dependency: 1, affection: 2 } },
          ],
        },
        b: { end: true, prose: 'You last the song. She is flushed, heavier in your hands than the first verse, and delighted. In the booth she drinks water and then orders something fried “for the cardio.” The cardio does not resume.' },
        c: { end: true, prose: 'She pretends to protest and eats anyway, knee against yours, sweat cooling on her throat. “Bossy,” she says. “I like you employed. Do it again when I say so, not when you’re scared of a little breath.”' },
      },
    },
    {
      id: 'penthouse',
      title: 'Room service',
      cost: 36,
      blurb: 'Upstairs while upstairs lasts. Later, the room service comes to her.',
      start: 'a',
      locked: () => null,
      nodes: {
        a: {
          prose: ({ woman: w }) => w.stage >= 10
            ? 'There is no upstairs anymore. Room service is a parade into the back room. Sable, immense on the platform’s cousin chair, waves a hand. “Open everything. I want the lids off and you within reach. In that order.”'
            : 'The penthouse is a dark window and a bed she still claims with ease or with effort. She kicks off her shoes and points at the menu like a queen pointing at a map. “Order as if you intend to ruin me. I’ll correct you if you’re timid.”',
          choices: [
            { label: 'Order as if you intend to ruin her.', next: 'b', effects: { weight: 18, affection: 3, dependency: 2, hunger: -22, acceptance: 2 } },
            { label: 'Order modestly and undress her first.', next: 'c', effects: { affection: 3, trust: 2, acceptance: 2, weight: 6 } },
          ],
        },
        b: { end: true, prose: ({ woman: w }) => w.stage >= 8 ? 'Ruin is a process. She eats until her breath goes thick and her hand, small against the rest of her, pats the high curve in benediction. “Timid men don’t get this view,” she says. “Come here and share the damage.”' : 'Carts empty. She laughs, loose, silk abandoned, a softer line at her waist than the menu planned. You share the last spoon and the window and a kiss that tastes like sauce.' },
        c: { end: true, prose: 'Modest was a lie you both catch. Between kisses she still picks at the cart, naked or nearly, unashamed of appetite in a room with a lock. “Stay,” she says. “The window looks better with a witness.”' },
      },
    },
    {
      id: 'shoot',
      title: 'A private shoot',
      cost: 26,
      blurb: 'A photographer she trusts. A body she wants on record.',
      start: 'a',
      locked: (w) => (w.stage < 4 ? 'She says the body isn’t bragging enough yet. Give it a month of dinners.' : null),
      nodes: {
        a: {
          prose: ({ woman: w }) => `The studio is hot bulbs and a seamless sweep. Sable arranges herself — ${w.stage >= 10 ? 'in the reinforced seat, a landscape in black and gold, directing the lens like staff' : w.stage >= 7 ? 'on a wide bench, belly and breasts unapologetic, one hand in her own softness' : 'standing, then sitting, dress honest about every new curve'}. “If you look away I’ll fire you both,” she tells you and the camera.`,
          choices: [
            { label: 'Fund the rush prints.', next: 'b', effects: { money: -20, affection: 3, acceptance: 4, flag: 'funded' } },
            { label: 'Get in the frame when she crooks a finger.', next: 'c', effects: { affection: 3, acceptance: 3, trust: 2, dependency: 1 } },
          ],
        },
        b: { end: true, prose: 'The prints are indecent and exact. She makes you look at each one. In the last, her eyes are on you, not the lens. “Frame that one,” she says. “So you remember this wasn’t a phase. It was a direction.”' },
        c: { end: true, prose: 'You end up in the frame, a hand on her, smaller than the story of her body. She looks at the preview and smiles like a woman who has won a quiet argument. “Yes,” she says. “That scale. Keep it.”' },
      },
    },
    {
      id: 'immersion',
      title: 'The immersion table',
      cost: 42,
      blurb: 'A Helix-built table that feeds a reclining body. She booked it.',
      start: 'a',
      locked: (w) => (w.stage < 6 ? 'She wants the immersion table once chairs start to argue. Not before. She has standards for her own myth.' : null),
      nodes: {
        a: {
          prose: 'The immersion table is a glossy black cradle with a caloric line and a ridiculous amount of privacy. Sable has already tipped the tech to leave. “Don’t make it clinical,” she says, settling — a production — into the contour. “Make it a date. The machine can count. You can talk.”',
          choices: [
            { label: 'Make it a date. Start the line.', next: 'b', effects: { weight: 22, dependency: 3, affection: 3, acceptance: 3, hunger: -20 } },
            { label: 'Sit with her and go slowly.', next: 'c', effects: { weight: 12, trust: 3, affection: 3, acceptance: 2 } },
          ],
        },
        b: { end: true, prose: 'The line runs. She eats and drinks what it offers and what you offer, eyes on you, body filling the cradle more honestly by the minute. At the end she is flushed, huge, and hoarse. “Book it again,” she says. “And kiss me before the tech comes back and ruins the myth.”' },
        c: { end: true, prose: 'Slow is its own luxury. You talk. She sips. Her hand finds yours and stays, heavy. “I don’t need a witness who flinches,” she says. “You’re doing it correctly. Keep the appointment. Keep the nerve.”' },
      },
    },
    {
      id: 'court',
      title: 'Holding court',
      cost: 12,
      blurb: 'Late-stage receiving hours. You are not a guest. You are the constant.',
      start: 'a',
      locked: (w) => (w.stage < 9 ? 'She is still mobile enough to come to you. Let her. Court is for later.' : null),
      nodes: {
        a: {
          prose: 'Receiving hours. Two regulars have already paid their compliments and fled to the bar. Sable keeps you when the door shuts, immense, gold ticking with her breath. “Tell me I look like a problem worth having,” she says. “Then choose your service.”',
          choices: [
            { label: 'Problem worth having. Then a long feeding.', next: 'b', effects: { weight: 16, affection: 3, dependency: 3, acceptance: 3 } },
            { label: 'Problem worth having. Then quiet care.', next: 'c', effects: { trust: 4, affection: 4, acceptance: 3, dependency: 2 } },
          ],
        },
        b: { end: true, prose: 'You feed her until the compliments are irrelevant. She is glossy and enormous and looking at you like the only guest list that matters. “Dismiss yourself to my bed,” she says. “That’s the whole promotion.”' },
        c: { end: true, prose: 'You ease straps, wipe sugar, rearrange a pillow under a fold that was complaining. She watches you with something dangerously like peace. “This is also court,” she says. “Don’t tell the regulars. They can’t afford it.”' },
      },
    },
  ],
};
