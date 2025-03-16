export default function getTabStringName(tab) {
    switch (tab) {
        case 'gadget':
            return "Gadget";
        case 'ai-website':
            return "AI Website";
        case 'apps':
            return "Apps";
        case 'tips':
            return "Tips & Tricks";
        default:
            return "Gadget";
    }
}