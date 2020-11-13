const mapping = {
    '्': '',
    '़': '',
    'ँ': '',

    'अ': 'a',
    'आ': 'aa',
    'इ': 'i',
    'ई': 'ee',
    'उ': 'u',
    'ऊ': 'oo',
    'ऋ': 'ri',
    'ए': 'e',
    'ऐ': 'ai',
    'ओ': 'o',
    'औ': 'au',
    'अं': 'aṃ',
    'अः': 'aha',
  
    'ा': 'aa',
    'ि': 'i',
    'ी': 'ee',
    'ु': 'u',
    'ू': 'oo',
    'ृ': 'ri',
    'े': 'e',
    'ै': 'ai',
    'ो': 'o',
    'ौ': 'au',
    'ं': 'n',
    'ः': 'ha',

    'क' : 'k',
    'ख' : 'kh',
    'ग' : 'g',
    'घ' : 'gh',
    'ङ' : 'ṅ',
    'च' : 'ch',
    'छ' : 'chh',
    'ज' : 'j',
    'झ' : 'jh',
    'ञ' : 'ñ',
    'ट' : 'ṭ',
    'ठ' : 'ṭh',
    'ड' : 'ḍ',
    'ढ' : 'ḍh',
    'ण' : 'ṇ',
    'त' : 't',
    'थ' : 'th',
    'द' : 'd',
    'ध' : 'dh',
    'न' : 'n',
    'प' : 'p',
    'फ' : 'ph',
    'ब' : 'b',
    'भ' : 'bh',
    'म' : 'm',
    'य' : 'y',
    'र' : 'r',
    'ल' : 'l',
    'व' : 'v',
    'श' : 'sh',
    'ष' : 'ṣ',
    'स' : 's',
    'ह' : 'h',
    'क्ष' : 'ksh',
    'त्र' : 'tr',
    'ज्ञ' : 'gy',
  
    'क्' : 'k',
    'ख्' : 'kh',
    'ग्' : 'g',
    'घ्' : 'gh',
    'ङ्' : 'ṅ',
    'च्' : 'ch',
    'छ्' : 'chh',
    'ज्' : 'j',
    'झ्' : 'jh',
    'ञ्' : 'ñ',
    'ट्' : 'ṭ',
    'ठ्' : 'ṭh',
    'ड्' : 'ḍ',
    'ढ्' : 'ḍh',
    'ण्' : 'ṇ',
    'त्' : 't',
    'थ्' : 'th',
    'द्' : 'd',
    'ध्' : 'dh',
    'न्' : 'n',
    'प्' : 'p',
    'फ्' : 'ph',
    'ब्' : 'b',
    'भ्' : 'bh',
    'म्' : 'm',
    'य्' : 'y',
    'र्' : 'r',
    'ल्' : 'l',
    'व्' : 'v',
    'श्' : 'sh',
    'ष्' : 'ṣ',
    'स्' : 's',
    'ह्' : 'h',
    'क्ष्' : 'ksh',
    'त्र्' : 'tr',
    'ज्ञ्' : 'gy'
};

const consonants = {
    'क' : 'k',
    'ख' : 'kh',
    'ग' : 'g',
    'घ' : 'gh',
    'ङ' : 'ṅ',
    'च' : 'ch',
    'छ' : 'chh',
    'ज' : 'j',
    'झ' : 'jh',
    'ञ' : 'ñ',
    'ट' : 'ṭ',
    'ठ' : 'ṭh',
    'ड' : 'ḍ',
    'ढ' : 'ḍh',
    'ण' : 'ṇ',
    'त' : 't',
    'थ' : 'th',
    'द' : 'd',
    'ध' : 'dh',
    'न' : 'n',
    'प' : 'p',
    'फ' : 'ph',
    'ब' : 'b',
    'भ' : 'bh',
    'म' : 'm',
    'य' : 'y',
    'र' : 'r',
    'ल' : 'l',
    'व' : 'v',
    'श' : 'sh',
    'ष' : 'ṣ',
    'स' : 's',
    'ह' : 'h',
    'क्ष' : 'ksh',
    'त्र' : 'tr',
    'ज्ञ' : 'gy'
};

const matras = {
    'ा': 'aa',
    'ि': 'i',
    'ी': 'ii',
    'ु': 'u',
    'ू': 'uu',
    'ृ': 'ri',
    'े': 'e',
    'ै': 'ai',
    'ो': 'o',
    'ौ': 'au',
    'ं': 'aṃ',
    'ः': 'aha'
};
const halant = '्';
const nuqta = '़';

const elems = document.getElementsByTagName("*");

chrome.storage.sync.get('mode', function(data) {
    let mode = 0;
    if (data.mode !== undefined && data.mode !== null) {
        mode = data.mode;
    }
    
    if (mode !== 1) {
        for (let i = 0; i < elems.length; i++) {
            let elem = elems[i];
    
            for (let j = 0; j < elem.childNodes.length; j++) {
                let node = elem.childNodes[j];
    
                if (node.nodeType === Node.TEXT_NODE) {
                    const oldText = node.nodeValue;
                    let newText = "";

                    let index = 0;
                    for (const char of oldText) {
                        const translit = mapping[char];
                        const nextChar = index >= oldText.length - 1 ? ' ' : oldText.charAt(index + 1);
    
                        if (translit !== undefined) {
                            if (mode === 0) {
                                if (nextChar === nuqta) {
                                    if (char === 'ज') {
                                        newText += 'z';
                                    } else if (char === 'फ') {
                                        newText += 'f';
                                    } else if (char === 'क') {
                                        newText += 'q';
                                    } else if (char === 'ख') {
                                        newText += 'qh';
                                    }
                                } else {
                                    newText += translit;
                                }
                                if (consonants[char] !== undefined && matras[nextChar] === undefined && nextChar !== halant) {
                                    newText += 'a';
                                }
                            } else if (mode === 2) {
                                newText += char + translit;
                            }
                        } else {
                            newText += char;
                        }
                        index += 1;
                    }
    
                    if (oldText != newText) {
                        elem.replaceChild(document.createTextNode(newText), node);
                    }
                }
            }
        }
    }
});

