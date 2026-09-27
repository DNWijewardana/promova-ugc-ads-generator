import {
    UploadIcon,
    VideoIcon,
    SparklesIcon,
} from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Upload Your Images',
        desc: 'Upload your product photos and model images as the starting point for your UGC content.'
    },
    {
        icon: <SparklesIcon className="w-6 h-6" />,
        title: 'AI-Powered UGC',
        desc: 'Transform your uploaded images into engaging, realistic UGC-style content with AI.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Photo & Video Ads',
        desc: 'Generate UGC-style photos and short-form video ads ready for your marketing campaigns.'
    }
];

export const plansData = [
    {
        id: 'free',
        name: 'Free',
        price: '$0',
        desc: 'Explore AI-powered UGC creation.',
        credits: '10 credits / month',
        features: [
            '10 monthly credits',
            'Product image uploads',
            'Model image uploads',
            'AI UGC photo generation',
            'Basic video generation',
            'Standard generation speed'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$19',
        desc: 'For creators and growing brands.',
        credits: '100 credits / month',
        features: [
            '100 monthly credits',
            'Product image uploads',
            'Model image uploads',
            'AI UGC photo generation',
            'AI UGC video generation',
            'Higher generation quality',
            'Faster generation speed',
            'No watermark'
        ],
        popular: true
    },
    {
        id: 'business',
        name: 'Business',
        price: '$49',
        desc: 'For brands creating UGC at scale.',
        credits: '500 credits / month',
        features: [
            '500 monthly credits',
            'Everything in Pro',
            'High-volume UGC generation',
            'Premium generation quality',
            'Priority generation',
            'Multiple campaign creation',
            'Commercial usage',
            'Priority support'
        ]
    }
];

export const faqData = [
    {
        question: 'What is Promova?',
        answer: 'Promova is an AI-powered UGC content generator that transforms product photos and model images into engaging UGC-style photos and short videos.'
    },
    {
        question: 'What can I create with Promova?',
        answer: 'You can create UGC-style product photos and short-form video ads using your uploaded product and model images.'
    },
    {
        question: 'How does the UGC generation process work?',
        answer: 'Upload your product photo and model image, choose the type of content you want to create, and let Promova generate your UGC-style photo or video.'
    },
    {
        question: 'What are credits used for?',
        answer: 'Credits are used to generate AI-powered UGC content. Different generations may use different amounts of credits depending on the selected content type and generation settings.'
    },
    {
        question: 'Can I use the generated content for advertising?',
        answer: 'Yes. Pro and Business plans are designed for brands and creators who want to use generated UGC content in their marketing and advertising campaigns.'
    },
    {
        question: 'Can I upgrade my plan later?',
        answer: 'Yes. You can upgrade your Promova plan as your content generation needs grow.'
    }
];

export const footerLinks = [
    {
        title: 'Product',
        links: [
            { name: 'Home', url: '#' },
            { name: 'Features', url: '#' },
            { name: 'Pricing', url: '#' },
            { name: 'How It Works', url: '#' }
        ]
    },
    {
        title: 'Legal',
        links: [
            { name: 'Privacy Policy', url: '#' },
            { name: 'Terms of Service', url: '#' }
        ]
    },
    {
        title: 'Connect',
        links: [
            { name: 'X / Twitter', url: '#' },
            { name: 'Instagram', url: '#' },
            { name: 'GitHub', url: '#' }
        ]
    }
];