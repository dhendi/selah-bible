import React from 'react';
import { assetUrl } from '../../utils/assetUrl';

const PORTRAIT_URL_MAP: Record<string, { src: string; alt: string }> = {
  'portrait-moses': {
    src: '/images/portrait-moses.jpg',
    alt: 'Portrait of Moses',
  },
  'portrait-aaron': {
    src: '/images/portrait-aaron.jpg',
    alt: 'Portrait of Aaron the High Priest',
  },
  'portrait-ruth': {
    src: '/images/portrait-ruth.jpg',
    alt: 'Portrait of Ruth',
  },
  'portrait-naomi': {
    src: '/images/portrait-naomi.jpg',
    alt: 'Portrait of Naomi',
  },
  'portrait-adam': {
    src: '/images/portrait-adam.jpg',
    alt: 'Portrait of Adam',
  },
  'portrait-eve': {
    src: '/images/portrait-eve.jpg',
    alt: 'Portrait of Eve',
  },
  'portrait-cain': {
    src: '/images/portrait-cain.jpg',
    alt: 'Portrait of Cain',
  },
  'portrait-abel': {
    src: '/images/portrait-abel.jpg',
    alt: 'Portrait of Abel',
  },
  'portrait-seth': {
    src: '/images/portrait-seth.jpg',
    alt: 'Portrait of Seth',
  },
  'portrait-noah': {
    src: '/images/portrait-noah.jpg',
    alt: 'Portrait of Noah',
  },
  'portrait-abraham': {
    src: '/images/portrait-abraham.jpg',
    alt: 'Portrait of Abraham',
  },
  'portrait-sarah': {
    src: '/images/portrait-sarah.jpg',
    alt: 'Portrait of Sarah, Mother of Nations',
  },
  'portrait-hagar': {
    src: '/images/portrait-hagar.jpg',
    alt: 'Portrait of Hagar beside the desert spring',
  },
  'portrait-isaac': {
    src: '/images/portrait-isaac.jpg',
    alt: 'Portrait of Isaac',
  },
  'portrait-rebekah': {
    src: '/images/portrait-rebekah.jpg',
    alt: 'Portrait of Rebekah',
  },
  'portrait-jacob': {
    src: '/images/portrait-jacob.jpg',
    alt: 'Portrait of Jacob',
  },
  'portrait-esau': {
    src: '/images/portrait-esau.jpg',
    alt: 'Portrait of Esau',
  },
  'portrait-rachel': {
    src: '/images/portrait-rachel.jpg',
    alt: 'Portrait of Rachel',
  },
  'portrait-leah': {
    src: '/images/portrait-leah.jpg',
    alt: 'Portrait of Leah',
  },
  'portrait-joseph': {
    src: '/images/portrait-joseph.jpg',
    alt: 'Portrait of Joseph, Governor of Egypt',
  },
  'portrait-miriam': {
    src: '/images/portrait-miriam.jpg',
    alt: 'Portrait of Miriam the Prophetess',
  },
  'portrait-zipporah': {
    src: '/images/portrait-zipporah.jpg',
    alt: 'Portrait of Zipporah of Midian',
  },
  'portrait-jethro': {
    src: '/images/portrait-jethro.jpg',
    alt: 'Portrait of Jethro, Priest of Midian',
  },
  'portrait-joshua': {
    src: '/images/portrait-joshua.jpg',
    alt: 'Portrait of Joshua, Son of Nun',
  },
  'portrait-bezalel': {
    src: '/images/portrait-bezalel.jpg',
    alt: 'Portrait of Bezalel, Tabernacle Artisan',
  },
  'portrait-pharaoh': {
    src: '/images/portrait-pharaoh.jpg',
    alt: 'Portrait of Pharaoh of Egypt',
  },
  'portrait-jochebed': {
    src: '/images/portrait-jochebed.jpg',
    alt: 'Portrait of Jochebed, Mother of Moses',
  },
  'portrait-hur': {
    src: '/images/portrait-hur.jpg',
    alt: 'Portrait of Hur, Elder of Judah',
  },
  'portrait-eleazar': {
    src: '/images/portrait-eleazar.jpg',
    alt: 'Portrait of Eleazar the High Priest',
  },
  'portrait-ithamar': {
    src: '/images/portrait-ithamar.jpg',
    alt: 'Portrait of Ithamar, Priest of the Sanctuary',
  },
  'portrait-nadab': {
    src: '/images/portrait-nadab.jpg',
    alt: 'Portrait of Nadab, Son of Aaron',
  },
  'portrait-abihu': {
    src: '/images/portrait-abihu.jpg',
    alt: 'Portrait of Abihu, Son of Aaron',
  },
  'portrait-caleb': {
    src: '/images/portrait-caleb.jpg',
    alt: 'Portrait of Caleb, Wholehearted Explorer',
  },
  'portrait-balaam': {
    src: '/images/portrait-balaam.jpg',
    alt: 'Portrait of Balaam the Seer',
  },
  'portrait-zelophehad': {
    src: '/images/portrait-zelophehad.jpg',
    alt: 'Portrait of the Daughters of Zelophehad',
  },
  'portrait-phinehas': {
    src: '/images/portrait-phinehas.jpg',
    alt: 'Portrait of Phinehas, Priest of the Covenant of Peace',
  },
  'portrait-korah': {
    src: '/images/portrait-korah.jpg',
    alt: 'Portrait of Korah of Levi',
  },
  'portrait-rahab': {
    src: '/images/portrait-rahab.jpg',
    alt: 'Portrait of Rahab of Jericho',
  },
  'portrait-deborah': {
    src: '/images/portrait-deborah.jpg',
    alt: 'Deborah, Prophetess and Judge of Israel',
  },
  'portrait-gideon': {
    src: '/images/portrait-gideon.jpg',
    alt: 'Gideon and the 300 Torches',
  },
  'portrait-samson': {
    src: '/images/portrait-samson.jpg',
    alt: 'Samson, Nazirite Deliverer',
  },
  'portrait-barak': {
    src: '/images/portrait-barak.jpg',
    alt: 'Barak, Commander at Mount Tabor',
  },
  'portrait-delilah': {
    src: '/images/portrait-delilah.jpg',
    alt: 'Delilah of the Valley of Sorek',
  },
  'portrait-hannah': {
    src: '/images/portrait-hannah.jpg',
    alt: 'Hannah Praying at Shiloh',
  },
  'portrait-eli': {
    src: '/images/portrait-eli.jpg',
    alt: 'Eli, High Priest at Shiloh',
  },
  'portrait-samuel': {
    src: '/images/portrait-samuel.jpg',
    alt: 'Samuel the Prophet',
  },
  'portrait-saul': {
    src: '/images/portrait-saul.jpg',
    alt: 'King Saul of Israel',
  },
  'portrait-jonathan': {
    src: '/images/portrait-jonathan.jpg',
    alt: 'Jonathan, Loyal Prince of Israel',
  },
  'portrait-david': {
    src: '/images/portrait-david.jpg',
    alt: 'Portrait of King David with wooden harp',
  },
  'portrait-goliath': {
    src: '/images/portrait-goliath.jpg',
    alt: 'Goliath of Gath',
  },
  'portrait-abigail': {
    src: '/images/portrait-abigail.jpg',
    alt: 'Abigail, Wise Peacemaker',
  },
  'portrait-nathan': {
    src: '/images/portrait-nathan.jpg',
    alt: 'Nathan the Prophet',
  },
  'portrait-mephibosheth': {
    src: '/images/portrait-mephibosheth.jpg',
    alt: 'Mephibosheth at the King’s Table',
  },
  'portrait-bathsheba': {
    src: '/images/portrait-bathsheba.jpg',
    alt: 'Bathsheba, Mother of Solomon',
  },
  'portrait-absalom': {
    src: '/images/portrait-absalom.jpg',
    alt: 'Absalom, Son of David',
  },
  'portrait-joab': {
    src: '/images/portrait-joab.jpg',
    alt: 'Joab, Commander of Israel',
  },
  'portrait-solomon': {
    src: '/images/portrait-solomon.jpg',
    alt: 'Solomon (Jedidiah, Loved by Yahweh)',
  },
  'portrait-elijah': {
    src: '/images/portrait-elijah.jpg',
    alt: 'Elijah the Prophet',
  },
  'portrait-elisha': {
    src: '/images/portrait-elisha.jpg',
    alt: 'Elisha, Prophet of Israel',
  },
  'portrait-queen-sheba': {
    src: '/images/portrait-queen-sheba.jpg',
    alt: 'Queen of Sheba',
  },
  'portrait-rehoboam': {
    src: '/images/portrait-rehoboam.jpg',
    alt: 'King Rehoboam of Judah',
  },
  'portrait-jeroboam': {
    src: '/images/portrait-jeroboam.jpg',
    alt: 'King Jeroboam of Northern Israel',
  },
  'portrait-ahab': {
    src: '/images/portrait-ahab.jpg',
    alt: 'King Ahab of Israel',
  },
  'portrait-jezebel': {
    src: '/images/portrait-jezebel.jpg',
    alt: 'Queen Jezebel',
  },
  'portrait-naaman': {
    src: '/images/portrait-naaman.jpg',
    alt: 'Naaman, Commander of Aram',
  },
  'portrait-hezekiah': {
    src: '/images/portrait-hezekiah.jpg',
    alt: 'King Hezekiah of Judah',
  },
  'portrait-josiah': {
    src: '/images/portrait-josiah.jpg',
    alt: 'King Josiah of Judah',
  },
  'portrait-isaiah': {
    src: '/images/portrait-isaiah.jpg',
    alt: 'Isaiah the Prophet',
  },
  'portrait-shunammite': {
    src: '/images/portrait-shunammite.jpg',
    alt: 'The Shunammite Woman',
  },
  'portrait-huldah': {
    src: '/images/portrait-huldah.jpg',
    alt: 'Huldah the Prophetess',
  },
  'portrait-job': {
    src: '/images/portrait-job.jpg',
    alt: 'Job of the Land of Uz',
  },
  'portrait-eliphaz': {
    src: '/images/portrait-eliphaz.jpg',
    alt: 'Eliphaz the Temanite',
  },
  'portrait-bildad': {
    src: '/images/portrait-bildad.jpg',
    alt: 'Bildad the Shuhite',
  },
  'portrait-zophar': {
    src: '/images/portrait-zophar.jpg',
    alt: 'Zophar the Naamathite',
  },
  'portrait-elihu': {
    src: '/images/portrait-elihu.jpg',
    alt: 'Elihu the Younger Counselor',
  },
  'portrait-asaph': {
    src: '/images/portrait-asaph.jpg',
    alt: 'Asaph, Chief Temple Musician',
  },
  'portrait-heman': {
    src: '/images/portrait-heman.jpg',
    alt: 'Heman & Sons of Korah',
  },
  'portrait-daniel': {
    src: '/images/portrait-daniel.jpg',
    alt: 'Daniel the Prophet',
  },
  'portrait-shadrach': {
    src: '/images/portrait-shadrach.jpg',
    alt: 'Shadrach (Hananiah)',
  },
  'portrait-meshach': {
    src: '/images/portrait-meshach.jpg',
    alt: 'Meshach (Mishael)',
  },
  'portrait-abednego': {
    src: '/images/portrait-abednego.jpg',
    alt: 'Abednego (Azariah)',
  },
  'portrait-nebuchadnezzar': {
    src: '/images/portrait-nebuchadnezzar.jpg',
    alt: 'King Nebuchadnezzar of Babylon',
  },
  'portrait-darius': {
    src: '/images/portrait-darius.jpg',
    alt: 'King Darius the Mede',
  },
  'portrait-jabez': {
    src: '/images/portrait-jabez.jpg',
    alt: 'Portrait of Jabez of Judah',
  },
  'portrait-benaiah': {
    src: '/images/portrait-benaiah.jpg',
    alt: 'Portrait of Benaiah, Mighty Warrior & Commander',
  },
  'portrait-abishai': {
    src: '/images/portrait-abishai.jpg',
    alt: 'Portrait of Abishai, Captain of the Thirty',
  },
  'portrait-zadok': {
    src: '/images/portrait-zadok.jpg',
    alt: 'Portrait of Zadok the High Priest',
  },
  'portrait-jeduthun': {
    src: '/images/portrait-jeduthun.jpg',
    alt: 'Portrait of Jeduthun (Ethan), Chief Sanctuary Musician',
  },
  'portrait-asa': {
    src: '/images/portrait-asa.jpg',
    alt: 'Portrait of King Asa of Judah',
  },
  'portrait-jehoshaphat': {
    src: '/images/portrait-jehoshaphat.jpg',
    alt: 'Portrait of King Jehoshaphat of Judah',
  },
  'portrait-jehoshabeath': {
    src: '/images/portrait-jehoshabeath.jpg',
    alt: 'Portrait of Princess Jehoshabeath of Judah',
  },
  'portrait-jehoiada': {
    src: '/images/portrait-jehoiada.jpg',
    alt: 'Portrait of High Priest Jehoiada',
  },
  'portrait-manasseh': {
    src: '/images/portrait-manasseh.jpg',
    alt: 'Portrait of Penitent King Manasseh',
  },
  'portrait-cyrus': {
    src: '/images/portrait-cyrus.jpg',
    alt: 'Portrait of King Cyrus of Persia',
  },
  'portrait-zerubbabel': {
    src: '/images/portrait-zerubbabel.jpg',
    alt: 'Portrait of Zerubbabel, Governor of Judah',
  },
  'portrait-ezra': {
    src: '/images/portrait-ezra.jpg',
    alt: 'Portrait of Ezra the Scribe & Priest',
  },
  'portrait-nehemiah': {
    src: '/images/portrait-nehemiah.jpg',
    alt: 'Portrait of Nehemiah, Governor & Wall Builder',
  },
  'portrait-jeshua': {
    src: '/images/portrait-jeshua.jpg',
    alt: 'Portrait of High Priest Jeshua (Joshua)',
  },
  'portrait-artaxerxes': {
    src: '/images/portrait-artaxerxes.jpg',
    alt: 'Portrait of King Artaxerxes of Persia',
  },
  'portrait-esther': {
    src: '/images/portrait-esther.jpg',
    alt: 'Portrait of Queen Esther (Hadassah)',
  },
  'portrait-mordecai': {
    src: '/images/portrait-mordecai.jpg',
    alt: 'Portrait of Mordecai of Susa',
  },
  'portrait-ahasuerus': {
    src: '/images/portrait-ahasuerus.jpg',
    alt: 'Portrait of King Ahasuerus (Xerxes)',
  },
  'portrait-haman': {
    src: '/images/portrait-haman.jpg',
    alt: 'Portrait of Haman the Agagite',
  },
  'portrait-lady-wisdom': {
    src: '/images/portrait-lady-wisdom.jpg',
    alt: 'Portrait of Lady Wisdom (Chochmah)',
  },
  'portrait-agur': {
    src: '/images/portrait-agur.jpg',
    alt: 'Portrait of Agur, Son of Jakeh',
  },
  'portrait-lemuel': {
    src: '/images/portrait-lemuel.jpg',
    alt: 'Portrait of King Lemuel',
  },
  'portrait-proverbs-31-woman': {
    src: '/images/portrait-proverbs-31-woman.jpg',
    alt: 'Portrait of the Noble Woman of Proverbs 31',
  },
  'portrait-qohelet': {
    src: '/images/portrait-qohelet.jpg',
    alt: 'Portrait of Qohelet (The Teacher)',
  },
  'portrait-shulammite': {
    src: '/images/portrait-shulammite.jpg',
    alt: 'Portrait of the Shulammite Bride',
  },
  'portrait-beloved-shepherd': {
    src: '/images/portrait-beloved-shepherd.jpg',
    alt: 'Portrait of the Beloved Shepherd',
  },
  'portrait-uzziah': {
    src: '/images/portrait-uzziah.jpg',
    alt: 'Portrait of King Uzziah of Judah',
  },
  'portrait-ahaz': {
    src: '/images/portrait-ahaz.jpg',
    alt: 'Portrait of King Ahaz of Judah',
  },
  'portrait-eliakim': {
    src: '/images/portrait-eliakim.jpg',
    alt: 'Portrait of Eliakim son of Hilkiah',
  },
  'portrait-sennacherib': {
    src: '/images/portrait-sennacherib.jpg',
    alt: 'Portrait of King Sennacherib of Assyria',
  },
  'portrait-jeremiah': {
    src: '/images/portrait-jeremiah.jpg',
    alt: 'Portrait of Jeremiah the Prophet',
  },
  'portrait-baruch': {
    src: '/images/portrait-baruch.jpg',
    alt: 'Portrait of Baruch son of Neriah',
  },
  'portrait-ebed-melech': {
    src: '/images/portrait-ebed-melech.jpg',
    alt: 'Portrait of Ebed-melech of Cush',
  },
  'portrait-zedekiah': {
    src: '/images/portrait-zedekiah.jpg',
    alt: 'Portrait of King Zedekiah of Judah',
  },
  'portrait-ezekiel': {
    src: '/images/portrait-ezekiel.jpg',
    alt: 'Portrait of Ezekiel the Prophet',
  },
  'portrait-boaz': {
    src: '/images/portrait-boaz.jpg',
    alt: 'Portrait of Boaz of Bethlehem',
  },
  'portrait-peter': {
    src: '/images/peace-pastures.jpg',
    alt: 'Shores of Galilee (Simon Peter)',
  },
};

export function getPortraitAsset(portraitId?: string): { src: string; alt: string } | undefined {
  const entry = portraitId ? PORTRAIT_URL_MAP[portraitId] : undefined;
  return entry ? { src: assetUrl(entry.src), alt: entry.alt } : undefined;
}

export const CharacterPortrait: React.FC<{
  portraitId: string;
  className?: string;
}> = ({ portraitId, className = 'w-16 h-16' }) => {
  const asset = PORTRAIT_URL_MAP[portraitId] || PORTRAIT_URL_MAP['portrait-moses'];

  return (
    <div className={`rounded-2xl overflow-hidden border border-[#E5DFD5] bg-[#F3EFE6] shadow-xs flex-shrink-0 ${className}`}>
      <img
        src={assetUrl(asset.src)}
        alt={asset.alt}
        className="w-full h-full object-cover object-top"
        loading="lazy"
      />
    </div>
  );
};
