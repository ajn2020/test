export type RecyclingServices = {
  title: string;
  description: string;
  content: string;
  infographic: string;
};

export const houseRecyclingServices = [
  {
    title: "Red Recycling Box",
    description:
      "The red recycling box is used to recycle plastic and metal cans.",
    content:
      "**How:** The recycling process takes place weekly with the collection between 7am and 5pm. " +
      "You should place the box at the front edge of your property by 7am and ensure that all items have been washed, squashed and with lids included for plastics.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1597/plastic_recycling_in_your_red_box)",
    infographic: "/red_recycling_box_infographic.png",
  },
  /*{
    //Version 2 - small content changes
    title: "Red Recycling Box",
    description:
      "The red recycling box is used to recycle plastic and metal cans.",
    content:
      "**What can be recycled:** bottles, drink cans, food tins, aluminium foil, ...  \n" +
      "&nbsp;  \n" +
      "**How:** The recycling process takes place weekly with the collection between 7am and 5pm. " +
      "You should place the box at the front edge of your property by 7am " +
      "and ensure that all items have been washed, squashed and for plastics - with lids included.  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** plastic carrier bags, plastic wrapping and packaging, hard plastics, batteries.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1597/plastic_recycling_in_your_red_box)",
  },*/
  /*{
    //Version 3 - structural changes
    title: "Plastic Recycling and Metal Recycling",
    description:
      "Plastic can be recycled using the following bins: red box, green communal bins with red lid, green wheelie bin with red sticker.",
    content:
      "**What can be recycled:** bottles, aluminium foil, ...  \n" +
      "&nbsp;  \n" +
      "**How:** The recycling process takes place weekly with the collection between 7am and 5pm. " +
      "You should place the box at the front edge of your property by 7am " +
      "and ensure that all items have been washed, squashed and with lids included.  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** plastic carrier bags, plastic wrapping and packaging, hard plastics.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1597/plastic_recycling_in_your_red_box)",
  },
  {
    //Version 3 - structural changes
    title: "Metal Recycling",
    description:
      "Metal can be recycled using the following bins: red box, green wheelie bin with grey sticker.",
    content:
      "**What can be recycled:** drink cans, food tins, ...  \n" +
      "&nbsp;  \n" +
      "**How:** The recycling process takes place weekly with the collection between 7am and 5pm. " +
      "You should place the box at the front edge of your property by 7am " +
      "and ensure that all items have been washed and squashed.  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** batteries.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1597/plastic_recycling_in_your_red_box)",
  },*/
  {
    title: "Blue Recycling Box",
    description: "The blue recycling box is used to recycle card and paper.",
    content:
      "**How:** The recycling process takes place weekly with the collection between 7am and 5pm. " +
      "You should place the box at the front edge of your property by 7am and ensure that all items have been loosely placed inside your box.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1598/paper_and_card_recycling_in_your_blue_box)",
    infographic: "/blue_recycling_box_infographic.png",
  },
  {
    title: "Green Recycling Box",
    description:
      "The green recycling box is used to recycle glass bottles and jars.",
    content:
      "**How:** The recycling process takes place weekly with the collection between 7am and 5pm. " +
      "You should place the box at the front edge of your property by 7am.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1599/glass_recycling_in_your_green_box)",
    infographic: "/green_recycling_box_infographic.png",
  },
  {
    title: "Food Waste Bin",
    description: "The food waste bin is used to recycle food waste.",
    content:
      "**How:** The recycling process takes place weekly with the collection between 7am and 5pm. " +
      "You will be provided two bins with lids - a 7-litre caddy for kitchen use and a 25-litre collection bin. " +
      "You should move all your food waste into the 25-litre collection bin once your 7-litre caddy is full. " +
      "The 25-litre collection bin should be locked (such that the handle is left either in the upright position or completely forward and down) and placed at the front edge of your property by 7am to be collected. " +
      "Both bins should be lined with a biodegradable food waste bag. " +
      "Do not use plastic bags in either of the bins.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1602/food_waste_recycling)",
    infographic: "/food_waste_bin_infographic.png",
  },
  {
    title: "Brown Wheeled Bin",
    description: "The brown wheeled bin is used to recycle garden waste.",
    content:
      "**What can be recycled:** This service mainly collects grass cuttings, leaves, twigs/small branches and fallen fruit.  \n" +
      "&nbsp;  \n" +
      "**How:** This is an annual subscription service ([sign-up here](https://www.hounslow.gov.uk/xfp/form/429)) that lasts from 1st April to 31st March for a fee of £65.00. " +
      "You will be provided with a 240-litre brown bin. " +
      "Alternatively, a £35.40 half-year subscription can be made that runs between 1st October and 31st March. " +
      "You can cancel the service anytime but a refund will only be issued within the first 14 days of your subscription and only if you have not yet received the bin/s (or sacks). " +
      "A total of 25 collections will be made for a yearly subscription (i.e. takes place every two weeks excluding the Christmas period). " +
      "On the collection day, you must place the items before 7.00am at the gate of your property.  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** Things that cannot be collected involve soil, large branches (diameter > 2 cm), plastic flower pots and noxious weeds.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20002/recycling_and_rubbish/1830/garden_waste_collections_202223)",
  },
  {
    title: "Black Wheeled Bin",
    description:
      "The black wheeled bin is used to dispose of rubbish that cannot be recycled.",
    content:
      "**What can be collected:** This service mainly collects plastic carrier bags, plastic wrapping and packaging, polystyrene, nappies and so on.  \n" +
      "&nbsp;  \n" +
      "**How:** The collection process takes place every two weeks with the collection between 7am and 5pm. " +
      "You will be given a 140-litre wheelie bin that should be placed at the front edge of your property by 7am to be collected. " +
      "There are alternative options where you can present your waste in either a larger 240-litre bin (subject to approval) or up to 3 black sacks.  \n" +
      "&nbsp;  \n" +
      "**What cannot be collected:** It is not recommended to put any recyclable items into this bin.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20002/recycling_and_rubbish/1603/household_waste)",
  },
  {
    title: "Tied Carrier Bag (1)",
    description:
      "A tied carrier bag can be used to recycle textiles and clothing.",
    content:
      "**What can be recycled:** This service mainly collects bags, clothes, curtains, paired shoes and so on.  \n" +
      "&nbsp;  \n" +
      "**How:** The recycling process takes place weekly with the collection between 7am and 5pm. " +
      "You should place the tied carrier bag at the front edge of your property by 7am and ensure it is placed alongside your other recycling boxes.  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** Things that cannot be collected involve duvets and pillows (their covers and cases are still acceptable). " +
      "There are additional opportunities to get your textile waste recycled, which are TRAID charity and Salvation Army Textile Banks.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1600/clothing_textiles_and_shoe_recycling)",
  },
  {
    title: "Tied Carrier Bag (2)",
    description:
      "A tied carrier bag can be used to recycle small electrical items.",
    content:
      "**What can be recycled:** This service mainly collects telephones, cameras, CD/DVD players, hairdryers and so on.  \n" +
      "&nbsp;  \n" +
      "**How:** The recycling process takes place weekly with the collection between 7am and 5pm. " +
      "You should place the tied carrier bag at the front edge of your property by 7am and ensure it is placed alongside your other recycling boxes. " +
      "Moreover, items must have electrical leads contained inside the bag and batteries removed.  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** Any items that cannot fit in a standard carrier bag or include batteries will not be recycled. " +
      "You can also utilise TRAID charity as an alternative opportunity to get your small electrical appliances recycled.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1601/small_electrical_and_electronic_appliance_recycling)",
  },
  {
    title: "Bulky Waste Collection Service",
    description:
      "The Bulky Waste Collection Service is used to remove any household waste and large items that are not suitable for the bin rubbish collection.",
    content:
      "**What can be recycled:** This service mainly collects broken furniture, fridges, unused bedding, bicycles and so on.  \n" +
      "&nbsp;  \n" +
      "**How:** It is recommended to wait until you have 5 items to recycle, as this is what the minimum charge applies to (£40 for individuals and £70 for landlords). " +
      "The price then gets incremented per additional item (£8 for individuals and £14 for landlords). " +
      "The day you wish your items to be collected can be booked in advance via phone (call 020 8583 5555 and select option 1), with the process taking place anytime between 7am and 3pm on that day. " +
      "Please place your items at the agreed collection point (i.e. either the front garden or driveway).  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** Things that cannot be collected involve garden waste, pianos and tyres. " +
      "Items placed at locations other than the agreed upon collection point and heavy items (i.e. cannot be lifted by two people) will not be collected either.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20002/recycling_and_rubbish/30/tidy_town_bulky_waste_collection)",
  },
  {
    title: "Hounslow Furniture Recycling Project",
    description:
      "The Hounslow Furniture Recycling Project is dedicated to redistributing reusable furniture and electrical household appliances to those who may otherwise struggle to afford such items.",
    content:
      "**What can be recycled:** This service mainly collects mattresses, wardrobes, fridges, microwave ovens and so on.  \n" +
      "&nbsp;  \n" +
      "**How:** The collection can be booked via phone (020 8814 2225) or email (collections@hounslowct.org.uk) and will run during weekdays between 10am to 1.30pm and 2pm to 4.30pm. " +
      "The price starts at £10 for 5 items that are in good condition and with a Fire Regulations Label attached for upholstered items (those that do not meet either of the criteria will not be collected). " +
      "The recycled items are all displayed in a showroom in Isleworth. " +
      "There are two daily deliveries and the items on display change every day. " +
      "It is recommended to call the project team (020 8892 4916) in advance to visit the showroom and purchase a particular item if you need to travel a long distance.  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** Small electrical items and flat packed and dismantled furniture cannot be collected.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://hounslowconnect.com/services/furniture-recycling)",
  },
  {
    title: "Clinical Waste Collection Service",
    description:
      "The Clinical Waste Collection Service can be used to collect waste that is considered as hazardous and can be infectious to others.",
    content:
      "**What can be collected:** This service mainly collects hypodermic needles, blood, human tissue and any equipment left over after treatment or operation.  \n" +
      "&nbsp;  \n" +
      "**How:** This is a free-of-charge service but approval must be granted by your Medical Professional via filling out a [clinical waste referral form](https://www.hounslow.gov.uk/downloads/file/555/clinical_waste_referral_form), or asking your Medical Professional to put you in contact with Medisort directly. " +
      "Items will be collected together with other types of household waste on the pre-booked collection day but they should be separately placed for safety reasons and free from excess liquid.  \n" +
      "&nbsp;  \n" +
      "**What cannot be collected:** Nappies, sanitary protection and incontinence pads will not be collected. " +
      "This type of waste is classed as offensive or hygiene waste. " +
      "They are predominantly non-infectious, hence do not require treatment. " +
      "These items should be securely tied in a black sack and placed with your household rubbish on the morning of your rubbish collection day. " +
      "Please ensure this type of waste is properly wrapped and free from excess liquid.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20002/recycling_and_rubbish/1527/clinical_waste)",
  },
];

export const flatRecyclingServices = [
  {
    title: "Plastic Communal Bin (Red)",
    description: "The plastic communal bin (red) is used to recycle plastic.",
    content:
      "**How:** The recycling process takes place weekly. " +
      "Please ensure that all items have been washed, squashed, with lids included, and loosely placed inside the bin.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/24/recycling_and_rubbish_collections_from_your_flat)",
    infographic: "/plastic_communal_bin_(red)_infographic.png",
  },
  {
    title: "Metal Communal Bin (Grey)",
    description:
      "The metal communal bin (grey) is used to recycle tins, cans and aerosols.",
    content:
      "**How:** The recycling process takes place weekly. " +
      "Please ensure that all items have been loosely placed inside the bin.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/24/recycling_and_rubbish_collections_from_your_flat)",
    infographic: "/metal_communal_bin_(grey)_infographic.png",
  },
  {
    title: "Card Communal Bin (Blue)",
    description: "The card communal bin (blue) is used to recycle card.",
    content:
      "**How:** The recycling process takes place weekly. " +
      "Please ensure that all items have been flattened and loosely placed inside the bin.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/24/recycling_and_rubbish_collections_from_your_flat)",
    infographic: "/card_communal_bin_(blue)_infographic.png",
  },
  {
    title: "Paper Communal Bin (Blue)",
    description: "The paper communal bin (blue) is used to recycle paper.",
    content:
      "**How:** The recycling process takes place weekly. " +
      "Please ensure that all items have been loosely placed inside the bin.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/24/recycling_and_rubbish_collections_from_your_flat)",
    infographic: "/paper_communal_bin_(blue)_infographic.png",
  },
  {
    title: "Glass Communal Bin (Teal)",
    description:
      "The glass communal bin (teal) is used to recycle glass bottles and jars.",
    content:
      "**How:** The recycling process takes place weekly. " +
      "Please ensure that all items have been loosely placed inside the bin.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/24/recycling_and_rubbish_collections_from_your_flat)",
    infographic: "/glass_communal_bin_(teal)_infographic.png",
  },
  {
    title: "Food Communal Bin (Green)",
    description: "The food communal bin (green) is used to recycle food waste.",
    content:
      "**How:** The recycling process takes place weekly. " +
      "You will be provided with a 7-litre caddy for kitchen use. " +
      "You should move all your food waste into the communal food bin once your caddy is full. " +
      "The caddy should be lined with a biodegradable food waste bag. " +
      "Do not use plastic bags. " +
      "Excess liquids and oils should be drained from the food waste beforehand, otherwise they will not be collected.  \n" +
      "&nbsp;  \n" +
      "**Note:** Not all flats have a food communal bin. " +
      "If your block or development does not currently have a food waste service and you are interested in this please email recycling@hounslow.gov.uk with your managing agents details for us to make contact.",
    infographic: "/food_communal_bin_(green)_infographic.png",
  },
  {
    title: "General Waste Communal Bin",
    description:
      "The general waste communal bin is used to dispose of rubbish that cannot be recycled.",
    content:
      "**What can be collected:** This service mainly collects plastic carrier bags, plastic wrapping and packaging, polystyrene, nappies and so on.  \n" +
      "&nbsp;  \n" +
      "**How:** The collection process takes place every ??? weeks.  \n" +
      "&nbsp;  \n" +
      "**What cannot be collected:** It is not recommended to put any recyclable items into this bin.",
  },
  {
    title: "Textiles",
    description: "Textiles and clothing can be donated to charity.",
    content:
      "**What can be donated:** Textiles such as bags, clothes, curtains, paired shoes and so on.  \n" +
      "&nbsp;  \n" +
      "**How:** You can utilise TRAID charity and Salvation Army Textile Banks to get your textiles recycled.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/24/recycling_and_rubbish_collections_from_your_flat/2)",
  },
  {
    title: "Small Electrical Items",
    description: "Small electrical items can be donated to charity.",
    content:
      "**What can be donated:** Small electrical items such as telephones, cameras, CD/DVD players, hairdryers and so on.  \n" +
      "&nbsp;  \n" +
      "**How:** You can utilise TRAID charity as an opportunity to get your small electrical appliances recycled.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/24/recycling_and_rubbish_collections_from_your_flat/2)",
  },
  {
    title: "Bulky Waste Collection Service",
    description:
      "The Bulky Waste Collection Service is used to remove any household waste and large items that are not suitable for the bin rubbish collection.",
    content:
      "**What can be recycled:** This service mainly collects broken furniture, fridges, unused bedding, bicycles and so on.  \n" +
      "&nbsp;  \n" +
      "**How:** It is recommended to wait until you have 5 items to recycle, as this is what the minimum charge applies to (£40 for individuals and £70 for landlords). " +
      "The price then gets incremented per additional item (£8 for individuals and £14 for landlords). " +
      "The day you wish your items to be collected can be booked in advance via phone (call 020 8583 5555 and select option 1), with the process taking place anytime between 7am and 3pm on that day. " +
      "Please place your items at the agreed collection point (you will need your managing agent's approval to store your waste in a communal area before calling us to book a collection). " +
      "Please clearly label the items with the date of collection and service request number which will be provided upon booking.  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** Things that cannot be collected include garden waste, pianos and tyres. " +
      "Items placed at locations other than the agreed upon collection point and heavy items (i.e. cannot be lifted by two people) will not be collected either.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20002/recycling_and_rubbish/30/tidy_town_bulky_waste_collection)",
  },
  {
    title: "Hounslow Furniture Recycling Project",
    description:
      "The Hounslow Furniture Recycling Project is dedicated to redistributing reusable furniture and electrical household appliances to those who may otherwise struggle to afford such items.",
    content:
      "**What can be recycled:** This service mainly collects mattresses, wardrobes, fridges, microwave ovens and so on.  \n" +
      "&nbsp;  \n" +
      "**How:** The collection can be booked via phone (020 8814 2225) or email (collections@hounslowct.org.uk) and will run during weekdays between 10am to 1.30pm and 2pm to 4.30pm. " +
      "The price starts at £10 for 5 items that are in good condition and with a Fire Regulations Label attached for upholstered items (those that do not meet either of the criteria will not be collected). " +
      "The recycled items are all displayed in a showroom in Isleworth. " +
      "There are two daily deliveries and the items on display change every day. " +
      "It is recommended to call the project team (020 8892 4916) in advance to visit the showroom and purchase a particular item if you need to travel a long distance.  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** Small electrical items and flat packed and dismantled furniture cannot be collected.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://hounslowconnect.com/services/furniture-recycling)",
  },
  {
    title: "Clinical Waste Collection Service",
    description:
      "The Clinical Waste Collection Service can be used to collect waste that is considered as hazardous and can be infectious to others.",
    content:
      "**What can be collected:** This service mainly collects hypodermic needles, blood, human tissue and any equipment left over after treatment or operation.  \n" +
      "&nbsp;  \n" +
      "**How:** This is a free-of-charge service but approval must be granted by your Medical Professional via filling out a [clinical waste referral form](https://www.hounslow.gov.uk/downloads/file/555/clinical_waste_referral_form), or asking your Medical Professional to put you in contact with Medisort directly. " +
      "Items will be collected together with other types of household waste on the pre-booked collection day but they should be separately placed for safety reasons and free from excess liquid.  \n" +
      "&nbsp;  \n" +
      "**What cannot be collected:** Nappies, sanitary protection and incontinence pads will not be collected. " +
      "This type of waste is classed as offensive or hygiene waste. " +
      "They are predominantly non-infectious, hence do not require treatment. " +
      "These items should be securely tied in a black sack and placed with your household rubbish on the morning of your rubbish collection day. " +
      "Please ensure this type of waste is properly wrapped and free from excess liquid.  \n" +
      "&nbsp;  \n" +
      "[Link for more details.](https://www.hounslow.gov.uk/info/20002/recycling_and_rubbish/1527/clinical_waste)",
  },
];
