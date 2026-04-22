import { useState, useEffect, useRef } from "react";

// ══════════════════════════════════════════
// CONSTANTS
// ══════════════════════════════════════════
const COLORS = {
  orange:"#F47D05", orangeLight:"#FF9E04", orangeDark:"#975209",
  gray:"#707070", grayLight:"#828282", dark:"#1A1A1A",
  bg:"#F7F7F7", white:"#FFFFFF", green:"#25D366",
};
const WA_URL = "https://wa.me/919721133333";
const IG_URL = "https://www.instagram.com/meghdootsupreme_electricals";
const PHONE = "9721133333";
const MAPS_URL = "https://maps.google.com/?q=92+Old+RTO+Compound+Latouche+Road+Lucknow+226018";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0!2d80.9193!3d26.8466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd05ad27a7a1%3A0x50b49f40a0dbb5dc!2sLatouche%20Rd%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

// ══════════════════════════════════════════
// ICON COMPONENT
// ══════════════════════════════════════════
function Ico({ n, size=20, color="currentColor", sw=2 }) {
  const p = {
    phone: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.28a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>,
    wa: <><path fill={color} stroke="none" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path fill={color} stroke="none" d="M11.946 0C5.343 0 0 5.343 0 11.946c0 2.076.537 4.027 1.475 5.72L0 24l6.505-1.45a11.9 11.9 0 005.441 1.317h.005C18.553 23.867 24 18.524 24 11.921 24 5.318 18.553 0 11.946 0zm0 21.78a9.834 9.834 0 01-5.022-1.37l-.36-.214-3.736.979 1.004-3.667-.234-.373a9.864 9.864 0 01-1.516-5.189c0-5.449 4.432-9.88 9.877-9.88 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.449-4.436 9.822-9.894 9.822z"/></>,
    search: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    mapPin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>,
    clock: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    check: <polyline points="20 6 9 17 4 12"/>,
    store: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    tag: <><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></>,
    chevL: <polyline points="15 18 9 12 15 6"/>,
    chevR: <polyline points="9 18 15 12 9 6"/>,
    ig: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
    menu: <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    X: <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    plug: <><line x1="12" y1="2" x2="12" y2="6" strokeLinecap="round"/><line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round"/><rect x="4" y="6" width="16" height="10" rx="2"/><path d="M7 16v4M17 16v4"/></>,
  };
  const isWA = n==="wa";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill={isWA ? color : "none"} stroke={isWA ? "none" : color}
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
      style={{display:"inline-block",flexShrink:0,verticalAlign:"middle"}}>
      {p[n]}
    </svg>
  );
}

// ══════════════════════════════════════════
// PLACEHOLDER IMAGE GENERATOR
// ══════════════════════════════════════════
const mkSVG = (lines, c1, c2, w, h) => {
  const arr = Array.isArray(lines) ? lines : [lines];
  const fs = Math.round(Math.min(w,h) * (w>500 ? 0.038 : 0.055));
  const texts = arr.map((l,i) =>
    `<text x="${w/2}" y="${h*0.44+i*h*0.09}" font-family="system-ui" font-size="${fs}" font-weight="700" fill="white" text-anchor="middle" letter-spacing="1">${l}</text>`
  ).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#g)"/><rect x="${w*.28}" y="${h*.18}" width="${w*.44}" height="${h*.55}" rx="${Math.round(Math.min(w,h)*.025)}" fill="white" opacity=".07"/>${texts}<text x="${w/2}" y="${h*.65}" font-family="system-ui" font-size="${Math.round(Math.min(w,h)*.028)}" fill="white" text-anchor="middle" opacity=".5">[ Replace with product photo ]</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const CAT_COLORS = {
  "Wires":["#0c1f3d","#1a4a80"],
  "Fans":["#3d1800","#974f02"],
  "Mixer Grinders":["#1a2a3d","#2a5a80"],
  "Iron Boxes":["#3a2600","#976519"],
  "Multiplug":["#1a093a","#4a2880"],
  "Sockets":["#0a2e18","#1a5c35"],
  "2-Pin Tops":["#2e1808","#5c3818"],
  "Fan Capacitors":["#2a0a2e","#581858"],
};

const PRODUCT_IMGS = {};
Object.keys(CAT_COLORS).forEach(cat => {
  PRODUCT_IMGS[cat] = mkSVG(cat, CAT_COLORS[cat][0], CAT_COLORS[cat][1], 400, 400);
});

const HERO_SLIDES = [
  {lines:["POWER YOU CAN TRUST"],         c1:"#0c1f3d", c2:"#1e4d8c"},
  {lines:["POWERFUL COOLING.",            "COMPACT DESIGN"], c1:"#3d1800", c2:"#974f02"},
  {lines:["POWERFUL PERFORMANCE.",        "PERFECT PRESS"],  c1:"#3a2600", c2:"#976519"},
  {lines:["MASTER EVERY MEAL"],           c1:"#1a3a00", c2:"#3a8a0a"},
];
const HERO_IMGS = HERO_SLIDES.map(s => mkSVG(s.lines, s.c1, s.c2, 1400, 560));

// ══════════════════════════════════════════
// DATA
// ══════════════════════════════════════════
const PRODUCTS = [
  {id:"w1",name:"1.0mm Wire",       cat:"Wires",          badge:"ISI Certified", desc:"PVC coated, flame retardant, durable single-core"},
  {id:"w2",name:"1.5mm Wire",       cat:"Wires",          badge:null,            desc:"Standard household wiring, flexible and reliable"},
  {id:"w3",name:"2.5mm Wire",       cat:"Wires",          badge:"Bestseller",    desc:"Heavy-duty, most popular choice for home wiring"},
  {id:"w4",name:"4.0mm Wire",       cat:"Wires",          badge:null,            desc:"Industrial grade, handles high load capacity"},
  {id:"f1",name:"Table Fan 400mm",  cat:"Fans",           badge:"Popular",       desc:"Compact tabletop cooling, 3-speed, low power draw"},
  {id:"f2",name:"Ceiling Fan 1200mm",cat:"Fans",          badge:null,            desc:"High CFM airflow, silent operation, ISI rated"},
  {id:"f3",name:"Ceiling Fan 900mm",cat:"Fans",           badge:null,            desc:"Standard size, energy-efficient motor"},
  {id:"f4",name:"Pedestal Fan 450mm",cat:"Fans",          badge:null,            desc:"Adjustable height, wide oscillation, 3-speed"},
  {id:"f5",name:"Exhaust Fan 300mm",cat:"Fans",           badge:null,            desc:"Bathroom and kitchen ventilation, low noise"},
  {id:"m1",name:"Mixer Grinder 750W",cat:"Mixer Grinders",badge:"Bestseller",   desc:"High-speed grinding, durable copper motor"},
  {id:"m2",name:"Mixer Grinder 500W",cat:"Mixer Grinders",badge:null,           desc:"Compact design, everyday use, 2 jars included"},
  {id:"i1",name:"Automatic Iron 750W",cat:"Iron Boxes",   badge:"Popular",       desc:"Auto shutoff, thermostat control, safety certified"},
  {id:"i2",name:"Heavy Iron 1000W", cat:"Iron Boxes",     badge:null,            desc:"Professional-grade pressing power, durable soleplate"},
  {id:"p1",name:"4-Way Multiplug",  cat:"Multiplug",      badge:null,            desc:"Surge protection, compact design, 3-pin sockets"},
  {id:"p2",name:"6-Way Extension",  cat:"Multiplug",      badge:null,            desc:"Long cable, 3-pin sockets, master switch"},
  {id:"s1",name:"Modular Socket 6A",cat:"Sockets",        badge:null,            desc:"Slim-profile design, safe touch shutters"},
  {id:"s2",name:"Modular Socket 16A",cat:"Sockets",       badge:null,            desc:"High-amperage rated, heavy appliance use"},
  {id:"t1",name:"2-Pin Top 6A",     cat:"2-Pin Tops",     badge:null,            desc:"Standard household connector, durable plastic"},
  {id:"t2",name:"2-Pin Top 16A",    cat:"2-Pin Tops",     badge:null,            desc:"Industrial-grade heavy duty connector"},
  {id:"c1",name:"Fan Capacitor 2.5 MFD",cat:"Fan Capacitors",badge:null,        desc:"Standard capacitor, compatible with most fans"},
  {id:"c2",name:"Fan Capacitor 3.15 MFD",cat:"Fan Capacitors",badge:null,       desc:"High-performance model, longer fan life"},
];

const CATS = ["Wires","Fans","Mixer Grinders","Iron Boxes","Multiplug","Sockets","2-Pin Tops","Fan Capacitors"];

const CAT_TILES = [
  {cat:"Wires",         desc:"Power the right way. ISI certified options for every load."},
  {cat:"Fans",          desc:"Cool comfort for every room size."},
  {cat:"Mixer Grinders",desc:"Grind, blend, mix with ease. Built for daily use."},
  {cat:"Iron Boxes",    desc:"Professional pressing, everyday perfection."},
];

const BADGE_STYLE = {
  "ISI Certified": {bg:"transparent", border:"1.5px solid #F47D05", color:"#F47D05"},
  "Bestseller":    {bg:"#FFB81C",     border:"none",                  color:"#1A1A1A"},
  "Popular":       {bg:"#2563EB",     border:"none",                  color:"#FFFFFF"},
};

const VALUES = [
  {ico:"check",  label:"Quality Products",   sub:"ISI certified. No shortcuts."},
  {ico:"store",  label:"50+ Years Local",    sub:"Serving Lucknow since 1970."},
  {ico:"shield", label:"Honest Service",     sub:"Fair prices. No upselling."},
  {ico:"tag",    label:"Best Prices",        sub:"Competitive rates, always."},
];

// ══════════════════════════════════════════
// APP
// ══════════════════════════════════════════
export default function App() {
  const [slide, setSlide]           = useState(0);
  const [selCat, setSelCat]         = useState("Wires");
  const [search, setSearch]         = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [menuOpen, setMenuOpen]     = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isMobile, setIsMobile]     = useState(window.innerWidth < 768);
  const [scrolled, setScrolled]     = useState(false);
  const [fabVisible, setFabVisible] = useState(true);
  const lastY = useRef(0);
  const productsRef = useRef(null);
  const intervalRef = useRef(null);
  const touchX = useRef(null);

  useEffect(() => {
    if (!document.getElementById("outfit-font")) {
      const l = Object.assign(document.createElement("link"), {
        id:"outfit-font", rel:"stylesheet",
        href:"https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap",
      });
      document.head.appendChild(l);
    }
    const onResize = () => setIsMobile(window.innerWidth < 768);
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setFabVisible(y <= lastY.current || y < 100);
      lastY.current = y;
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, {passive:true});
    return () => { window.removeEventListener("resize", onResize); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    clearInterval(intervalRef.current);
    if (!isMobile) intervalRef.current = setInterval(() => setSlide(s=>(s+1)%4), 4500);
    return () => clearInterval(intervalRef.current);
  }, [isMobile]);

  const goSlide = (dir) => { clearInterval(intervalRef.current); setSlide(s=>(s+dir+4)%4); };

  const finalProducts = PRODUCTS.filter(p => {
    if (search) {
      const q = search.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q);
    }
    return p.cat === selCat;
  });

  const goToProducts = (cat) => {
    setSelCat(cat); setSearch(""); setSearchInput("");
    productsRef.current?.scrollIntoView({behavior:"smooth",block:"start"});
  };

  const clearSearch = () => { setSearch(""); setSearchInput(""); setSelCat("Wires"); };

  const F = {fontFamily:"'Outfit',sans-serif"};
  const oBtn = (extra={}) => ({
    ...F, background:COLORS.orange, color:COLORS.white,
    border:"none", borderRadius:8, padding:"9px 18px",
    fontWeight:600, fontSize:14, cursor:"pointer",
    display:"inline-flex", alignItems:"center", gap:8,
    textDecoration:"none", ...extra,
  });
  const gBtn = (extra={}) => ({...oBtn(), background:COLORS.green, ...extra});

  const SectionWrap = ({id, bg=COLORS.white, py=64, children}) => (
    <section id={id} style={{background:bg, padding:`${isMobile?32:py}px ${isMobile?16:24}px`}}>
      <div style={{maxWidth:1400, margin:"0 auto"}}>{children}</div>
    </section>
  );

  return (
    <div style={{...F, color:COLORS.dark, margin:0, padding:0, overflowX:"hidden", background:COLORS.white}}>

      {/* ── TOP BANNER ── */}
      {!isMobile && (
        <div style={{
          background:`linear-gradient(90deg, ${COLORS.orange}, ${COLORS.orangeDark})`,
          padding:"10px 24px", textAlign:"center", color:COLORS.white, fontSize:12, fontWeight:500,
        }}>
          Authorized Anchor &amp; Arkay Lite Dealer | Lucknow | Wired for Quality, Built on Trust
        </div>
      )}

      {/* ── NAVBAR ── */}
      <nav style={{
        position:"sticky", top:0, zIndex:100,
        background:COLORS.white,
        boxShadow:scrolled?"0 2px 20px rgba(0,0,0,0.12)":"0 1px 4px rgba(0,0,0,0.07)",
        transition:"box-shadow 0.3s",
      }}>
        <div style={{
          maxWidth:1400, margin:"0 auto", padding:"0 24px",
          height:68, display:"flex", alignItems:"center", justifyContent:"space-between", gap:16,
        }}>
          {/* Logo */}
          <div style={{display:"flex",alignItems:"center",gap:12,flexShrink:0}}>
            <div style={{
              width:40,height:40,borderRadius:9,flexShrink:0,
              background:`linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeDark})`,
              display:"flex",alignItems:"center",justifyContent:"center",
            }}>
              <Ico n="plug" size={20} color={COLORS.white}/>
            </div>
            <div style={{borderLeft:`2px solid #e8e8e8`,paddingLeft:12}}>
              <div style={{fontSize:15,fontWeight:700,color:COLORS.dark,lineHeight:1.2}}>Bhagwan Electric</div>
              <div style={{fontSize:11,color:COLORS.gray}}>Since 1970</div>
            </div>
          </div>

          {!isMobile ? (
            <div style={{display:"flex",alignItems:"center",gap:4}}>
              {["Home","Products","About","Contact"].map(it => (
                <a key={it} href={`#${it.toLowerCase()}`} style={{
                  ...F,fontSize:14,fontWeight:500,color:COLORS.dark,textDecoration:"none",
                  padding:"6px 12px",borderRadius:6,
                }}
                onMouseOver={e=>e.currentTarget.style.color=COLORS.orange}
                onMouseOut={e=>e.currentTarget.style.color=COLORS.dark}>
                  {it}
                </a>
              ))}
              <button onClick={()=>setShowSearch(s=>!s)} style={{
                background:"none",border:`1.5px solid #eee`,cursor:"pointer",
                padding:7,borderRadius:7,marginLeft:4,color:COLORS.gray,display:"flex",
              }}>
                <Ico n="search" size={18} color={COLORS.gray}/>
              </button>
              <a href={`tel:${PHONE}`} style={{...oBtn({padding:"8px 14px",fontSize:13}),marginLeft:8}}>
                <Ico n="phone" size={14} color={COLORS.white}/>{PHONE}
              </a>
              <a href={WA_URL} target="_blank" rel="noreferrer" style={gBtn({padding:"8px 14px",fontSize:13})}>
                <Ico n="wa" size={14} color={COLORS.white}/>WhatsApp
              </a>
            </div>
          ) : (
            <div style={{display:"flex",alignItems:"center",gap:4}}>
              <button onClick={()=>setShowSearch(s=>!s)} style={{background:"none",border:"none",cursor:"pointer",padding:8}}>
                <Ico n="search" size={22} color={COLORS.dark}/>
              </button>
              <button onClick={()=>setMenuOpen(true)} style={{background:"none",border:"none",cursor:"pointer",padding:8}}>
                <Ico n="menu" size={24} color={COLORS.dark}/>
              </button>
            </div>
          )}
        </div>

        {showSearch && (
          <div style={{padding:"12px 24px 16px",borderTop:`1px solid ${COLORS.bg}`,background:COLORS.white}}>
            <div style={{maxWidth:560,margin:"0 auto",position:"relative"}}>
              <input autoFocus value={searchInput}
                onChange={e=>setSearchInput(e.target.value)}
                onKeyDown={e=>{
                  if(e.key==="Enter"){setSearch(searchInput);setShowSearch(false);productsRef.current?.scrollIntoView({behavior:"smooth"});}
                  if(e.key==="Escape")setShowSearch(false);
                }}
                placeholder="Search products..."
                style={{
                  width:"100%",padding:"10px 44px 10px 16px",
                  border:`1.5px solid #e5e5e5`,borderRadius:8,
                  ...F,fontSize:14,outline:"none",boxSizing:"border-box",background:COLORS.bg,
                }}
              />
              <span style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)"}}>
                <Ico n="search" size={18} color={COLORS.grayLight}/>
              </span>
            </div>
          </div>
        )}
      </nav>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <>
          <div onClick={()=>setMenuOpen(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200}}/>
          <div style={{
            position:"fixed",top:0,right:0,bottom:0,width:280,
            background:COLORS.white,zIndex:201,display:"flex",flexDirection:"column",
            boxShadow:"-4px 0 24px rgba(0,0,0,0.15)",
          }}>
            <div style={{display:"flex",justifyContent:"flex-end",padding:"16px 16px 8px"}}>
              <button onClick={()=>setMenuOpen(false)} style={{background:"none",border:"none",cursor:"pointer",padding:4}}>
                <Ico n="X" size={24} color={COLORS.dark}/>
              </button>
            </div>
            <div style={{padding:"0 24px",flex:1,overflowY:"auto"}}>
              {["Home","Products","About","Contact"].map(it=>(
                <a key={it} href={`#${it.toLowerCase()}`} onClick={()=>setMenuOpen(false)} style={{
                  display:"block",padding:"14px 0",...F,fontSize:16,fontWeight:600,
                  color:COLORS.dark,textDecoration:"none",borderBottom:`1px solid ${COLORS.bg}`,
                }}>{it}</a>
              ))}
              <div style={{marginTop:32,display:"flex",flexDirection:"column",gap:12}}>
                <a href={`tel:${PHONE}`} style={{...oBtn(),justifyContent:"center"}}><Ico n="phone" size={16} color={COLORS.white}/>Call Us</a>
                <a href={WA_URL} target="_blank" rel="noreferrer" style={{...gBtn(),justifyContent:"center"}}><Ico n="wa" size={16} color={COLORS.white}/>WhatsApp</a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── HERO CAROUSEL ── */}
      <section id="home" style={{position:"relative",overflow:"hidden",height:isMobile?260:540}}
        onTouchStart={e=>{ touchX.current = e.touches[0].clientX; }}
        onTouchEnd={e=>{
          if(!touchX.current) return;
          const diff = touchX.current - e.changedTouches[0].clientX;
          if(Math.abs(diff)>50) goSlide(diff>0?1:-1);
          touchX.current=null;
        }}>
        {HERO_IMGS.map((img,i)=>(
          <div key={i} style={{
            position:"absolute",inset:0,
            backgroundImage:`url(${img})`,backgroundSize:"cover",backgroundPosition:"center",
            opacity:i===slide?1:0,transition:"opacity 0.7s ease",
          }}/>
        ))}

        {/* Bottom gradient + CTAs */}
        <div style={{
          position:"absolute",bottom:0,left:0,right:0,
          background:"linear-gradient(transparent, rgba(0,0,0,0.7))",
          padding:isMobile?"14px 16px 16px":"24px 48px",
          display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:12,
        }}>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <a href={WA_URL} target="_blank" rel="noreferrer" style={{
              ...oBtn({padding:isMobile?"7px 12px":"10px 20px",fontSize:isMobile?12:14}),
            }}><Ico n="wa" size={isMobile?13:16} color={COLORS.white}/>WhatsApp for Price</a>
            <a href={`tel:${PHONE}`} style={{
              ...F,textDecoration:"none",
              background:"rgba(255,255,255,0.18)",border:"1.5px solid rgba(255,255,255,0.45)",
              color:COLORS.white,borderRadius:8,padding:isMobile?"7px 12px":"10px 20px",
              fontWeight:600,fontSize:isMobile?12:14,display:"inline-flex",alignItems:"center",gap:8,
            }}><Ico n="phone" size={isMobile?13:16} color={COLORS.white}/>{PHONE}</a>
          </div>
          <div style={{display:"flex",gap:6,flexShrink:0}}>
            {[0,1,2,3].map(i=>(
              <button key={i} onClick={()=>setSlide(i)} style={{
                width:i===slide?22:7,height:7,borderRadius:4,border:"none",cursor:"pointer",
                background:i===slide?COLORS.orange:"rgba(255,255,255,0.45)",
                padding:0,transition:"all 0.3s",
              }}/>
            ))}
          </div>
        </div>

        {/* Arrows */}
        {[{s:"left",fn:()=>goSlide(-1),ico:"chevL"},{s:"right",fn:()=>goSlide(1),ico:"chevR"}].map(({s,fn,ico})=>(
          <button key={s} onClick={fn} style={{
            position:"absolute",[s]:14,top:"50%",transform:"translateY(-50%)",
            background:"rgba(255,255,255,0.18)",border:"1.5px solid rgba(255,255,255,0.35)",
            color:COLORS.white,borderRadius:8,width:38,height:38,
            cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
          }}>
            <Ico n={ico} size={18} color={COLORS.white}/>
          </button>
        ))}
      </section>

      {/* ── CATEGORY TILES ── */}
      <SectionWrap id="products" py={72}>
        <h2 style={{fontSize:isMobile?22:30,fontWeight:700,textAlign:"center",marginBottom:6,color:COLORS.dark}}>
          Shop by Category
        </h2>
        <p style={{textAlign:"center",color:COLORS.gray,fontSize:14,marginBottom:36}}>
          Click a category to browse products
        </p>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?14:20}}>
          {CAT_TILES.map((tile,i)=>(
            <div key={tile.cat} onClick={()=>goToProducts(tile.cat)}
              style={{
                display:"flex",flexDirection:isMobile?"column":(i%2===0?"row":"row-reverse"),
                borderRadius:14,overflow:"hidden",cursor:"pointer",
                border:`1px solid #ebebeb`,minHeight:isMobile?180:200,
                boxShadow:"0 2px 12px rgba(0,0,0,0.05)",transition:"transform 0.22s,box-shadow 0.22s",
              }}
              onMouseOver={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 8px 28px rgba(0,0,0,0.11)";}}
              onMouseOut={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,0.05)";}}>
              <div style={{
                flex:1,minHeight:isMobile?150:180,
                backgroundImage:`url(${PRODUCT_IMGS[tile.cat]})`,
                backgroundSize:"cover",backgroundPosition:"center",
              }}/>
              <div style={{
                flex:1,padding:isMobile?"14px 18px":"22px 28px",
                display:"flex",flexDirection:"column",justifyContent:"center",background:COLORS.white,
              }}>
                <div style={{fontSize:10,fontWeight:700,color:COLORS.orange,textTransform:"uppercase",letterSpacing:"1.5px",marginBottom:7}}>
                  Category
                </div>
                <h3 style={{fontSize:isMobile?17:21,fontWeight:700,color:COLORS.dark,margin:"0 0 7px",lineHeight:1.25}}>
                  {tile.cat}
                </h3>
                <p style={{fontSize:13,color:COLORS.gray,margin:"0 0 14px",lineHeight:1.55}}>
                  {tile.desc}
                </p>
                <div style={{display:"inline-flex",alignItems:"center",gap:5,color:COLORS.orange,fontSize:13,fontWeight:600}}>
                  View Products <Ico n="chevR" size={15} color={COLORS.orange}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* ── PRODUCTS SECTION ── */}
      <section ref={productsRef} style={{background:COLORS.bg,padding:`${isMobile?32:64}px ${isMobile?16:24}px`}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <h2 style={{fontSize:isMobile?22:30,fontWeight:700,color:COLORS.dark,marginBottom:5}}>
            Explore the Range
          </h2>
          <p style={{color:COLORS.gray,fontSize:14,marginBottom:24}}>
            Meghdoot Supreme + Anchor + Arkay Lite — everything electrical, one store.
          </p>

          {/* Search */}
          <div style={{display:"flex",gap:10,marginBottom:16,flexWrap:"wrap"}}>
            <div style={{position:"relative",flex:1,minWidth:200}}>
              <input value={searchInput}
                onChange={e=>setSearchInput(e.target.value)}
                onKeyDown={e=>{ if(e.key==="Enter") setSearch(searchInput); }}
                placeholder="Search products..."
                style={{
                  width:"100%",padding:"10px 44px 10px 16px",
                  border:`1.5px solid #e0e0e0`,borderRadius:8,
                  ...F,fontSize:14,outline:"none",boxSizing:"border-box",background:COLORS.white,
                }}
              />
              <button onClick={()=>setSearch(searchInput)} style={{
                position:"absolute",right:8,top:"50%",transform:"translateY(-50%)",
                background:"none",border:"none",cursor:"pointer",padding:4,
              }}>
                <Ico n="search" size={17} color={COLORS.gray}/>
              </button>
            </div>
            {search && (
              <button onClick={clearSearch} style={{
                ...F,background:COLORS.white,color:COLORS.gray,border:`1.5px solid #ccc`,
                borderRadius:8,padding:"9px 16px",fontWeight:600,fontSize:14,cursor:"pointer",
              }}>
                Clear ×
              </button>
            )}
          </div>

          {/* Category pills */}
          {!search && (
            <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:24}}>
              {CATS.map(cat=>(
                <button key={cat} onClick={()=>setSelCat(cat)} style={{
                  ...F,padding:"7px 16px",borderRadius:24,
                  border:`1.5px solid ${selCat===cat?COLORS.orange:"#ddd"}`,
                  background:selCat===cat?COLORS.orange:COLORS.white,
                  color:selCat===cat?COLORS.white:COLORS.dark,
                  fontWeight:600,fontSize:13,cursor:"pointer",transition:"all 0.18s",
                }}>
                  {cat}
                </button>
              ))}
            </div>
          )}

          {search && (
            <div style={{marginBottom:20,fontSize:13,color:COLORS.gray}}>
              {finalProducts.length} result{finalProducts.length!==1?"s":""} for "<strong>{search}</strong>"
            </div>
          )}

          {/* Grid */}
          {finalProducts.length===0 ? (
            <div style={{textAlign:"center",padding:"56px 0",color:COLORS.gray}}>
              <Ico n="search" size={32} color="#ccc"/>
              <p style={{marginTop:12,fontSize:15}}>No products found. Try a different search.</p>
            </div>
          ) : (
            <div style={{
              display:"grid",
              gridTemplateColumns:isMobile?"1fr 1fr":"repeat(4,1fr)",
              gap:isMobile?12:20,
            }}>
              {finalProducts.map(prod=>(
                <div key={prod.id} style={{
                  background:COLORS.white,borderRadius:12,overflow:"hidden",
                  border:`1px solid #ebebeb`,display:"flex",flexDirection:"column",
                  transition:"box-shadow 0.2s",
                }}
                onMouseOver={e=>e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.1)"}
                onMouseOut={e=>e.currentTarget.style.boxShadow="none"}>
                  {/* Image */}
                  <div style={{position:"relative"}}>
                    <div style={{
                      width:"100%",paddingBottom:"100%",
                      backgroundImage:`url(${PRODUCT_IMGS[prod.cat]})`,
                      backgroundSize:"cover",backgroundPosition:"center",
                      backgroundColor:COLORS.bg,
                    }}/>
                    {prod.badge && (
                      <span style={{
                        position:"absolute",top:9,left:9,
                        padding:"3px 9px",borderRadius:20,
                        fontSize:10,fontWeight:700,...F,
                        background:BADGE_STYLE[prod.badge].bg,
                        border:BADGE_STYLE[prod.badge].border,
                        color:BADGE_STYLE[prod.badge].color,
                      }}>
                        {prod.badge}
                      </span>
                    )}
                  </div>
                  {/* Info */}
                  <div style={{padding:isMobile?"10px 11px":"12px 14px",flex:1,display:"flex",flexDirection:"column"}}>
                    <div style={{fontSize:9,fontWeight:700,color:COLORS.grayLight,textTransform:"uppercase",letterSpacing:"1px",marginBottom:3}}>
                      {prod.cat}
                    </div>
                    <div style={{fontSize:isMobile?12:13,fontWeight:700,color:COLORS.dark,marginBottom:4,lineHeight:1.3}}>
                      {prod.name}
                    </div>
                    <div style={{
                      fontSize:11,color:COLORS.gray,lineHeight:1.5,flex:1,marginBottom:10,
                      overflow:"hidden",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",
                    }}>
                      {prod.desc}
                    </div>
                    <a href={`${WA_URL}?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(prod.name)}`}
                      target="_blank" rel="noreferrer"
                      style={{...gBtn({justifyContent:"center",padding:"8px 0",borderRadius:7,fontSize:12})}}>
                      <Ico n="wa" size={13} color={COLORS.white}/>WA for Price
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <SectionWrap id="about" py={80}>
        <span style={{
          background:"rgba(244,125,5,0.1)",color:COLORS.orange,
          fontSize:11,fontWeight:700,padding:"4px 12px",borderRadius:20,
          textTransform:"uppercase",letterSpacing:"1px",
        }}>Our Story</span>
        <h2 style={{fontSize:isMobile?24:34,fontWeight:700,color:COLORS.dark,margin:"12px 0 32px",lineHeight:1.2}}>
          Five Decades. One Promise.
        </h2>
        <div style={{
          display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",
          gap:isMobile?32:64,alignItems:"center",
        }}>
          <div>
            <p style={{fontSize:isMobile?14:16,lineHeight:1.85,color:COLORS.dark,marginBottom:16}}>
              In the 1970s, Laxman Prasad opened a small electrical shop in Lucknow's old city.
              The mission was simple — sell quality products at fair prices, and treat every customer like family.
            </p>
            <p style={{fontSize:isMobile?14:16,lineHeight:1.85,color:COLORS.dark}}>
              Five decades later, that mission hasn't changed. We stock Meghdoot Supreme, Anchor, and Arkay Lite products.
              Honest advice, competitive prices, and service you can rely on.
            </p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:isMobile?12:18}}>
            {VALUES.map(v=>(
              <div key={v.label} style={{background:COLORS.bg,borderRadius:12,padding:isMobile?14:22}}>
                <div style={{
                  width:42,height:42,borderRadius:10,
                  background:"rgba(244,125,5,0.1)",
                  display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12,
                }}>
                  <Ico n={v.ico} size={21} color={COLORS.orange}/>
                </div>
                <div style={{fontSize:13,fontWeight:700,color:COLORS.dark,marginBottom:4}}>{v.label}</div>
                <div style={{fontSize:12,color:COLORS.gray,lineHeight:1.5}}>{v.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrap>

      {/* ── CONTACT ── */}
      <SectionWrap id="contact" bg={COLORS.bg} py={80}>
        <h2 style={{fontSize:isMobile?22:30,fontWeight:700,color:COLORS.dark,marginBottom:5}}>
          Visit the Store
        </h2>
        <p style={{color:COLORS.gray,fontSize:14,marginBottom:32}}>
          Walk in anytime between 11 AM – 9 PM (closed Thursdays). Or just call.
        </p>
        <div style={{
          display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",
          gap:isMobile?24:40,alignItems:"start",
        }}>
          {/* Info cards */}
          <div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:16}}>
              {[
                {ico:"mapPin",label:"Address",val:"92, Old RTO Compound, G.B. Marg, Latouche Rd, Naka Hindola, Lucknow 226018",color:COLORS.gray,link:null},
                {ico:"phone", label:"Call",    val:PHONE, color:COLORS.orange,link:`tel:${PHONE}`},
                {ico:"clock", label:"Hours",   val:"11 AM – 9 PM\nClosed Thursdays",color:COLORS.gray,link:null},
                {ico:"wa",    label:"WhatsApp",val:"Message us",color:COLORS.green,link:WA_URL},
              ].map(c=>(
                <div key={c.label} style={{
                  background:COLORS.white,borderRadius:12,padding:isMobile?14:18,
                  border:`1px solid #ebebeb`,
                }}>
                  <div style={{
                    width:36,height:36,borderRadius:8,marginBottom:10,
                    background:c.color===COLORS.green?"rgba(37,211,102,0.1)":
                               c.color===COLORS.orange?"rgba(244,125,5,0.1)":"rgba(112,112,112,0.1)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                  }}>
                    <Ico n={c.ico} size={17} color={c.color}/>
                  </div>
                  <div style={{fontSize:10,fontWeight:700,color:COLORS.grayLight,textTransform:"uppercase",letterSpacing:"1px",marginBottom:5}}>
                    {c.label}
                  </div>
                  {c.link ? (
                    <a href={c.link} target={c.link.startsWith("http")?"_blank":undefined}
                      rel="noreferrer"
                      style={{...F,fontSize:12,fontWeight:600,color:c.color,textDecoration:"none"}}>
                      {c.val}
                    </a>
                  ) : (
                    <div style={{fontSize:12,color:COLORS.dark,lineHeight:1.55,whiteSpace:"pre-line"}}>{c.val}</div>
                  )}
                </div>
              ))}
            </div>
            <a href={MAPS_URL} target="_blank" rel="noreferrer"
              style={{...oBtn({justifyContent:"center",width:"100%",boxSizing:"border-box"})}}>
              <Ico n="mapPin" size={16} color={COLORS.white}/>Get Directions
            </a>
          </div>

          {/* Map */}
          <div style={{borderRadius:14,overflow:"hidden",border:`1px solid #ebebeb`,boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
            <iframe
              title="Store Location"
              src={MAPS_EMBED}
              width="100%"
              height={isMobile?260:400}
              style={{border:0,display:"block"}}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </SectionWrap>

      {/* ── FOOTER ── */}
      <footer style={{background:COLORS.dark,padding:isMobile?"40px 16px 28px":"60px 24px 32px"}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <div style={{
            display:"grid",
            gridTemplateColumns:isMobile?"1fr":"1fr 1fr 1fr 1fr",
            gap:isMobile?28:36,marginBottom:36,
          }}>
            {/* Brand */}
            <div>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
                <div style={{
                  width:36,height:36,borderRadius:8,flexShrink:0,
                  background:`linear-gradient(135deg,${COLORS.orange},${COLORS.orangeDark})`,
                  display:"flex",alignItems:"center",justifyContent:"center",
                }}>
                  <Ico n="plug" size={18} color={COLORS.white}/>
                </div>
                <div>
                  <div style={{fontSize:13,fontWeight:700,color:COLORS.white}}>Bhagwan Electric Company</div>
                  <div style={{fontSize:10,color:COLORS.gray}}>Established 1970</div>
                </div>
              </div>
              <p style={{fontSize:13,color:COLORS.gray,lineHeight:1.65,margin:0}}>
                Wired for Quality, Built on Trust.
              </p>
            </div>

            {/* Links */}
            <div>
              <div style={{fontSize:10,fontWeight:700,color:COLORS.grayLight,textTransform:"uppercase",letterSpacing:"1.5px",marginBottom:14}}>
                Quick Links
              </div>
              {["Home","Products","About","Contact"].map(it=>(
                <a key={it} href={`#${it.toLowerCase()}`} style={{
                  display:"block",...F,fontSize:13,color:COLORS.white,textDecoration:"none",marginBottom:9,
                }}
                onMouseOver={e=>e.currentTarget.style.color=COLORS.orange}
                onMouseOut={e=>e.currentTarget.style.color=COLORS.white}>
                  {it}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div style={{fontSize:10,fontWeight:700,color:COLORS.grayLight,textTransform:"uppercase",letterSpacing:"1.5px",marginBottom:14}}>
                Contact
              </div>
              {[
                {ico:"phone",val:PHONE,color:COLORS.orange,link:`tel:${PHONE}`},
                {ico:"mapPin",val:"Lucknow, Uttar Pradesh",color:COLORS.gray,link:null},
                {ico:"clock",val:"11 AM – 9 PM, ex. Thursdays",color:COLORS.gray,link:null},
              ].map((it,i)=>(
                <div key={i} style={{display:"flex",alignItems:"flex-start",gap:8,marginBottom:10}}>
                  <span style={{marginTop:1,flexShrink:0}}><Ico n={it.ico} size={13} color={it.color}/></span>
                  {it.link
                    ? <a href={it.link} style={{...F,fontSize:12,color:it.color,textDecoration:"none"}}>{it.val}</a>
                    : <span style={{fontSize:12,color:COLORS.gray}}>{it.val}</span>}
                </div>
              ))}
            </div>

            {/* Connect */}
            <div>
              <div style={{fontSize:10,fontWeight:700,color:COLORS.grayLight,textTransform:"uppercase",letterSpacing:"1.5px",marginBottom:14}}>
                Connect
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                <a href={WA_URL} target="_blank" rel="noreferrer"
                  style={{...gBtn({justifyContent:"center"})}}>
                  <Ico n="wa" size={15} color={COLORS.white}/>WhatsApp
                </a>
                <a href={IG_URL} target="_blank" rel="noreferrer"
                  style={{...oBtn({justifyContent:"center",background:"linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)"})}}>
                  <Ico n="ig" size={15} color={COLORS.white}/>Instagram
                </a>
              </div>
            </div>
          </div>

          <div style={{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:20,textAlign:"center"}}>
            <p style={{fontSize:12,color:COLORS.gray,margin:0}}>
              © 2026 Bhagwan Electric Company. All rights reserved. | Established 1970
            </p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING ACTION BUTTONS (mobile) ── */}
      {isMobile && (
        <div style={{
          position:"fixed",bottom:20,right:18,
          display:"flex",flexDirection:"column",gap:10,zIndex:150,
          opacity:fabVisible?1:0,transform:fabVisible?"translateY(0)":"translateY(16px)",
          transition:"all 0.28s",pointerEvents:fabVisible?"auto":"none",
        }}>
          {[
            {ico:"phone",bg:COLORS.orange,href:`tel:${PHONE}`},
            {ico:"wa",   bg:COLORS.green, href:WA_URL},
          ].map(f=>(
            <a key={f.ico} href={f.href}
              target={f.href.startsWith("http")?"_blank":undefined}
              rel="noreferrer"
              style={{
                width:52,height:52,borderRadius:"50%",background:f.bg,
                display:"flex",alignItems:"center",justifyContent:"center",
                textDecoration:"none",boxShadow:"0 4px 16px rgba(0,0,0,0.22)",
                transition:"transform 0.2s",
              }}
              onMouseOver={e=>e.currentTarget.style.transform="scale(1.1)"}
              onMouseOut={e=>e.currentTarget.style.transform="scale(1)"}>
              <Ico n={f.ico} size={22} color={COLORS.white}/>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
