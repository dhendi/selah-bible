import React from 'react';
import { assetUrl } from '../../utils/assetUrl';

const PORTRAIT_URL_MAP: Record<string, { src: string; alt: string }> = {
  'portrait-moses': {
    src: '/images/portrait-moses.webp',
    alt: 'Portrait of Moses',
  },
  'portrait-aaron': {
    src: '/images/portrait-aaron.webp',
    alt: 'Portrait of Aaron the High Priest',
  },
  'portrait-ruth': {
    src: '/images/portrait-ruth.webp',
    alt: 'Portrait of Ruth',
  },
  'portrait-naomi': {
    src: '/images/portrait-naomi.webp',
    alt: 'Portrait of Naomi',
  },
  'portrait-adam': {
    src: '/images/portrait-adam.webp',
    alt: 'Portrait of Adam',
  },
  'portrait-eve': {
    src: '/images/portrait-eve.webp',
    alt: 'Portrait of Eve',
  },
  'portrait-cain': {
    src: '/images/portrait-cain.webp',
    alt: 'Portrait of Cain',
  },
  'portrait-abel': {
    src: '/images/portrait-abel.webp',
    alt: 'Portrait of Abel',
  },
  'portrait-seth': {
    src: '/images/portrait-seth.webp',
    alt: 'Portrait of Seth',
  },
  'portrait-noah': {
    src: '/images/portrait-noah.webp',
    alt: 'Portrait of Noah',
  },
  'portrait-abraham': {
    src: '/images/portrait-abraham.webp',
    alt: 'Portrait of Abraham',
  },
  'portrait-sarah': {
    src: '/images/portrait-sarah.webp',
    alt: 'Portrait of Sarah, Mother of Nations',
  },
  'portrait-hagar': {
    src: '/images/portrait-hagar.webp',
    alt: 'Portrait of Hagar beside the desert spring',
  },
  'portrait-isaac': {
    src: '/images/portrait-isaac.webp',
    alt: 'Portrait of Isaac',
  },
  'portrait-rebekah': {
    src: '/images/portrait-rebekah.webp',
    alt: 'Portrait of Rebekah',
  },
  'portrait-jacob': {
    src: '/images/portrait-jacob.webp',
    alt: 'Portrait of Jacob',
  },
  'portrait-esau': {
    src: '/images/portrait-esau.webp',
    alt: 'Portrait of Esau',
  },
  'portrait-rachel': {
    src: '/images/portrait-rachel.webp',
    alt: 'Portrait of Rachel',
  },
  'portrait-leah': {
    src: '/images/portrait-leah.webp',
    alt: 'Portrait of Leah',
  },
  'portrait-joseph': {
    src: '/images/portrait-joseph.webp',
    alt: 'Portrait of Joseph, Governor of Egypt',
  },
  'portrait-miriam': {
    src: '/images/portrait-miriam.webp',
    alt: 'Portrait of Miriam the Prophetess',
  },
  'portrait-zipporah': {
    src: '/images/portrait-zipporah.webp',
    alt: 'Portrait of Zipporah of Midian',
  },
  'portrait-jethro': {
    src: '/images/portrait-jethro.webp',
    alt: 'Portrait of Jethro, Priest of Midian',
  },
  'portrait-joshua': {
    src: '/images/portrait-joshua.webp',
    alt: 'Portrait of Joshua, Son of Nun',
  },
  'portrait-bezalel': {
    src: '/images/portrait-bezalel.webp',
    alt: 'Portrait of Bezalel, Tabernacle Artisan',
  },
  'portrait-pharaoh': {
    src: '/images/portrait-pharaoh.webp',
    alt: 'Portrait of Pharaoh of Egypt',
  },
  'portrait-jochebed': {
    src: '/images/portrait-jochebed.webp',
    alt: 'Portrait of Jochebed, Mother of Moses',
  },
  'portrait-hur': {
    src: '/images/portrait-hur.webp',
    alt: 'Portrait of Hur, Elder of Judah',
  },
  'portrait-eleazar': {
    src: '/images/portrait-eleazar.webp',
    alt: 'Portrait of Eleazar the High Priest',
  },
  'portrait-ithamar': {
    src: '/images/portrait-ithamar.webp',
    alt: 'Portrait of Ithamar, Priest of the Sanctuary',
  },
  'portrait-nadab': {
    src: '/images/portrait-nadab.webp',
    alt: 'Portrait of Nadab, Son of Aaron',
  },
  'portrait-abihu': {
    src: '/images/portrait-abihu.webp',
    alt: 'Portrait of Abihu, Son of Aaron',
  },
  'portrait-caleb': {
    src: '/images/portrait-caleb.webp',
    alt: 'Portrait of Caleb, Wholehearted Explorer',
  },
  'portrait-balaam': {
    src: '/images/portrait-balaam.webp',
    alt: 'Portrait of Balaam the Seer',
  },
  'portrait-zelophehad': {
    src: '/images/portrait-zelophehad.webp',
    alt: 'Portrait of the Daughters of Zelophehad',
  },
  'portrait-phinehas': {
    src: '/images/portrait-phinehas.webp',
    alt: 'Portrait of Phinehas, Priest of the Covenant of Peace',
  },
  'portrait-korah': {
    src: '/images/portrait-korah.webp',
    alt: 'Portrait of Korah of Levi',
  },
  'portrait-rahab': {
    src: '/images/portrait-rahab.webp',
    alt: 'Portrait of Rahab of Jericho',
  },
  'portrait-deborah': {
    src: '/images/portrait-deborah.webp',
    alt: 'Deborah, Prophetess and Judge of Israel',
  },
  'portrait-gideon': {
    src: '/images/portrait-gideon.webp',
    alt: 'Gideon and the 300 Torches',
  },
  'portrait-samson': {
    src: '/images/portrait-samson.webp',
    alt: 'Samson, Nazirite Deliverer',
  },
  'portrait-barak': {
    src: '/images/portrait-barak.webp',
    alt: 'Barak, Commander at Mount Tabor',
  },
  'portrait-delilah': {
    src: '/images/portrait-delilah.webp',
    alt: 'Delilah of the Valley of Sorek',
  },
  'portrait-hannah': {
    src: '/images/portrait-hannah.webp',
    alt: 'Hannah Praying at Shiloh',
  },
  'portrait-eli': {
    src: '/images/portrait-eli.webp',
    alt: 'Eli, High Priest at Shiloh',
  },
  'portrait-samuel': {
    src: '/images/portrait-samuel.webp',
    alt: 'Samuel the Prophet',
  },
  'portrait-saul': {
    src: '/images/portrait-saul.webp',
    alt: 'King Saul of Israel',
  },
  'portrait-jonathan': {
    src: '/images/portrait-jonathan.webp',
    alt: 'Jonathan, Loyal Prince of Israel',
  },
  'portrait-david': {
    src: '/images/portrait-david.webp',
    alt: 'Portrait of King David with wooden harp',
  },
  'portrait-goliath': {
    src: '/images/portrait-goliath.webp',
    alt: 'Goliath of Gath',
  },
  'portrait-abigail': {
    src: '/images/portrait-abigail.webp',
    alt: 'Abigail, Wise Peacemaker',
  },
  'portrait-nathan': {
    src: '/images/portrait-nathan.webp',
    alt: 'Nathan the Prophet',
  },
  'portrait-mephibosheth': {
    src: '/images/portrait-mephibosheth.webp',
    alt: 'Mephibosheth at the King’s Table',
  },
  'portrait-bathsheba': {
    src: '/images/portrait-bathsheba.webp',
    alt: 'Bathsheba, Mother of Solomon',
  },
  'portrait-absalom': {
    src: '/images/portrait-absalom.webp',
    alt: 'Absalom, Son of David',
  },
  'portrait-joab': {
    src: '/images/portrait-joab.webp',
    alt: 'Joab, Commander of Israel',
  },
  'portrait-solomon': {
    src: '/images/portrait-solomon.webp',
    alt: 'Solomon (Jedidiah, Loved by Yahweh)',
  },
  'portrait-elijah': {
    src: '/images/portrait-elijah.webp',
    alt: 'Elijah the Prophet',
  },
  'portrait-elisha': {
    src: '/images/portrait-elisha.webp',
    alt: 'Elisha, Prophet of Israel',
  },
  'portrait-queen-sheba': {
    src: '/images/portrait-queen-sheba.webp',
    alt: 'Queen of Sheba',
  },
  'portrait-rehoboam': {
    src: '/images/portrait-rehoboam.webp',
    alt: 'King Rehoboam of Judah',
  },
  'portrait-jeroboam': {
    src: '/images/portrait-jeroboam.webp',
    alt: 'King Jeroboam of Northern Israel',
  },
  'portrait-ahab': {
    src: '/images/portrait-ahab.webp',
    alt: 'King Ahab of Israel',
  },
  'portrait-jezebel': {
    src: '/images/portrait-jezebel.webp',
    alt: 'Queen Jezebel',
  },
  'portrait-naaman': {
    src: '/images/portrait-naaman.webp',
    alt: 'Naaman, Commander of Aram',
  },
  'portrait-hezekiah': {
    src: '/images/portrait-hezekiah.webp',
    alt: 'King Hezekiah of Judah',
  },
  'portrait-josiah': {
    src: '/images/portrait-josiah.webp',
    alt: 'King Josiah of Judah',
  },
  'portrait-isaiah': {
    src: '/images/portrait-isaiah.webp',
    alt: 'Isaiah the Prophet',
  },
  'portrait-shunammite': {
    src: '/images/portrait-shunammite.webp',
    alt: 'The Shunammite Woman',
  },
  'portrait-huldah': {
    src: '/images/portrait-huldah.webp',
    alt: 'Huldah the Prophetess',
  },
  'portrait-job': {
    src: '/images/portrait-job.webp',
    alt: 'Job of the Land of Uz',
  },
  'portrait-eliphaz': {
    src: '/images/portrait-eliphaz.webp',
    alt: 'Eliphaz the Temanite',
  },
  'portrait-bildad': {
    src: '/images/portrait-bildad.webp',
    alt: 'Bildad the Shuhite',
  },
  'portrait-zophar': {
    src: '/images/portrait-zophar.webp',
    alt: 'Zophar the Naamathite',
  },
  'portrait-elihu': {
    src: '/images/portrait-elihu.webp',
    alt: 'Elihu the Younger Counselor',
  },
  'portrait-asaph': {
    src: '/images/portrait-asaph.webp',
    alt: 'Asaph, Chief Temple Musician',
  },
  'portrait-heman': {
    src: '/images/portrait-heman.webp',
    alt: 'Heman & Sons of Korah',
  },
  'portrait-daniel': {
    src: '/images/portrait-daniel.webp',
    alt: 'Daniel the Prophet',
  },
  'portrait-shadrach': {
    src: '/images/portrait-shadrach.webp',
    alt: 'Shadrach (Hananiah)',
  },
  'portrait-meshach': {
    src: '/images/portrait-meshach.webp',
    alt: 'Meshach (Mishael)',
  },
  'portrait-abednego': {
    src: '/images/portrait-abednego.webp',
    alt: 'Abednego (Azariah)',
  },
  'portrait-nebuchadnezzar': {
    src: '/images/portrait-nebuchadnezzar.webp',
    alt: 'King Nebuchadnezzar of Babylon',
  },
  'portrait-darius': {
    src: '/images/portrait-darius.webp',
    alt: 'King Darius the Mede',
  },
  'portrait-jabez': {
    src: '/images/portrait-jabez.webp',
    alt: 'Portrait of Jabez of Judah',
  },
  'portrait-benaiah': {
    src: '/images/portrait-benaiah.webp',
    alt: 'Portrait of Benaiah, Mighty Warrior & Commander',
  },
  'portrait-abishai': {
    src: '/images/portrait-abishai.webp',
    alt: 'Portrait of Abishai, Captain of the Thirty',
  },
  'portrait-zadok': {
    src: '/images/portrait-zadok.webp',
    alt: 'Portrait of Zadok the High Priest',
  },
  'portrait-jeduthun': {
    src: '/images/portrait-jeduthun.webp',
    alt: 'Portrait of Jeduthun (Ethan), Chief Sanctuary Musician',
  },
  'portrait-asa': {
    src: '/images/portrait-asa.webp',
    alt: 'Portrait of King Asa of Judah',
  },
  'portrait-jehoshaphat': {
    src: '/images/portrait-jehoshaphat.webp',
    alt: 'Portrait of King Jehoshaphat of Judah',
  },
  'portrait-jehoshabeath': {
    src: '/images/portrait-jehoshabeath.webp',
    alt: 'Portrait of Princess Jehoshabeath of Judah',
  },
  'portrait-jehoiada': {
    src: '/images/portrait-jehoiada.webp',
    alt: 'Portrait of High Priest Jehoiada',
  },
  'portrait-manasseh': {
    src: '/images/portrait-manasseh.webp',
    alt: 'Portrait of Penitent King Manasseh',
  },
  'portrait-cyrus': {
    src: '/images/portrait-cyrus.webp',
    alt: 'Portrait of King Cyrus of Persia',
  },
  'portrait-zerubbabel': {
    src: '/images/portrait-zerubbabel.webp',
    alt: 'Portrait of Zerubbabel, Governor of Judah',
  },
  'portrait-ezra': {
    src: '/images/portrait-ezra.webp',
    alt: 'Portrait of Ezra the Scribe & Priest',
  },
  'portrait-nehemiah': {
    src: '/images/portrait-nehemiah.webp',
    alt: 'Portrait of Nehemiah, Governor & Wall Builder',
  },
  'portrait-jeshua': {
    src: '/images/portrait-jeshua.webp',
    alt: 'Portrait of High Priest Jeshua (Joshua)',
  },
  'portrait-artaxerxes': {
    src: '/images/portrait-artaxerxes.webp',
    alt: 'Portrait of King Artaxerxes of Persia',
  },
  'portrait-esther': {
    src: '/images/portrait-esther.webp',
    alt: 'Portrait of Queen Esther (Hadassah)',
  },
  'portrait-mordecai': {
    src: '/images/portrait-mordecai.webp',
    alt: 'Portrait of Mordecai of Susa',
  },
  'portrait-ahasuerus': {
    src: '/images/portrait-ahasuerus.webp',
    alt: 'Portrait of King Ahasuerus (Xerxes)',
  },
  'portrait-haman': {
    src: '/images/portrait-haman.webp',
    alt: 'Portrait of Haman the Agagite',
  },
  'portrait-lady-wisdom': {
    src: '/images/portrait-lady-wisdom.webp',
    alt: 'Portrait of Lady Wisdom (Chochmah)',
  },
  'portrait-agur': {
    src: '/images/portrait-agur.webp',
    alt: 'Portrait of Agur, Son of Jakeh',
  },
  'portrait-lemuel': {
    src: '/images/portrait-lemuel.webp',
    alt: 'Portrait of King Lemuel',
  },
  'portrait-proverbs-31-woman': {
    src: '/images/portrait-proverbs-31-woman.webp',
    alt: 'Portrait of the Noble Woman of Proverbs 31',
  },
  'portrait-qohelet': {
    src: '/images/portrait-qohelet.webp',
    alt: 'Portrait of Qohelet (The Teacher)',
  },
  'portrait-shulammite': {
    src: '/images/portrait-shulammite.webp',
    alt: 'Portrait of the Shulammite Bride',
  },
  'portrait-beloved-shepherd': {
    src: '/images/portrait-beloved-shepherd.webp',
    alt: 'Portrait of the Beloved Shepherd',
  },
  'portrait-uzziah': {
    src: '/images/portrait-uzziah.webp',
    alt: 'Portrait of King Uzziah of Judah',
  },
  'portrait-ahaz': {
    src: '/images/portrait-ahaz.webp',
    alt: 'Portrait of King Ahaz of Judah',
  },
  'portrait-eliakim': {
    src: '/images/portrait-eliakim.webp',
    alt: 'Portrait of Eliakim son of Hilkiah',
  },
  'portrait-sennacherib': {
    src: '/images/portrait-sennacherib.webp',
    alt: 'Portrait of King Sennacherib of Assyria',
  },
  'portrait-jeremiah': {
    src: '/images/portrait-jeremiah.webp',
    alt: 'Portrait of Jeremiah the Prophet',
  },
  'portrait-baruch': {
    src: '/images/portrait-baruch.webp',
    alt: 'Portrait of Baruch son of Neriah',
  },
  'portrait-ebed-melech': {
    src: '/images/portrait-ebed-melech.webp',
    alt: 'Portrait of Ebed-melech of Cush',
  },
  'portrait-zedekiah': {
    src: '/images/portrait-zedekiah.webp',
    alt: 'Portrait of King Zedekiah of Judah',
  },
  'portrait-ezekiel': {
    src: '/images/portrait-ezekiel.webp',
    alt: 'Portrait of Ezekiel the Prophet',
  },
  'portrait-boaz': {
    src: '/images/portrait-boaz.webp',
    alt: 'Portrait of Boaz of Bethlehem',
  },
  'portrait-peter': {
    src: '/images/portrait-peter.webp',
    alt: 'Portrait of Simon Peter',
  },
  'portrait-jesus': {
    src: '/images/portrait-jesus.webp',
    alt: 'Portrait of Jesus Christ',
  },
  'portrait-paul': {
    src: '/images/portrait-paul.webp',
    alt: 'Portrait of Paul the Apostle',
  },
  'portrait-mary-jesus': {
    src: '/images/portrait-mary-jesus.webp',
    alt: 'Portrait of Mary, Mother of Jesus',
  },
  'portrait-joseph-nazareth': {
    src: '/images/portrait-joseph-nazareth.webp',
    alt: 'Portrait of Joseph of Nazareth',
  },
  'portrait-john-baptist': {
    src: '/images/portrait-john-baptist.webp',
    alt: 'Portrait of John the Baptist',
  },
  'portrait-matthew': {
    src: '/images/portrait-matthew.webp',
    alt: 'Portrait of Matthew (Levi)',
  },
  'portrait-john-apostle': {
    src: '/images/portrait-john-apostle.webp',
    alt: 'Portrait of John the Apostle',
  },
  'portrait-james-zebedee': {
    src: '/images/portrait-james-zebedee.webp',
    alt: 'Portrait of James, Son of Zebedee',
  },
  'portrait-andrew': {
    src: '/images/portrait-andrew.webp',
    alt: 'Portrait of Andrew the Apostle',
  },
  'portrait-mary-magdalene': {
    src: '/images/portrait-mary-magdalene.webp',
    alt: 'Portrait of Mary Magdalene',
  },
  'portrait-martha': {
    src: '/images/portrait-martha.webp',
    alt: 'Portrait of Martha of Bethany',
  },
  'portrait-mary-bethany': {
    src: '/images/portrait-mary-bethany.webp',
    alt: 'Portrait of Mary of Bethany',
  },
  'portrait-lazarus-bethany': {
    src: '/images/portrait-lazarus.webp',
    alt: 'Portrait of Lazarus of Bethany',
  },
  'portrait-nicodemus': {
    src: '/images/portrait-nicodemus.webp',
    alt: 'Portrait of Nicodemus',
  },
  'portrait-zacchaeus': {
    src: '/images/portrait-zacchaeus.webp',
    alt: 'Portrait of Zacchaeus',
  },
  'portrait-thomas': {
    src: '/images/portrait-thomas.webp',
    alt: 'Portrait of Thomas',
  },
  'portrait-philip-apostle': {
    src: '/images/portrait-philip-apostle.webp',
    alt: 'Portrait of Philip the Apostle',
  },
  'portrait-nathanael': {
    src: '/images/portrait-nathanael.webp',
    alt: 'Portrait of Nathanael',
  },
  'portrait-judas-iscariot': {
    src: '/images/portrait-judas-iscariot.webp',
    alt: 'Portrait of Judas Iscariot',
  },
  'portrait-luke': {
    src: '/images/portrait-luke.webp',
    alt: 'Portrait of Luke the Physician',
  },
  'portrait-mark': {
    src: '/images/portrait-mark.webp',
    alt: 'Portrait of John Mark',
  },
  'portrait-barnabas': {
    src: '/images/portrait-barnabas.webp',
    alt: 'Portrait of Barnabas',
  },
  'portrait-stephen': {
    src: '/images/portrait-stephen.webp',
    alt: 'Portrait of Stephen',
  },
  'portrait-philip-evangelist': {
    src: '/images/portrait-philip-evangelist.webp',
    alt: 'Portrait of Philip the Evangelist',
  },
  'portrait-timothy': {
    src: '/images/portrait-timothy.webp',
    alt: 'Portrait of Timothy',
  },
  'portrait-titus': {
    src: '/images/portrait-titus.webp',
    alt: 'Portrait of Titus',
  },
  'portrait-silas': {
    src: '/images/portrait-silas.webp',
    alt: 'Portrait of Silas',
  },
  'portrait-james-jerusalem': {
    src: '/images/portrait-james-jerusalem.webp',
    alt: 'Portrait of James of Jerusalem',
  },
  'portrait-jude': {
    src: '/images/portrait-jude.webp',
    alt: 'Portrait of Jude',
  },
  'portrait-cornelius': {
    src: '/images/portrait-cornelius.webp',
    alt: 'Portrait of Cornelius',
  },
  'portrait-lydia': {
    src: '/images/portrait-lydia.webp',
    alt: 'Portrait of Lydia of Thyatira',
  },
  'portrait-priscilla-aquila': {
    src: '/images/portrait-priscilla-aquila.webp',
    alt: 'Portrait of Priscilla & Aquila',
  },
  'portrait-apollos': {
    src: '/images/portrait-apollos.webp',
    alt: 'Portrait of Apollos',
  },
  'portrait-phoebe': {
    src: '/images/portrait-phoebe.webp',
    alt: 'Portrait of Phoebe',
  },
  'portrait-dorcas': {
    src: '/images/portrait-dorcas.webp',
    alt: 'Portrait of Dorcas (Tabitha)',
  },
  'portrait-onesimus': {
    src: '/images/portrait-onesimus.webp',
    alt: 'Portrait of Onesimus',
  },
  'portrait-philemon': {
    src: '/images/portrait-philemon.webp',
    alt: 'Portrait of Philemon',
  },
  'portrait-gamaliel': {
    src: '/images/portrait-gamaliel.webp',
    alt: 'Portrait of Gamaliel',
  },
  'portrait-pilate': {
    src: '/images/portrait-pilate.webp',
    alt: 'Portrait of Pontius Pilate',
  },
  'portrait-caiaphas': {
    src: '/images/portrait-caiaphas.webp',
    alt: 'Portrait of Caiaphas',
  },
  'portrait-annas': {
    src: '/images/portrait-annas.webp',
    alt: 'Portrait of Annas',
  },
  'portrait-herod-great': {
    src: '/images/portrait-herod-great.webp',
    alt: 'Portrait of Herod the Great',
  },
  'portrait-herod-antipas': {
    src: '/images/portrait-herod-antipas.webp',
    alt: 'Portrait of Herod Antipas',
  },
  'portrait-joseph-arimathaea': {
    src: '/images/portrait-joseph-arimathaea.webp',
    alt: 'Portrait of Joseph of Arimathea',
  },
  'portrait-simon-cyrene': {
    src: '/images/portrait-simon-cyrene.webp',
    alt: 'Portrait of Simon of Cyrene',
  },
  'portrait-zacharias-luke': {
    src: '/images/portrait-zacharias-luke.webp',
    alt: 'Portrait of Zacharias',
  },
  'portrait-elizabeth': {
    src: '/images/portrait-elizabeth.webp',
    alt: 'Portrait of Elizabeth',
  },
  'portrait-simeon-temple': {
    src: '/images/portrait-simeon.webp',
    alt: 'Portrait of Simeon',
  },
  'portrait-anna-prophetess': {
    src: '/images/portrait-anna-prophetess.webp',
    alt: 'Portrait of Anna',
  },
  'portrait-bartimaeus': {
    src: '/images/portrait-bartimaeus.webp',
    alt: 'Portrait of Bartimaeus',
  },
  'portrait-jairus': {
    src: '/images/portrait-jairus.webp',
    alt: 'Portrait of Jairus',
  },
  'portrait-ananias-damascus': {
    src: '/images/portrait-ananias-damascus.webp',
    alt: 'Portrait of Ananias of Damascus',
  },
  'portrait-matthias': {
    src: '/images/portrait-matthias.webp',
    alt: 'Portrait of Matthias',
  },
  'portrait-ethiopian-eunuch': {
    src: '/images/portrait-ethiopian-eunuch.webp',
    alt: 'Portrait of Ethiopian Official',
  },
  'portrait-epaphroditus': {
    src: '/images/portrait-epaphroditus.webp',
    alt: 'Portrait of Epaphroditus',
  },
  'portrait-epaphras': {
    src: '/images/portrait-epaphras.webp',
    alt: 'Portrait of Epaphras',
  },
  'portrait-tychicus': {
    src: '/images/portrait-tychicus.webp',
    alt: 'Portrait of Tychicus',
  },
  'portrait-lois-eunice': {
    src: '/images/portrait-lois-eunice.webp',
    alt: 'Portrait of Lois & Eunice',
  },
  'portrait-gaius': {
    src: '/images/portrait-gaius.webp',
    alt: 'Portrait of Gaius',
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
