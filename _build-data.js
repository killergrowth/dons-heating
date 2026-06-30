'use strict';

// ─────────────────────────────────────────────────────────────────────────────
// CLIENT: Don's Heating & Air
// Site ID: dons-heating
// Built: 2026-06-29 by Brickley Jr.
// Template: contractor-1b (Timnath Painting clean build)
// ─────────────────────────────────────────────────────────────────────────────

const CLIENT = {
  name:        "Don's Heating & Air",
  phone:       '(316) 321-9438',
  phoneTel:    '3163219438',
  email:       'csr@donsheatingandair.com',
  address:     '306 S. Main St.',
  city:        'El Dorado',
  state:       'KS',
  zip:         '67042',
  domain:      'https://www.donsheatingandair.com',
  facebook:    'https://www.facebook.com/DonsHeatingAndAir',  // ⚠️ Verify URL with Tyler B
  instagram:   '',  // ⚠️ Not found — confirm with Stephanie if they have one
  tagline:     'Trusted HVAC Experts Since 1959',
  description: 'Don\'s Heating & Air delivers expert HVAC repair, installation & maintenance across El Dorado, Hillsboro & Emporia, KS. Call (316) 321-9438 for same-day service.',
  placeId:     'ChIJ2Q46PnGzu4cRridw0AfTeV8',
  cfProject:   'dons-heating',
  siteId:      'dons-heating',
};

// ─── COLORS ──────────────────────────────────────────────────────────────────
// Pulled from Don's Heating & Air shield logo
const COLORS = {
  primary:   '#3A5DAE',   // brand blue (shield + snowflakes)
  secondary: '#D4601A',   // brand orange (flames)
  dark:      '#1A1A1A',   // near-black
  light:     '#F4F7FB',   // cool light background
};

// ─── SERVICES ────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    label:   'Furnace Repair',
    slug:    'furnace-repair',
    icon:    'fa-solid fa-fire-flame-curved',
    img:     'gpt2-furnace-burner.png',
    tagline: 'Fast, reliable furnace repair — same-day service across central Kansas.',
  },
  {
    label:   'Furnace Installation',
    slug:    'furnace-installation',
    icon:    'fa-solid fa-house-chimney',
    img:     'gpt2-gas-valve.png',
    tagline: 'High-efficiency furnace installs by licensed HVAC technicians.',
  },
  {
    label:   'AC Repair',
    slug:    'air-conditioning-repair',
    icon:    'fa-solid fa-snowflake',
    img:     'gpt2-condenser-coil.png',
    tagline: 'Cool down fast — expert AC repair with a guaranteed fix.',
  },
  {
    label:   'AC Installation',
    slug:    'air-conditioning-installation',
    icon:    'fa-solid fa-temperature-low',
    img:     'gpt2-copper-tubing.png',
    tagline: 'New AC installs from trusted brands — Rheem, Mitsubishi & more.',
  },
  {
    label:   'Heat Pump Services',
    slug:    'heat-pump-services',
    icon:    'fa-solid fa-arrows-rotate',
    img:     'gpt2-blower-motor.png',
    tagline: 'Heat pump repair, replacement & installation for year-round comfort.',
  },
  {
    label:   'Indoor Air Quality',
    slug:    'indoor-air-quality',
    icon:    'fa-solid fa-wind',
    img:     'gpt2-air-filter.png',
    tagline: 'Breathe easier with whole-home air quality solutions.',
  },
  {
    label:   'Commercial HVAC',
    slug:    'commercial-hvac',
    icon:    'fa-solid fa-building',
    img:     'gpt2-ductwork.png',
    tagline: 'Commercial heating & cooling solutions for businesses across central Kansas.',
  },
];

// ─── CITIES ──────────────────────────────────────────────────────────────────
const CITIES = [
  { label: 'El Dorado',  slug: 'hvac-el-dorado-ks'  },
  { label: 'Hillsboro',  slug: 'hvac-hillsboro-ks'  },
  { label: 'Emporia',    slug: 'hvac-emporia-ks'    },
];

// ─── SERVICE DATA ─────────────────────────────────────────────────────────────
const SERVICE_DATA = {
  'furnace-repair': {
    title:           "Furnace Repair in El Dorado, KS | Don's Heating & Air",
    metaTitle:       "Furnace Repair El Dorado KS | Don's Heating & Air | (316) 321-9438",
    metaDesc:        "Expert furnace repair in El Dorado, Hillsboro & Emporia, KS. Don's Heating & Air has 65+ years of experience. Same-day service. Call (316) 321-9438.",
    tagline:         'Your furnace stopped working. We fix it today.',
    heroTitle:       'Furnace Repair in El Dorado & Central Kansas',
    intro:           `When your furnace breaks down in the middle of a Kansas winter, you need a team you can trust — fast. Don's Heating & Air has been repairing furnaces across El Dorado, Hillsboro, and Emporia since 1959. Our licensed technicians arrive fully stocked and ready to diagnose and fix furnace problems on the spot.\n\nWe service all major furnace brands including Rheem, Mitsubishi, Carrier, Lennox, Trane, and more. Whether you're dealing with a cracked heat exchanger, a faulty ignitor, a blower motor issue, or a thermostat that won't respond — we've seen it all and fixed it all.\n\nEvery repair comes with our workmanship guarantee. If it's not right, we make it right — no questions asked.`,
    process:         `Our furnace repair process is straightforward. We start with a thorough diagnostic to pinpoint the exact issue, then walk you through your options with honest, upfront pricing. No surprises on the bill. Once you approve the repair, we get to work immediately using quality parts that are built to last. Before we leave, we test the full system to make sure everything is running safely and efficiently.`,
    whyUs:           `Don's Heating & Air has served central Kansas since 1959 — that's over 65 years of earning trust one repair at a time. Our technicians are licensed, background-checked, and trained on all major brands. We show up on time, tell you exactly what's wrong, and fix it right the first time. We back every repair with a workmanship warranty and offer Synchrony financing for larger jobs.`,
    timeline:        `Most furnace repairs are completed in a single visit, typically 1–3 hours. If a specialty part is needed, we'll let you know the estimated delivery time upfront. We offer same-day appointments for urgent situations — don't spend the night in the cold.`,
    relatedServices: [
      { label: 'Furnace Installation', slug: 'furnace-installation', desc: 'Sometimes a repair isn\'t the right answer. We\'ll give you an honest assessment and handle the full replacement if needed.' },
      { label: 'Heat Pump Services',   slug: 'heat-pump-services',   desc: 'Heat pumps are an efficient alternative that heat and cool year-round. Ask us if one is right for your home.' },
    ],
    faqs: [
      { q: 'How do I know if my furnace needs repair or replacement?', a: 'A good rule of thumb: if the furnace is under 15 years old and the repair cost is less than half of a new unit, repair is usually the better value. We\'ll give you an honest recommendation either way.' },
      { q: 'Do you offer same-day furnace repair?', a: 'Yes — we offer same-day appointments for urgent situations. Call (316) 321-9438 and we\'ll get someone out as fast as possible.' },
      { q: 'What brands of furnaces do you repair?', a: 'We service all major brands including Rheem, Mitsubishi, Carrier, Lennox, Trane, Goodman, and more.' },
      { q: 'Is the repair work guaranteed?', a: 'Yes. Every furnace repair comes with our workmanship warranty. If the same issue recurs, we\'ll come back and make it right at no additional charge.' },
      { q: 'Do you offer financing for furnace repairs?', a: 'We offer financing through Synchrony for larger repairs and replacements. Ask us about options when you call.' },
    ],
  },

  'furnace-installation': {
    title:           "Furnace Installation in El Dorado, KS | Don's Heating & Air",
    metaTitle:       "Furnace Installation El Dorado KS | Don's Heating & Air | (316) 321-9438",
    metaDesc:        "New furnace installation in El Dorado, Hillsboro & Emporia, KS. High-efficiency systems. Don's Heating & Air — 65+ years serving central Kansas. Call (316) 321-9438.",
    tagline:         'Right-sized, right-priced — furnaces installed by experts.',
    heroTitle:       'Furnace Installation in El Dorado & Central Kansas',
    intro:           `Replacing an aging furnace is one of the best investments you can make in your home's comfort and energy efficiency. Don's Heating & Air has been installing furnaces across El Dorado, Hillsboro, and Emporia since 1959. We carry and install top brands including Rheem and Mitsubishi, and we size every system to your specific home — no guesswork.\n\nOur team walks you through all your options: single-stage, two-stage, or modulating furnaces, gas or electric, standard or high-efficiency. We explain the tradeoffs in plain English so you can make a confident decision. Then we handle everything from removal of your old unit to startup and commissioning of the new one.`,
    process:         `We start with a load calculation to right-size the new furnace for your home. Then we walk you through equipment options and pricing, pull any required permits, and schedule the install at your convenience. Installation typically takes 4–8 hours. Before we leave, we test the full system and show you how to operate and maintain your new furnace.`,
    whyUs:           `With over 65 years of experience, Don's has installed thousands of furnaces across central Kansas. We carry premium equipment, hold all required licenses, and back every installation with a manufacturer warranty plus our own workmanship guarantee. Synchrony financing is available to make the investment manageable.`,
    timeline:        `Most installations are completed in a single day. We\'ll confirm the timeline when you schedule and keep you updated if anything changes.`,
    relatedServices: [
      { label: 'Furnace Repair',     slug: 'furnace-repair',     desc: 'Not sure if you need a repair or a replacement? We\'ll give you an honest recommendation.' },
      { label: 'AC Installation',    slug: 'air-conditioning-installation', desc: 'Bundle a new furnace with a new AC system for maximum savings and efficiency.' },
    ],
    faqs: [
      { q: 'How long does a furnace last?', a: 'Most furnaces last 15–20 years with regular maintenance. If yours is approaching that age and needing frequent repairs, replacement is usually the smarter move.' },
      { q: 'What size furnace do I need?', a: 'We perform a proper load calculation based on your home\'s square footage, insulation, windows, and local climate. Oversized and undersized units both cause problems — we get it right.' },
      { q: 'Do you offer high-efficiency furnaces?', a: 'Yes — we carry high-efficiency units with AFUE ratings up to 98%. These cost more upfront but can significantly reduce your monthly heating bill.' },
      { q: 'Will you remove my old furnace?', a: 'Yes. Disposal of the old unit is included in every installation.' },
      { q: 'Do you offer financing?', a: 'We offer Synchrony financing to help spread out the cost of a new system. Ask for details when you call.' },
    ],
  },

  'air-conditioning-repair': {
    title:           "AC Repair in El Dorado, KS | Don's Heating & Air",
    metaTitle:       "AC Repair El Dorado KS | Don's Heating & Air | (316) 321-9438",
    metaDesc:        "Fast AC repair in El Dorado, Hillsboro & Emporia, KS. All major brands. Guaranteed work. Don's Heating & Air — 65+ years of trusted service. Call (316) 321-9438.",
    tagline:         'AC down in a Kansas summer? We\'ll fix it fast.',
    heroTitle:       'AC Repair in El Dorado & Central Kansas',
    intro:           `A Kansas summer without air conditioning isn't just uncomfortable — it's a health risk. Don's Heating & Air has been fixing air conditioners across El Dorado, Hillsboro, and Emporia since 1959. Our technicians are trained on all major brands and arrive with a truck stocked with the most common parts, so most repairs are done in a single visit.\n\nWhether your AC is blowing warm air, running but not cooling, making strange noises, or not turning on at all — we diagnose the problem fast and give you honest, upfront pricing before we start any work.`,
    process:         `We start with a full system diagnostic — checking refrigerant levels, electrical components, the compressor, capacitors, contactors, and the evaporator and condenser coils. We tell you exactly what\'s wrong and what it\'ll cost to fix it before we touch anything. Once approved, we get to work and test the full system before we leave.`,
    whyUs:           `Don's Heating & Air has 65+ years of AC repair experience across central Kansas. We guarantee our repair work, show up on time, and treat your home with respect. Synchrony financing is available for larger repairs and replacements.`,
    timeline:        `Most AC repairs are completed in a single 1–3 hour visit. If a special part is needed, we\'ll give you an ETA and schedule a follow-up as quickly as possible.`,
    relatedServices: [
      { label: 'AC Installation',   slug: 'air-conditioning-installation', desc: 'If repair doesn\'t make sense, we\'ll walk you through replacement options at no pressure.' },
      { label: 'Heat Pump Services', slug: 'heat-pump-services',           desc: 'Heat pumps heat and cool — a smart alternative to separate AC and furnace systems.' },
    ],
    faqs: [
      { q: 'Why is my AC running but not cooling?', a: 'Common causes include low refrigerant, a dirty evaporator coil, a failing capacitor, or a clogged filter. Our diagnostic will pinpoint the issue fast.' },
      { q: 'Do you offer 24/7 emergency AC repair?', a: 'Yes — we offer emergency service for urgent situations. Call (316) 321-9438.' },
      { q: 'How often should I have my AC serviced?', a: 'We recommend an annual tune-up in the spring before the cooling season. Regular maintenance catches small issues before they become big repairs.' },
      { q: 'Is the repair guaranteed?', a: 'Yes. Every repair comes with our workmanship warranty. If the same issue returns, we\'ll fix it.' },
    ],
  },

  'air-conditioning-installation': {
    title:           "AC Installation in El Dorado, KS | Don's Heating & Air",
    metaTitle:       "AC Installation El Dorado KS | Don's Heating & Air | (316) 321-9438",
    metaDesc:        "New AC installation in El Dorado, Hillsboro & Emporia, KS. Top brands. Expert install. Don's Heating & Air — trusted since 1959. Call (316) 321-9438.",
    tagline:         'Stay cool all summer with a new AC system.',
    heroTitle:       'AC Installation in El Dorado & Central Kansas',
    intro:           `When your air conditioner has reached the end of its life — or you\'re building or renovating — Don's Heating & Air is the team to call. We\'ve been installing AC systems across El Dorado, Hillsboro, and Emporia since 1959. We carry top brands like Rheem and Mitsubishi and size every system precisely for your home.\n\nWe handle central air systems, ductless mini-splits, and package units — whatever fits your home and budget. Our technicians pull all required permits, complete a clean installation, and thoroughly test the system before leaving.`,
    process:         `We start with a site assessment and load calculation to determine the right equipment size. We present your options with clear pricing, then schedule the installation. Most installs take 4–8 hours. We handle everything including line set, electrical connections, refrigerant charging, and startup testing.`,
    whyUs:           `Over 65 years of experience, top-brand equipment, licensed technicians, and our workmanship guarantee. We also offer Synchrony financing to make a new system affordable.`,
    timeline:        `Most AC installations are completed in a single day.`,
    relatedServices: [
      { label: 'AC Repair',          slug: 'air-conditioning-repair', desc: 'Not sure if you need a repair or a new system? We\'ll give you an honest answer.' },
      { label: 'Furnace Installation', slug: 'furnace-installation', desc: 'Bundle your AC and furnace replacement to maximize savings.' },
    ],
    faqs: [
      { q: 'What AC brands do you install?', a: 'We primarily install Rheem and Mitsubishi systems but can source other brands on request.' },
      { q: 'How long does AC installation take?', a: 'Most installations are completed in one day, typically 4–8 hours.' },
      { q: 'What size AC do I need?', a: 'We perform a precise load calculation based on your home\'s square footage, insulation, and other factors. Proper sizing is critical for efficiency and comfort.' },
      { q: 'Do you offer financing?', a: 'Yes — Synchrony financing is available. Ask for details when you call.' },
    ],
  },

  'heat-pump-services': {
    title:           "Heat Pump Services in El Dorado, KS | Don's Heating & Air",
    metaTitle:       "Heat Pump Repair & Installation El Dorado KS | Don's Heating & Air",
    metaDesc:        "Heat pump repair, installation & maintenance in El Dorado, Hillsboro & Emporia, KS. Expert service since 1959. Call Don's Heating & Air: (316) 321-9438.",
    tagline:         'Year-round comfort from one efficient system.',
    heroTitle:       'Heat Pump Services in El Dorado & Central Kansas',
    intro:           `Heat pumps are one of the most efficient ways to heat and cool your home year-round — one system, two seasons. Don's Heating & Air has been installing, repairing, and maintaining heat pumps across El Dorado, Hillsboro, and Emporia since 1959. Whether you need emergency heat pump repair or you\'re considering installing one for the first time, our team has the experience to handle it.\n\nWe service all major heat pump brands including Rheem, Mitsubishi ductless systems, and geothermal heat pumps.`,
    process:         `For repairs, we run a full diagnostic to identify the issue — refrigerant levels, reversing valve, compressor, fan motors, electrical components. For installations, we assess your home, recommend the right system, and complete the full install including any ductwork modifications needed.`,
    whyUs:           `Decades of heat pump experience across Kansas. We service all brands, back our work with a guarantee, and offer Synchrony financing for installations.`,
    timeline:        `Repairs are typically completed same-day. Installations take 1–2 days depending on the system type.`,
    relatedServices: [
      { label: 'Furnace Repair',    slug: 'furnace-repair',    desc: 'Need a backup heating system? We handle furnace repair and installation too.' },
      { label: 'AC Installation',   slug: 'air-conditioning-installation', desc: 'Traditional central air is still a great option for many Kansas homes.' },
    ],
    faqs: [
      { q: 'Do heat pumps work in cold Kansas winters?', a: 'Modern heat pumps work effectively down to temperatures around 0°F. For extreme cold snaps, a dual-fuel system pairs a heat pump with a gas furnace backup for maximum efficiency.' },
      { q: 'Do you service geothermal heat pumps?', a: 'Yes — we service geothermal systems in addition to standard air-source heat pumps.' },
      { q: 'How long do heat pumps last?', a: 'With regular maintenance, heat pumps typically last 15–20 years.' },
    ],
  },

  'indoor-air-quality': {
    title:           "Indoor Air Quality Solutions in El Dorado, KS | Don's Heating & Air",
    metaTitle:       "Indoor Air Quality El Dorado KS | Don's Heating & Air | (316) 321-9438",
    metaDesc:        "Improve your home\'s air quality with IAQ solutions from Don's Heating & Air. Serving El Dorado, Hillsboro & Emporia, KS since 1959. Call (316) 321-9438.",
    tagline:         'Breathe cleaner air in your home starting today.',
    heroTitle:       'Indoor Air Quality Solutions in El Dorado & Central Kansas',
    intro:           `The air inside your home can be 2–5 times more polluted than outdoor air. Dust, pollen, mold spores, pet dander, and VOCs circulate through your HVAC system every time it runs. Don's Heating & Air offers a full range of indoor air quality solutions to help your family breathe cleaner, healthier air year-round.\n\nWe serve homeowners across El Dorado, Hillsboro, and Emporia, KS, and have been trusted for IAQ solutions since our founding in 1959.`,
    process:         `We start with an assessment of your current system and your specific concerns — allergies, odors, humidity, or general air quality. We recommend solutions that fit your home and budget, then handle the full installation and testing.`,
    whyUs:           `65+ years of HVAC expertise applied to indoor air quality. We recommend only what your home actually needs and back every installation with our workmanship guarantee.`,
    timeline:        `Most IAQ product installations are completed in a single visit, typically 1–3 hours.`,
    relatedServices: [
      { label: 'Furnace Repair',    slug: 'furnace-repair',    desc: 'A well-maintained furnace is the foundation of good IAQ.' },
      { label: 'AC Repair',         slug: 'air-conditioning-repair', desc: 'Your AC system plays a key role in humidity control and air filtration.' },
    ],
    faqs: [
      { q: 'What indoor air quality products do you install?', a: 'We install whole-home air purifiers, UV germicidal lights, humidifiers, dehumidifiers, advanced media filters, and energy recovery ventilators (ERVs).' },
      { q: 'How do I know if I need an air purifier?', a: 'Signs include frequent allergies, visible dust, musty odors, or a family member with asthma or respiratory issues. We\'ll help you identify the right solution.' },
    ],
  },

  'commercial-hvac': {
    title:           "Commercial HVAC in El Dorado, KS | Don's Heating & Air",
    metaTitle:       "Commercial HVAC El Dorado KS | Don's Heating & Air | (316) 321-9438",
    metaDesc:        "Commercial HVAC repair & installation in El Dorado, Hillsboro & Emporia, KS. Don's Heating & Air — trusted by local businesses since 1959. Call (316) 321-9438.",
    tagline:         'Keeping Kansas businesses comfortable, year-round.',
    heroTitle:       'Commercial HVAC Services in El Dorado & Central Kansas',
    intro:           `Don's Heating & Air has been serving commercial clients across El Dorado, Hillsboro, and Emporia since 1959. We understand that a failed HVAC system isn't just an inconvenience for a business — it's a liability. Our commercial team responds fast, works efficiently, and minimizes disruption to your operations.\n\nWe handle commercial heating, cooling, and ventilation for retail spaces, offices, restaurants, warehouses, and light industrial facilities.`,
    process:         `Our commercial process begins with a site assessment to understand your building's layout, load requirements, and existing equipment. We provide a detailed proposal with equipment options and timeline, then execute the project with minimal disruption to your business.`,
    whyUs:           `Over 65 years serving central Kansas businesses. Licensed, insured, and experienced with commercial-scale systems. Honest pricing and guaranteed work.`,
    timeline:        `Timeline varies by project scope. We\'ll provide a detailed schedule during the proposal phase.`,
    relatedServices: [
      { label: 'Furnace Installation', slug: 'furnace-installation', desc: 'Commercial heating systems installed and serviced by our expert team.' },
      { label: 'AC Installation',      slug: 'air-conditioning-installation', desc: 'Commercial cooling solutions for businesses of all sizes.' },
    ],
    faqs: [
      { q: 'Do you service all types of commercial buildings?', a: 'We work with retail, office, restaurant, warehouse, and light industrial properties across central Kansas.' },
      { q: 'Do you offer maintenance contracts for commercial clients?', a: 'Yes — ask about Don\'s Performance Plans for scheduled maintenance and priority service.' },
      { q: 'Are you licensed for commercial HVAC work?', a: 'Yes — our technicians hold all required Kansas HVAC licenses for commercial installations and service.' },
    ],
  },
};

// ─── CITY DATA ────────────────────────────────────────────────────────────────
const CITY_DATA = {
  'hvac-el-dorado-ks': {
    label:     'El Dorado',
    state:     'KS',
    metaTitle: "HVAC El Dorado KS | Heating & Cooling Repair | Don's Heating & Air",
    metaDesc:  "Expert HVAC repair, installation & maintenance in El Dorado, KS. Don's Heating & Air — your local HVAC company since 1959. Call (316) 321-9438.",
    heroTitle: "HVAC Service in El Dorado, KS — Trusted Since 1959",
    intro:     `El Dorado is home. Don's Heating & Air has been the go-to HVAC company for El Dorado, KS homeowners and businesses since 1959 — that's over 65 years of keeping this community comfortable through every Kansas winter and summer.\n\nOur main office is right here on S. Main St., so when you call, a local technician responds. No call centers, no strangers — just your neighbors showing up with the tools and experience to fix it right the first time.`,
    body:      `From the older homes in the historic district to newer builds in the surrounding Butler County area, we've worked on every type of heating and cooling system El Dorado has. We service all major brands, offer same-day appointments, and back every job with our workmanship guarantee.\n\nEl Dorado residents can also take advantage of Synchrony financing for larger system replacements, and ask about our Don's Performance Plans for scheduled annual maintenance.`,
    services:  ['furnace-repair', 'furnace-installation', 'air-conditioning-repair', 'air-conditioning-installation', 'heat-pump-services', 'indoor-air-quality', 'commercial-hvac'],
    faqs: [
      { q: 'Do you offer emergency HVAC service in El Dorado?', a: 'Yes - we offer 24/7 emergency service. Call (316) 321-9438 any time.' },
      { q: 'How quickly can you respond in El Dorado?', a: 'Our main office is on S. Main St. in El Dorado - we typically respond same-day.' },
      { q: 'What HVAC brands do you service in El Dorado?', a: 'We service all major brands including Rheem, Mitsubishi, Carrier, Lennox, and Trane.' },
      { q: 'Do you offer maintenance plans in El Dorado?', a: 'Yes - ask about our Performance Plans for annual scheduled maintenance with priority service.' },
    ],
  },

  'hvac-hillsboro-ks': {
    label:     'Hillsboro',
    state:     'KS',
    metaTitle: "HVAC Hillsboro KS | Heating & Cooling Service | Don's Heating & Air",
    metaDesc:  "Heating & cooling repair and installation in Hillsboro, KS. Don's Heating & Air serves Marion County from our Hillsboro office. Call (620) 947-2247.",
    heroTitle: "HVAC Service in Hillsboro, KS — Local Experts You Can Trust",
    intro:     `Don's Heating & Air has served Hillsboro and the surrounding Marion County area for decades from our local office at 607 N. Ash St. When your furnace goes out in the middle of a Hillsboro winter, you don't want to wait on a company from Wichita to make the drive. You want someone who's already here.\n\nOur Hillsboro team provides the same quality service as our El Dorado headquarters — licensed technicians, guaranteed work, and honest pricing.`,
    body:      `We handle all HVAC needs for Hillsboro homeowners and businesses, including furnace repair and installation, AC repair and installation, heat pump services, and commercial HVAC. Ask about our Don's Performance Plans for scheduled maintenance to keep your system running efficiently year-round.`,
    services:  ['furnace-repair', 'furnace-installation', 'air-conditioning-repair', 'air-conditioning-installation', 'heat-pump-services', 'commercial-hvac'],
    faqs: [
      { q: 'Do you have a local office in Hillsboro?', a: 'Yes - our Hillsboro office is at 607 N. Ash St. Call (620) 947-2247.' },
      { q: 'Do you offer emergency HVAC service in Hillsboro?', a: 'Yes - 24/7 emergency service available. Call (316) 321-9438.' },
      { q: 'What HVAC services do you offer in Hillsboro?', a: 'Furnace repair, furnace installation, AC repair, AC installation, heat pump services, and commercial HVAC.' },
    ],
  },

  'hvac-emporia-ks': {
    label:     'Emporia',
    state:     'KS',
    metaTitle: "HVAC Emporia KS | Heating & Cooling Repair | Don's Heating & Air",
    metaDesc:  "HVAC repair & installation in Emporia, KS. Don's Heating & Air serves Lyon County from our Emporia office at 421 E. 6th St. Call (620) 261-5885.",
    heroTitle: "HVAC Service in Emporia, KS — Three Locations, One Trusted Name",
    intro:     `Don's Heating & Air is proud to serve Emporia and Lyon County from our office at 421 E. 6th St. Whether you're a homeowner dealing with a failed furnace or a business owner with a commercial HVAC issue, our Emporia team is ready to respond quickly with the expertise of a company that's been doing this since 1959.\n\nWith three office locations across central Kansas, we can often get to you faster than any single-location competitor.`,
    body:      `Emporia customers get access to our full range of HVAC services — furnace repair and installation, AC repair and installation, heat pump services, and indoor air quality solutions. Ask about Don's Performance Plans for annual maintenance that keeps your system running efficiently all year.`,
    services:  ['furnace-repair', 'furnace-installation', 'air-conditioning-repair', 'air-conditioning-installation', 'heat-pump-services', 'indoor-air-quality', 'commercial-hvac'],
    faqs: [
      { q: 'Do you have a local office in Emporia?', a: 'Yes - our Emporia office is at 421 E. 6th St. Call (620) 261-5885.' },
      { q: 'Do you offer emergency HVAC service in Emporia?', a: 'Yes - 24/7 emergency service available. Call (316) 321-9438.' },
      { q: 'What HVAC services are available in Emporia, KS?', a: 'Full range: furnace repair/installation, AC repair/installation, heat pump services, indoor air quality, and commercial HVAC.' },
    ],
  },
};

// ─── REVIEWS ─────────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    author:   'Cathy L.',
    rating:   5,
    date:     '2025-04-16',
    text:     "Don's Heating & Air has taken care of all of our H&A needs for many years. Their prices are fair, and service calls are scheduled quickly. The repair technicians are knowledgeable and prompt. Their excellence and fairness throughout the years has made us loyal and happy customers. I highly recommend them.",
  },
  {
    author:   'Paul T.',
    rating:   5,
    date:     '2025-03-06',
    text:     "Don's Heating and Air are very Professional. Have had them on several Jobs and one coming up. Always on time and Quality Workmanship.",
  },
  {
    author:   'Betty A.',
    rating:   5,
    date:     '2024-09-05',
    text:     'Had my yearly maintenance check up for my ancient heating system and was pleased and impressed with the young man who did the work. I have relied on Don\'s Heating for years and have always been impressed with their work.',
  },
  {
    author:   'Robin C.',
    rating:   5,
    date:     '2024-06-14',
    text:     "As always, Don's Heating & Air goes above and beyond! With their friendly staff and their continued reliable, thorough, and professional service, I am a very happy customer!",
  },
  {
    author:   'Rachel S.',
    rating:   5,
    date:     '2024-05-03',
    text:     'ALLEN and ERIC, totally amazing. Very kind and pleasant. I could not have asked for better people to put in the A/C and Furnace. Very professional, cleaned up and took everything with them. Thanks, you both are ROCK STARS!',
  },
  {
    author:   'Kim C.',
    rating:   5,
    date:     '2024-02-04',
    text:     "Don's is the best heating and cooling company in the State!! They are honest and reliable people that go the extra mile for their customers.",
  },
  {
    author:   'Gary T.',
    rating:   5,
    date:     '2023-12-20',
    text:     'Came out for annual furnace cleaning and inspection. The appointment was for a particular time rather than a two or four hour window like most companies and they showed up on time. Service was thorough and the technician was friendly and professional. Excellent overall service.',
  },
];

// ─── AGGREGATE RATING ────────────────────────────────────────────────────────
// ⚠️ Update with real GBP numbers — pull from Google Business Profile dashboard
const AGGREGATE_RATING = {
  ratingValue:  '4.9',
  reviewCount:  '200',
};

// ─── HOMEPAGE CONTENT ────────────────────────────────────────────────────────
const HOMEPAGE = {
  heroTitle:    "El Dorado's Trusted HVAC Experts — Since 1959",
  heroSubtitle: 'Heating & cooling repair, installation & maintenance across El Dorado, Hillsboro & Emporia, KS.',
  heroCTA:      'Call Now: (316) 321-9438',
  heroImg:      'service/service-man.jpg',
  aboutTitle:   'Central Kansas\'s HVAC Company — 65+ Years Strong',
  aboutBody:    `Don's Heating & Air has been keeping families and businesses comfortable across central Kansas since 1959. What started as a single location in El Dorado has grown into three offices — El Dorado, Hillsboro, and Emporia — serving homeowners and businesses across Butler, Marion, and Lyon counties.\n\nWe're not a call center or a franchise. We're your neighbors. Our technicians live and work in the same communities they serve, which means faster response times, local knowledge, and a genuine stake in doing the job right.\n\nEvery repair comes with our workmanship guarantee. Every installation uses quality equipment from trusted brands like Rheem and Mitsubishi. And when cost is a concern, Synchrony financing is available to help.`,
  aboutImg:     'service/service-man-bg.jpg',
};

// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────
const ABOUT = {
  metaTitle:  "About Don's Heating & Air | HVAC Experts Since 1959 | El Dorado, KS",
  metaDesc:   "Learn about Don's Heating & Air — El Dorado's trusted HVAC company since 1959. Three locations. Licensed technicians. Guaranteed work. Call (316) 321-9438.",
  heroTitle:  "About Don's Heating & Air",
  body:       `Don's Heating & Air was founded in 1959 in El Dorado, Kansas — and we've been earning the trust of central Kansas families and businesses ever since. Over six decades of service means we've seen it all, fixed it all, and built a reputation that speaks for itself.\n\nToday, we operate from three locations: our original headquarters at 306 S. Main St. in El Dorado, a second office in Hillsboro, and a third in Emporia. This three-location footprint lets us respond faster and serve a larger area without sacrificing the local, personal service that made us who we are.\n\nOur team of licensed HVAC technicians handles everything from emergency furnace repair to full system replacements — residential and commercial. We carry Rheem and Mitsubishi equipment, offer Synchrony financing, and back every job with our workmanship guarantee.\n\nWe also offer Don's Performance Plans — scheduled maintenance agreements that keep your system running efficiently, extend its lifespan, and give you priority service when something goes wrong.\n\nIf you live or work in Butler, Marion, or Lyon County and need an HVAC company you can trust — you've found it.`,
  img:        'service/service-man.jpg',
};

// ─── CONTACT PAGE ────────────────────────────────────────────────────────────
const CONTACT = {
  metaTitle:  "Contact Don's Heating & Air | HVAC Service in El Dorado, KS",
  metaDesc:   "Contact Don's Heating & Air for HVAC repair, installation & maintenance. Three locations in El Dorado, Hillsboro & Emporia, KS. Call (316) 321-9438.",
  heroTitle:  "Contact Don's Heating & Air",
  hours:      [
    'Monday – Friday: 7:30am – 5:00pm',
    'Saturday: By appointment',
    'Sunday: Emergency service available',
    '24/7 Emergency Line: (316) 321-9438',
  ],
  mapsEmbed:  'https://maps.google.com/maps?q=306+S+Main+St+El+Dorado+KS+67042&output=embed',
};

// ─────────────────────────────────────────────────────────────────────────────
// EXPORTS — build.js reads these
// ─────────────────────────────────────────────────────────────────────────────
module.exports = {
  CLIENT,
  COLORS,
  SERVICES,
  CITIES,
  SERVICE_DATA,
  CITY_DATA,
  REVIEWS,
  AGGREGATE_RATING,
  HOMEPAGE,
  ABOUT,
  CONTACT,
};




