const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')

const { UsernameChecker } = require('username-checker');
const usernameChecker = new UsernameChecker();


const app = express()

const allServices = [
'facebook',
'twitter',
'youtube',
'about',
'askfm',
'bandcamp',
'basecamphq',
'behance',
'bitbucket',
'blogspot',
'buzzfeed',
'cash',
'codecademy',
'contently',
'dailymotion',
'designspiration',
'deviantart',
'disqus',
'dribbble',
'ebay',
'etsy',
'eyeem',
'fanpop',
'fiverr',
'flickr',
'flipboard',
'github',
'gravatar',
'houzz',
'hubpages',
'ifttt',
'instructables',
'instagram',
'kanoworld',
'keybase',
'kik',
'kongregate',
'last',
'livejournal',
'linkedin',
'medium',
'mix',
'myshopify',
'newgrounds',
'pandora',
'pastebin',
'patreon',
'paypal',
'photobucket',
'pinterest',
'producthunt',
'reddit',
'reverbnation',
'roblox',
'slack',
'slideshare',
'soundcloud',
'spotify',
'steamcommunity',
'telegram',
'tiktok',
'trakt',
'tripit',
'tumblr',
'twitch',
'venmo',
'vimeo',
'vk',
'wattpad',
'wikia',
'wordpress',
'ycombinator',
'yelp',
'younow'
]

app.get('/', (req, res) => {
    res.json('Welcome to my Social Username Checker API')
})

async function stall(stallTime = 3000) {
    await new Promise(resolve => setTimeout(resolve, stallTime))
}

//This get availabilty for all networks
app.get('/socials/:username', (req, res) => {
    let socialUN = [];
    un = req.params.username

    //res.send(allSocials(un))
    let allSN = allServices.length;
    // console.log(allSN);
    allServices.forEach( network => {
        usernameChecker.isAvailable(network, un).then((a) => {
            allSN--;
            console.log(a);
            // Sort
            if(a.service == 'facebook'){
                socialUN[0] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.facebook.com/',
                    cat: 'social_media_networking'
                }
            } else if(a.service == 'instagram'){
                socialUN[1] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.instagram.com/',
                    cat: 'social_media_networking'
                }
            } else if(a.service == 'twitter'){
                socialUN[2] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://twitter.com/',
                    cat: 'social_media_networking'
                }
            } else if(a.service == 'whatsapp'){
                socialUN[3] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.whatsapp.com/',
                    cat: 'social_media_networking'
                }
            } else if(a.service == 'tiktok'){
                socialUN[4] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.tiktok.com/',
                    cat: 'social_media_networking'
                }
            } else if(a.service == 'reddit'){
                socialUN[5] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.reddit.com/',
                    cat: 'social_media_networking'
                }
            } else if(a.service == 'pinterest'){
                socialUN[6] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.pinterest.com/',
                    cat: 'social_media_networking'
                }
            } else if(a.service == 'tumblr'){
                socialUN[7] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.tumblr.com/',
                    cat: 'social_media_networking'
                }
            } else if(a.service == 'vk'){
                socialUN[8] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://vk.com/',
                    cat: 'social_media_networking'
                }
            } else if(a.service == 'livejournal'){
                socialUN[9] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.livejournal.com/',
                    cat: 'social_media_networking'
                }
            } else if(a.service == 'younow'){
                socialUN[10] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.younow.com/',
                    cat: 'social_media_networking'
                }
            } else if(a.service == 'telegram'){
                socialUN[11] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://telegram.org/',
                    cat: 'social_media_networking'
                }
            } else if(a.service == 'kik'){
                socialUN[11] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.kik.com/',
                    cat: 'social_media_networking'
                }
            } else if(a.service == 'youtube'){
                socialUN[12] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.youtube.com/',
                    cat: 'video_music_streaming'
                }
            } else if(a.service == 'vimeo'){
                socialUN[13] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.vimeo.com/',
                    cat: 'video_music_streaming'
                }
            } else if(a.service == 'dailymotion'){
                socialUN[14] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.dailymotion.com/',
                    cat: 'video_music_streaming'
                }
            } else if(a.service == 'twitch'){
                socialUN[15] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.twitch.tv/',
                    cat: 'video_music_streaming'
                }
            } else if(a.service == 'spotify'){
                socialUN[16] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.spotify.com/',
                    cat: 'video_music_streaming'
                }
            } else if(a.service == 'pandora'){
                socialUN[17] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.pandora.com/',
                    cat: 'video_music_streaming'
                }
            } else if(a.service == 'soundcloud'){
                socialUN[18] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://soundcloud.com/',
                    cat: 'video_music_streaming'
                }
            } else if(a.service == 'bandcamp'){
                socialUN[19] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://bandcamp.com/',
                    cat: 'video_music_streaming'
                }
            } else if(a.service == 'roblox'){
                socialUN[20] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.roblox.com/',
                    cat: 'video_music_streaming'
                }
            } else if(a.service == 'etsy'){
                socialUN[21] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.etsy.com/',
                    cat: 'ecommerce_services'
                }
            } else if(a.service == 'ebay'){
                socialUN[22] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.ebay.com/',
                    cat: 'ecommerce_services'
                }
            } else if(a.service == 'fiverr'){
                socialUN[23] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.fiverr.com/',
                    cat: 'ecommerce_services'
                }
            } else if(a.service == 'myshopify'){
                socialUN[24] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.shopify.com/',
                    cat: 'ecommerce_services'
                }
            } else if(a.service == 'houzz'){
                socialUN[25] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.houzz.com/',
                    cat: 'ecommerce_services'
                }
            } else if(a.service == 'dribbble'){
                socialUN[26] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://dribbble.com/',
                    cat: 'creative_design'
                }
            } else if(a.service == 'behance'){
                socialUN[27] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.behance.net/',
                    cat: 'creative_design'
                }
            } else if(a.service == 'designspiration'){
                socialUN[28] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.designspiration.net/',
                    cat: 'creative_design'
                }
            } else if(a.service == 'medium'){
                socialUN[29] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://medium.com/',
                    cat: 'content_creation_sharing'
                }
            } else if(a.service == 'buzzfeed'){
                socialUN[30] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.buzzfeed.com/',
                    cat: 'content_creation_sharing'
                }
            } else if(a.service == 'blogspot'){
                socialUN[31] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.blogspot.com/',
                    cat: 'content_creation_sharing'
                }
            } else if(a.service == 'wattpad'){
                socialUN[32] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.wattpad.com/',
                    cat: 'content_creation_sharing'
                }
            } else if(a.service == 'deviantart'){
                socialUN[33] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.deviantart.com/',
                    cat: 'content_creation_sharing'
                }
            } else if(a.service == 'slideshare'){
                socialUN[34] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.slideshare.net/',
                    cat: 'content_creation_sharing'
                }
            } else if(a.service == 'flickr'){
                socialUN[35] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.flickr.com/',
                    cat: 'content_creation_sharing'
                }
            } else if(a.service == 'photobucket'){
                socialUN[36] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://photobucket.com/',
                    cat: 'content_creation_sharing'
                }
            } else if(a.service == 'wordpress'){
                socialUN[37] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://wordpress.com/',
                    cat: 'content_creation_sharing'
                }
            } else if(a.service == 'github'){
                socialUN[38] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://github.com/',
                    cat: 'collaboration_development'
                }
            } else if(a.service == 'slack'){
                socialUN[39] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://slack.com/',
                    cat: 'collaboration_development'
                }
            } else if(a.service == 'basecamphq'){
                socialUN[40] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://basecamp.com/',
                    cat: 'collaboration_development'
                }
            } else if(a.service == 'bitbucket'){
                socialUN[41] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://bitbucket.org/',
                    cat: 'collaboration_development'
                }
            } else if(a.service == 'codecademy'){
                socialUN[42] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.codecademy.com/',
                    cat: 'collaboration_development'
                }
            } else if(a.service == 'producthunt'){
                socialUN[43] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.producthunt.com/',
                    cat: 'collaboration_development'
                }
            } else if(a.service == 'paypal'){
                socialUN[44] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.paypal.com/',
                    cat: 'finance_transactions'
                }
            } else if(a.service == 'venmo'){
                socialUN[45] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.venmo.com/',
                    cat: 'finance_transactions'
                }
            } else if(a.service == 'patreon'){
                socialUN[46] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.patreon.com/',
                    cat: 'finance_transactions'
                }
            } else if(a.service == 'cash'){
                socialUN[47] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://cash.app/',
                    cat: 'finance_transactions'
                }
            } else if(a.service == 'yelp'){
                socialUN[48] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.yelp.com/',
                    cat: 'feedback_reviews'
                }
            } else if(a.service == 'tripit'){
                socialUN[49] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.tripit.com/',
                    cat: 'feedback_reviews'
                }
            } else if(a.service == 'kongregate'){
                socialUN[50] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.kongregate.com/',
                    cat: 'gaming_entertainment'
                }
            } else if(a.service == 'newgrounds'){
                socialUN[51] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.newgrounds.com/',
                    cat: 'gaming_entertainment'
                }
            } else if(a.service == 'steamcommunity'){
                socialUN[52] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://steamcommunity.com',
                    cat: 'gaming_entertainment'
                }
            } else if(a.service == 'disqus'){
                socialUN[53] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://disqus.com/',
                    cat: 'forums_discussions'
                }
            } else if(a.service == 'ycombinator'){
                socialUN[54] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://news.ycombinator.com/',
                    cat: 'forums_discussions'
                }
            } else if(a.service == 'about'){
                socialUN[55] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://about.me/',
                    cat: 'personal_branding_portfolio'
                }
            } else if(a.service == 'gravatar'){
                socialUN[56] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://en.gravatar.com/',
                    cat: 'personal_branding_portfolio'
                }
            } else if(a.service == 'contently'){
                socialUN[57] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://contently.com/',
                    cat: 'personal_branding_portfolio'
                }
            } else if(a.service == 'mix'){
                socialUN[58] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://mix.com/',
                    cat: 'miscellaneous_mixed_use'
                }
            } else if(a.service == 'eyeem'){
                socialUN[59] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.eyeem.com/',
                    cat: 'miscellaneous_mixed_use'
                }
            } else if(a.service == 'ifttt'){
                socialUN[60] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://ifttt.com/',
                    cat: 'miscellaneous_mixed_use'
                }
            } else if(a.service == 'last'){
                socialUN[61] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.last.fm/',
                    cat: 'miscellaneous_mixed_use'
                }
            } else if(a.service == 'trakt'){
                socialUN[62] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://trakt.tv/',
                    cat: 'miscellaneous_mixed_use'
                }
            } else if(a.service == 'fanpop'){
                socialUN[63] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.fanpop.com/',
                    cat: 'miscellaneous_mixed_use'
                }
            } else if(a.service == 'kanoworld'){
                socialUN[64] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.kano.me/',
                    cat: 'miscellaneous_mixed_use'
                }
            } else if(a.service == 'reverbnation'){
                socialUN[65] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.reverbnation.com/',
                    cat: 'miscellaneous_mixed_use'
                }
            } else if(a.service == 'instructables'){
                socialUN[66] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.instructables.com/',
                    cat: 'miscellaneous_mixed_use'
                }
            } else if(a.service == 'wikia'){
                socialUN[67] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://www.fandom.com/',
                    cat: 'miscellaneous_mixed_use'
                }
            } else if(a.service == 'keybase'){
                socialUN[68] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://keybase.io/',
                    cat: 'miscellaneous_mixed_use'
                }
            } else if(a.service == 'hubpages'){
                socialUN[69] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://hubpages.com/',
                    cat: 'miscellaneous_mixed_use'
                }
            } else if(a.service == 'askfm'){
                socialUN[70] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://ask.fm/',
                    cat: 'miscellaneous_mixed_use'
                }
            } else if(a.service == 'pastebin'){
                socialUN[71] = {
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://pastebin.com',
                    cat: 'miscellaneous_mixed_use'
                }
            } else{
                socialUN.push({
                    service: a.service ,
                    is_available: a.available,
                    url: 'https://'+ a.url.split('/')[2]            
                })
            }
            
            if (allSN == 0) {
                res.send(socialUN);
            }
        })
    })
})  

//This get availabilty per network
app.get('/socials/:network/:username', (req, res) => {

    const sn = req.params.network
    const un = req.params.username
    const socialUN = []

    usernameChecker.isAvailable(sn, un).then((a) => {
        console.log(a.service + " " + a.available);
        if(a.service == 'basecamphq' || a.service == 'blogspot' || a.service == 'tumblr'
            || a.service == 'contently' || a.service == 'livejournal' || a.service == 'newgrounds'
            || a.service == 'slack' || a.service == 'wordpress' || a.service == 'yelp'){
            socialUN.push({
                service: a.service ,
                is_available: a.available,
                url: a.url.split('rmonaro.')[1]
            })
        } else if(a.service == 'myshopify'){
            socialUN.push({
                service: a.service ,
                is_available: a.available,
                url: 'https://shopify.com'            
            })

        } else {
            socialUN.push({
                service: a.service ,
                is_available: a.available,
                url: 'https://'+ a.url.split('/')[2]            
            })
        }
        res.json(socialUN)
    }).catch(err => console.log(err));       
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))