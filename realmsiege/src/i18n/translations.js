export const translations = {
  en: {
    nav: { home:'Home', lore:'Lore', wiki:'Wiki', towers:'Towers', bestiary:'Bestiary', items:'Items', loot:'Loot', heroes:'Heroes', devlog:'Devlog', signin:'Sign In', signout:'Sign Out', admin:'Admin' },
    home: {
      eyebrow:'An Isometric Tower Defense RPG',
      subtitle:'Coming to Steam · PC · 16-bit Pixel Art',
      tagline:'A thousand skills. Elemental towers that fuse and evolve. Bosses that curse the land. Mobs that resist you.',
      cta1:'Get Notified', cta2:'Explore Wiki',
      cd_label:'// Next Major Update',
      status_label:'// Development Status', status_title:'Current Build Progress', status_intro:'Live progress updated directly from the developer.',
      road_label:'// Roadmap', road_title:"What's Being Built", road_intro:'Transparent development — every phase, every milestone.',
      feat_label:'// Features', feat_title:'What Makes It Different', feat_intro:'Every system designed to reward mastery and punish carelessness.',
      nl_title:'Be First to Know', nl_sub:'Get notified when the Steam page goes live. No spam.', nl_btn:'Notify Me', nl_ph:'your@email.com', nl_ok:"✓ You'll be notified.", nl_dupe:'Already subscribed!', nl_err:'Something went wrong.',
      steam_title:'Wishlist on Steam', steam_sub:'Steam page coming soon. Wishlisting helps at launch.', steam_btn:'Steam Page — Coming Soon',
      in_dev:'In Development', version:'Current Version', next_update:'Next Update', stage:'Stage',
    },
    auth: { join:'Join the Realm', join_sub:'Create an account to comment on devlogs.', signin:'Sign In', signup:'Sign Up', email:'Email', password:'Password', username:'Username', signing_in:'Signing in...', creating:'Creating...', username_req:'Username is required.', confirm:'Check your email to confirm.' },
    common: { all:'All', search:'Search...', loading:'Loading...', none:'No results found.', back:'← Wiki' },
    footer: { copy:'© 2026 Realm Siege · All Rights Reserved · Built with Godot 4 · Coming to Steam' }
  },
  tr: {
    nav: { home:'Ana Sayfa', lore:'Hikaye', wiki:'Wiki', towers:'Kuleler', bestiary:'Canavar Kitabı', items:'Eşyalar', loot:'Loot', heroes:'Kahramanlar', devlog:'Günlük', signin:'Giriş Yap', signout:'Çıkış', admin:'Yönetici' },
    home: {
      eyebrow:'İzometrik Kule Savunma RPG',
      subtitle:"Steam'e Geliyor · PC · 16-bit Piksel Sanatı",
      tagline:'Bin yetenek. Birleşip evrilen elementel kuleler. Diyarı lanetleyen boslar. Sana direnen canavarlar.',
      cta1:'Haberdar Ol', cta2:"Wiki'yi Keşfet",
      cd_label:'// Sonraki Büyük Güncelleme',
      status_label:'// Geliştirme Durumu', status_title:'Mevcut Yapı İlerlemesi', status_intro:'Doğrudan geliştiriciden canlı güncellenen ilerleme.',
      road_label:'// Yol Haritası', road_title:'Neler Yapılıyor', road_intro:'Şeffaf geliştirme — her aşama, her kilometre taşı.',
      feat_label:'// Özellikler', feat_title:'Farkı Yaratan Nedir', feat_intro:'Her sistem ustalığı ödüllendirmek için tasarlandı.',
      nl_title:'İlk Sen Haberdar Ol', nl_sub:'Steam sayfası yayınlandığında bildirim al. Spam yok.', nl_btn:'Haberdar Et', nl_ph:'eposta@adresin.com', nl_ok:'✓ Yayına geçtiğimizde bildirim alacaksın.', nl_dupe:'Zaten kayıtlısın!', nl_err:'Bir sorun oluştu.',
      steam_title:"Steam'de İstek Listesine Ekle", steam_sub:'Steam sayfası yakında.', steam_btn:'Steam Sayfası — Yakında',
      in_dev:'Geliştiriliyor', version:'Mevcut Sürüm', next_update:'Sonraki Güncelleme', stage:'Aşama',
    },
    auth: { join:'Diyara Katıl', join_sub:'Geliştirme günlüklerine yorum yapmak için hesap oluştur.', signin:'Giriş Yap', signup:'Kayıt Ol', email:'E-posta', password:'Şifre', username:'Kullanıcı Adı', signing_in:'Giriş yapılıyor...', creating:'Oluşturuluyor...', username_req:'Kullanıcı adı zorunludur.', confirm:'Onay için e-postanı kontrol et.' },
    common: { all:'Tümü', search:'Ara...', loading:'Yükleniyor...', none:'Sonuç bulunamadı.', back:'← Wiki' },
    footer: { copy:"© 2026 Realm Siege · Tüm Hakları Saklıdır · Godot 4 ile Yapıldı · Steam'e Geliyor" }
  }
};

export const getLang = () => {
  try { return localStorage.getItem('rs_lang') || 'en'; } catch { return 'en'; }
};
export const setLang = l => {
  try { localStorage.setItem('rs_lang', l); } catch {}
};
export const t = (path, lang) => {
  const l = lang || getLang();
  const keys = path.split('.');
  let obj = translations[l] || translations.en;
  for (const k of keys) { obj = obj?.[k]; }
  return obj || path;
};
