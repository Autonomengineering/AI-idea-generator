// script.js
const products = [
  'washing machine', 'toothbrush', 'baking sheet', 'conditioner', 'makeup', 
  'dresser', 'set of measuring cups', 'laptop', 'sunglasses', 'perfume', 'smartphone', 
  'smartwatch', 'tablet', 'e-reader', 'desktop computer', 'set of headphones', 
  'bluetooth speaker', 'camera', 'drone', 'VR headset', 'gaming console', 
  'television', 'refrigerator', 'microwave', 'oven', 'dishwasher', 'air conditioner', 
  'heater', 'blender', 'coffee maker', 'toaster', 'electric kettle', 'food processor', 
  'juicer', 'slow cooker', 'pressure cooker', 'rice cooker', 'grill', 'frying pan', 
  'saucepan', 'knife set', 'cutting board', 'mixing bowl', 'spatula', 'peeler', 
  'can opener', 'muffin tin', 'loaf pan', 'cake stand', 'pie dish', 'cookbook', 
  'kitchen timer', 'apron', 'set of oven mitts', 'dish rack', 'trash can', 'recycling bin', 
  'vacuum cleaner', 'broom', 'dustpan', 'mop', 'bucket', 'sponge', 'cleaning spray', 
  'set of paper towels', 'dish soap', 'laundry detergent', 'fabric softener', 'iron', 
  'ironing board', 'clothes hanger', 'wardrobe', 'bed', 'mattress', 'pillow', 
  'blanket', 'duvet', 'sheet set', 'towel set', 'bath mat', 'shower curtain', 
  'shampoo', 'soap', 'body wash', 'lotion', 'deodorant', 'razor', 'shaving cream', 
  'hair dryer', 'hair straightener', 'curling iron', 'nail polish', 'jewelry', 
  'watch', 'handbag', 'wallet', 'backpack', 'luggage', 'umbrella'
];
// Add your list of products
const constraints = [
  'can predict the future', 'has emotions', 'can talk', 'learns from interactions', 
  'adapts to user preferences', 'provides personalized recommendations', 'understands natural language',
  'recognizes facial expressions', 'detects emotional tone', 'offers intelligent assistance',
  'automates routine tasks', 'manages smart home devices', 'supports voice commands',
  'translates languages in real-time', 'optimizes energy usage', 'monitors health metrics',
  'provides fitness coaching', 'navigates autonomously', 'controls other devices',
  'analyzes data patterns', 'predicts maintenance needs', 'enhances security measures',
  'facilitates remote control', 'engages in conversation', 'understands context',
  'generates reports', 'simplifies complex tasks', 'assists in learning and education',
  'creates personalized shopping experiences', 'optimizes logistics', 'enhances gaming experiences',
  'manages financial transactions', 'customizes entertainment content', 'supports augmented reality',
  'integrates with social media', 'tracks environmental conditions', 'responds to gestures',
  'automates scheduling and reminders', 'improves accessibility for disabled users', 'detects anomalies',
  'facilitates artistic creation', 'supports collaborative work', 'guides through interactive tutorials',
  'enhances virtual meetings', 'assists in medical diagnosis', 'personalizes marketing campaigns',
  'optimizes website experiences', 'analyzes customer feedback', 'recommends travel destinations'
];
// Add your AI-related constraints

document.getElementById('regenerate').addEventListener('click', () => {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomConstraint = constraints[Math.floor(Math.random() * constraints.length)];
    document.getElementById('product').textContent = randomProduct;
    document.getElementById('constraint').textContent = randomConstraint;
});

document.getElementById('about').addEventListener('click', () => {
    const infoDiv = document.getElementById('info');
    if (infoDiv.classList.contains('hidden')) {
        infoDiv.classList.remove('hidden');
    } else {
        infoDiv.classList.add('hidden');
    }
});

// Initial load
document.getElementById('regenerate').click();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("about");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


