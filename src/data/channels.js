const channels = [
    {
        category: '🔮 Info',
        channels: [
            { name: 'Home', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/' },
            { name: 'Announcements', unreadCount: 1, ping: 1, isActive: false, navigateTo: '/announcements' },
            { name: 'About', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/about' },
        ],
    },
    {
        category: '⭐ General',
        channels: [
            { name: 'General', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/general' },
            { name: 'Drawings', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/drawings' },
        ],
    },
    {
        category: '📂 Projects',
        channels: [
            { name: 'Discord Cards', unreadCount: 1, ping: 0, isActive: false, navigateTo: '/discordcards' },
            { name: 'Elina', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/elina' },
            { name: 'Electron Screenshot', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/electronscreenshot' },
            { name: 'PingPal', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/pingpal' },
            { name: 'Pinscrape', unreadCount: 1, ping: 0, isActive: false, navigateTo: '/pinscrape' },
            { name: 'Cordle', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/cordle' },
            { name: 'Timely', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/timely' },
            { name: 'EmojiCo', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/emojico' },
            { name: 'StreamSavers', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/streamsavers' },
            { name: 'Minikey', unreadCount: 0, ping: 0, isActive: false, navigateTo: 's/minikey' },
            { name: 'Type3D', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/type3d' },
            { name: 'Pixit', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/pixit' },
            { name: 'Pptgen', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/pptgen' },
        ],
    },
    {
        category: '📦 NPM packages',
        channels: [
            { name: 'AnyAnime', unreadCount: 1, ping: 0, isActive: false, navigateTo: '/anyanime' },
            { name: 'Image2Url', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/image2url' },
            { name: 'XLSX-Mongo', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/xlsx-mongo' },
            { name: 'JNG', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/jng' },
            { name: 'CustomJS', unreadCount: 0, ping: 0, isActive: false, navigateTo: '/customjs' },
        ],
    },
];

// let id = 1;

// for (let category of channels) {
//     for (let channel of category.channels) {
//         channel.id = id++;
//     }
// }


export default channels;