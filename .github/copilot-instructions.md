# Haze Heroes: Game Context for Copilot

## 1. Game overview

**Haze Heroes** is a single-player, top-down, pixel-art action roguelite built in HTML, CSS, and vanilla JavaScript. It takes inspiration from the room-clearing combat and run-based upgrades of *Hades II*, but has its own Singapore haze theme, characters, weapons, humour, and progression systems.

The protagonist, Jun Jie, is a patient who leaves a hospital hub to fight smoke monsters called **Hazed**. The main boss is **Sir Stamford Raffles**, presented as a large statue that becomes an enemy. The world uses Singapore locations and local references, including a hospital, a riverside promenade, shophouse square, a bridge, Empress Place, a mamak shop, masks, local food, PSI readings, and Singlish dialogue.

The main loop is: prepare in the hospital hub, equip a mask and weapon, enter a run, clear combat rooms and choose temporary power-ups, buy supplies at the shop, fight Raffles, then return to the hub to spend persistent currency on permanent upgrades and prepare for another run.

## 2. Important clarification about progression and currency

The game has **room progression and PSI difficulty levels**, but it does not use a conventional player XP level system in the core combat loop.

There are two separate currencies:

- **Clean Air** is the persistent meta-progression currency. It can be collected during runs and earned from victories. It is saved between runs and spent on permanent upgrades at Physio Joan in the hospital hub.
- **Coins** are temporary, run-only currency. Enemies and breakable boxes can drop coins. Coins are spent at the Mamak Shop during the current run and are lost when the player dies. They do not directly become permanent upgrade currency.

Temporary **boons** are also separate from permanent upgrades. Boons improve the current run and are cleared when a new run starts.

## 3. Run structure and room progression

A normal run follows this sequence:

1. **Hospital hub:** Talk to hub characters, access systems, purchase permanent upgrades, choose a weapon, and prepare a mask.
2. **Tutorial or opening room:** The first run introduces the basics in the Hospital Driveway. It also introduces the first power-up reward.
3. **Six combat rooms:** Each room contains three waves of enemies. Rooms 1 to 5 draw from Riverside Promenade, Shophouse Square, and The Bridge, with room selection avoiding the same type twice consecutively. Room 6 is always **Empress Place**.
4. **Room reward:** Clear all waves, collect or choose the room reward, and then leave through the opened exit. Room rewards may include Clean Air, a coin pouch, a power-up choice, or **Prata of Power**, which upgrades an existing boon where possible. Room 3 offers a choice between two boon sources, and choosing one removes the other. The sixth room can offer an additional boon.
5. **Mamak Shop:** After the six combat rooms, buy healing or run supplies with coins.
6. **Boss room:** Fight Sir Stamford Raffles. Defeating him ends the run in victory, awards Clean Air, and can award a Hazed Core.

The broad room constants in the code are six fight rooms, shop room 7, boss room 8, and three waves per fight room. Room props and breakable boxes vary by room.

## 4. Combat and controls

Combat is real-time and top-down. The player moves around a room, aims attacks using the mouse or touch aim input, dodges enemy attacks with **Siam**, uses a weapon-specific special, and chooses positioning to avoid being surrounded.

### Keyboard and mouse

- **Move:** `WASD` or arrow keys
- **Aim:** Mouse position
- **Primary attack:** `J` or left mouse button
- **Special attack:** `K` or right mouse button
- **Siam / dash:** `Space` or `Shift`
- **Interact / confirm:** `E` or `Enter`
- **Reroll boon choices:** `R`, when rerolls are available
- **Pause:** `P` or `Esc`
- **Mute / sound:** `M`
- **Fullscreen:** `F` or the fullscreen button

The game also provides touch controls, including a virtual joystick and on-screen attack, special, dash, interact, pause, and reroll buttons. The layout adapts to portrait and landscape orientations.

### Health and survival

Health is represented by **masks**. The base character starts with three full masks, represented internally as six half-mask units. Permanent N95 upgrades increase maximum and starting health. Run-specific effects can also heal or temporarily increase maximum health.

The player gains brief invulnerability after taking a hit. Some boons and upgrades improve defence or dodging. Permanent Extra Mask upgrades and the Mamak Shop's Medicated Oil can provide limited revives during a run. Without an available revive, reaching zero health ends the run.

Siam is a short dash with a cooldown. It is important for escaping attacks and repositioning. Certain boons can extend it, reduce its cooldown, make the player safer during it, or let it damage enemies.

## 5. The three weapons

Weapon selection takes place in the hospital hub. Weapons have different primary and special attack behaviours.

### Chinese Fans

- **Primary:** A close-range, directional fan swing that damages Hazed in front of the player.
- **Special:** Throws a fan-like projectile that travels out and returns.
- **Build identity:** Boons can improve swing reach and width, add control effects, and otherwise strengthen the primary attack.

### Cyclone Vac

- **Primary:** Hold the attack to create a directional suction cone. It pulls Hazed toward the player and damages them over time.
- **Charge:** Holding the attack builds up to three charge levels. Hitting enemies helps build charge faster.
- **Special:** At lower charge, fires an aimed blast. At full charge, fires a longer clean-air beam that damages enemies in its path and consumes charge.
- **Trade-off:** Suction and the beam reduce movement speed, so positioning matters.

### Rotan

- **Unlock:** This weapon is initially locked. Hazed Cores from boss victories progress its unlock; three cores unlock it.
- **Primary:** Close-range cane strikes along a line, using a combo whose third strike is stronger and can control the target.
- **Special:** A rapid sequence of cane strikes known as **Six of the Best**.

## 6. Enemies and environmental threats

There are three ordinary enemy types:

- **Wisp:** Small, fast, and fragile. Pursues the player and lunges after a wind-up. Its individual coin reward is low.
- **Spitter:** Medium-speed, ranged enemy. Keeps some distance and fires ash-like projectiles at the player.
- **Brute:** Large, slow, high-health enemy. Deals heavier damage and can perform a stomp or jump attack with an area effect. When finally dispersed, it can split into two Wisps.

Enemy quantity, health, damage, fog, and reform speed scale with the selected PSI difficulty. A distinctive rule is that Hazed can enter a **puff/reforming state** and return at reduced health after a delay. A hit that appears to disperse an enemy may therefore not be its final removal. Final defeats trigger the actual kill/drop effects.

Rooms also contain obstacles such as umbrellas, trees, and crates. Some block movement or attacks. Boxes can be destroyed for a chance at coins and, more rarely, a healing meal. A power-up can allow certain shots to pass through environmental props. Fog becomes denser at higher PSI levels.

## 7. Power-ups and boons

Boons are random, run-specific upgrades. A boon screen typically presents three options, and the player chooses one. Available rerolls can replace the choices. Some boons are single-rank rare effects, while others can be improved to a second rank. Room rewards and the Mamak Shop can give additional opportunities to gain or improve boons.

Boons are grouped by five themed patrons:

- **PE Teacher, movement and defence:** Roller Skates improves movement and Siam distance; Hula Hoop damages nearby enemies; Shave Bald improves movement and damage while moving; Hit-and-Run adds offensive and defensive effects to Siam; PE Whistle periodically stuns nearby enemies; Chao Keng Warrior blocks the first hit in each room.
- **Hawker Auntie, food and sustain:** Chicken Rice heals masks; Curry Puff increases maximum health for the run; Tapao can heal on enemy defeats; Chilli Padi adds burn damage and can spread fire; Teh Tarik adds a push or damage effect to Siam; Extra Gravy can cause enemies to drop a meal; Gassy retaliates with an area effect when hit.
- **Sim Lim Uncle, gadgets and damage:** Purifier Bot follows and shoots enemies; Short Circuit chains damage to nearby targets; Wall Hacks allows attacks through certain props; Overclock increases damage; LED Headlamp makes illuminated enemies take more damage; Portable Aircon slows nearby enemies; Extended Warranty upgrades a current level-I boon.
- **Tai Chi Ah Gong, primary attack and control:** Long Arm improves attack/suction reach; Wide Sweep widens the attack; Third Form strengthens every third swing and can add a shockwave; Push Hands adds knockback and control; Inner Peace charges the next attack after standing still; Like Water provides a chance to avoid a hit.
- **Kampung Kid, special attacks:** Chapteh Rebound makes specials bounce; Stretchy Rubber increases special range and speed; Five Stones scatters projectiles at the special's endpoint; Full Pocket improves special/charge speed and beam duration; Triple Shot fires three special projectiles at reduced damage each; Kuti-Kuti marks targets for a delayed explosion.

These examples describe intended boon effects in the source. When changing a boon, preserve its current rank cap, eligibility, weapon interactions, and any associated attack logic.

## 8. Mamak Shop and run-only purchases

The shop appears between the combat rooms and the boss. Its base items and effects are:

| Item | Base cost | Effect |
|---|---:|---|
| Milk Candy | 20 coins | Heal one mask |
| Tikam | 50 coins | Get a random available power-up |
| Medicated Oil | 90 coins | Add one revive for the current run |
| Ice Kacang | 45 coins | Heal all masks |
| Kopi Peng | 35 coins | Increase attack speed by 25% for the remainder of the run |

Costs scale with PSI difficulty, so the table gives base costs, not necessarily the price at every difficulty. Shop items and purchases are run-local.

## 9. Boss: Sir Stamford Raffles

Raffles is the main playable boss and has three phases. Boss health and attacks scale with PSI difficulty.

1. **Opening phase:** Raffles uses close-range cane attacks, aimed charges, projectile scrolls, and jump/slam attacks that create area damage or shockwaves.
2. **Flag / immunity phase:** At roughly two-thirds health, Raffles becomes a stone statue and is immune to ordinary damage while planting flags. The player must destroy the flags to break the protection. Flags can periodically produce Wisps, and Raffles attacks while protected. Clearing the flags stuns Raffles and opens a damage window.
3. **Enraged phase:** At roughly one-third health, Raffles becomes more aggressive, with faster or more frequent attacks. Higher PSI difficulty makes the phase more dangerous.

Defeating Raffles records a win, grants Clean Air, and may award a Hazed Core. The first victory unlocks the PSI difficulty kiosk. Cores eventually unlock Rotan.

## 10. PSI difficulty

PSI is an environmental difficulty selector, not a character level. The game has three settings:

- **Moderate:** PSI 78. Lowest enemy count and health scaling, least fog, slowest enemy reform, and the least punishing boss tuning.
- **Unhealthy:** PSI 164. More enemies, increased enemy health and faster reform, thicker fog, and more punishing boss tuning.
- **Very Unhealthy:** PSI 248. Highest enemy count and health scaling, more damage from regular enemies, thickest fog, fastest reform, and more aggressive boss encounters.

The PSI kiosk is unlocked after the first boss victory. Higher difficulties increase risk and improve rewards.

## 11. Permanent upgrades and hub systems

Clean Air is spent on permanent training upgrades through Physio Joan in the hospital hub:

- **N95 Mask:** Raises maximum and starting health.
- **Extra Mask:** Adds a limited revive for each run, per rank.
- **Lung Training:** Reduces Siam cooldown.
- **Strong Grip:** Increases weapon damage.
- **Second Opinion:** Adds boon rerolls per run.

These ranks persist across runs and are separate from temporary boons. The training system also supports resetting upgrades and refunding the spent Clean Air.

The hospital hub contains additional side systems, including NPC dialogue, a quest board and tracker, a records/statistics area, achievements, a pharmacy with Adelle, and cosmetic customization for the character's outfit, mask, hair, hats, and Siam trails. These are additional progression and flavour systems, not the core room-combat loop. The save system tracks items such as Clean Air, upgrades, wins, deaths, weapon unlock progression, quests, achievements, and cosmetics.

## 12. Technical structure and implementation constraints

- This is a **single self-contained HTML file** containing CSS, JavaScript, canvas rendering, UI markup, and embedded base64 image assets. It is not organised as a React, Vue, or other component-framework project.
- The game uses vanilla JavaScript and the HTML Canvas API for rendering a low-resolution pixel-art world. The canvas is internally 320 by 180 and is scaled to the screen.
- Many images are embedded in the `ASSETS` object as large `data:image/png;base64,...` strings. Do not remove, rewrite, truncate, or duplicate these assets as part of unrelated changes.
- Music and sound effects are generated with Web Audio rather than loaded as separate audio files.
- Progress is saved in browser `localStorage`, using the key `hazeheroes.save.v1`.
- The game includes desktop keyboard/mouse input, touch controls, pause/settings, mute, fullscreen, and cheat/debug options.

## 13. Copilot guidance when editing this game

Before changing a mechanic, trace its existing state, update logic, collision/damage code, rendering, UI text, and save implications. Keep mechanics consistent between keyboard/mouse and touch controls. Preserve the one-file deployment format unless a refactor is explicitly requested. Avoid rewriting the large asset block, unrelated systems, or the overall game loop for a small feature. Do not assume the game has conventional XP levels, or that coins are permanent after death. When unsure whether a feature exists, inspect the current implementation rather than inventing it.
