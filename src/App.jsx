import React, { useState } from 'react';
import { 
  Calendar, MapPin, Clock, Info, Car, Train, 
  GlassWater, Utensils, Camera, Sparkles,
  Navigation, ExternalLink, Moon, Sun, Bus, 
  TramFront, Phone, Search, Coffee, Beer, Heart,
  ArrowRight, ShoppingBag, Landmark, Wine,
  CheckCircle2, AlertCircle, Smile, PartyPopper,
  Zap, Edit2, Check, Compass
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('plan');
  const [activeDay, setActiveDay] = useState(0);
  const [activeCat, setActiveCat] = useState('all');
  const [choices, setChoices] = useState({
    lunchSat: 'chiche',
    nightSat: 'clausen',
    rooftopFri: 'sixseven'
  });

  // Gestion dynamique de l'adresse du logement
  const [lodgingAddress, setLodgingAddress] = useState("14 Rue de la Boucherie, 1247 Luxembourg");
  const [isEditingLodging, setIsEditingLodging] = useState(false);
  const [tempAddress, setTempAddress] = useState(lodgingAddress);

  const toggleChoice = (key, value) => {
    setChoices(prev => ({ ...prev, [key]: value }));
  };

  const saveLodging = () => {
    setLodgingAddress(tempAddress);
    setIsEditingLodging(false);
  };

  // Itinéraire direct en utilisant la position actuelle du téléphone comme point de départ
  const handleGPS = (name, district) => {
    const destination = encodeURIComponent(`${name} ${district || ''} Luxembourg`);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

  // Itinéraire depuis votre logement vers l'activité (départ du matin)
  const handleFromLodging = (name, district) => {
    const from = encodeURIComponent(lodgingAddress);
    const to = encodeURIComponent(`${name} ${district || ''} Luxembourg`);
    window.open(`https://www.google.com/maps/dir/?api=1&origin=${from}&destination=${to}`, '_blank');
  };

  // Itinéraire de l'activité vers votre logement (retour le soir)
  const handleToLodging = (name, district) => {
    const from = encodeURIComponent(`${name} ${district || ''} Luxembourg`);
    const to = encodeURIComponent(lodgingAddress);
    window.open(`https://www.google.com/maps/dir/?api=1&origin=${from}&destination=${to}`, '_blank');
  };

  const itinerary = [
    {
      date: "Ven 19",
      title: "L'Arrivée & Premier Verre",
      mood: "On pose la caisse, on configure le logement et on l'oublie ! 🚶‍♀️✨",
      moments: [
        { 
          time: "19:30", 
          title: "Check-in & Chill", 
          desc: "Arrivée tranquille. On balance les sacs au logement, on gare la voiture (P+R Bouillon ou Glacis) et on part direct à pied.",
          icon: <Car />
        },
        { 
          time: "21:00", 
          title: "Lancement Officiel", 
          isChoice: true,
          choiceKey: "rooftopFri",
          options: [
            { id: 'sixseven', name: "SixSeven", vibe: "Le plus central", desc: "Rooftop sur le bâtiment de la Poste. La vue parfaite pour fêter le départ !" },
            { id: 'mama', name: "Mama Shelter", vibe: "Chill & DJ set", desc: "Au Kirchberg via le Tram T1. Babyfoot, néons et cocktails hyper colorés." }
          ],
          icon: <GlassWater />
        }
      ]
    },
    {
      date: "Sam 20",
      title: "Luxembourg Non-Stop",
      mood: "Pas de chichis, que du kiff. On marche, on boit, on rit. 🍻🔥",
      moments: [
        { 
          time: "10:30", 
          title: "Le Luxembourg sans chichis", 
          desc: "Ville-Haute → Bock → Corniche → Grund. C'est LA balade. On shoote les vues, on ignore les musées, on vit la ville.",
          icon: <MapPin />
        },
        { 
          time: "13:00", 
          title: "Le Lunch Stratégique", 
          isChoice: true,
          choiceKey: "lunchSat",
          options: [
            { id: 'chiche', name: "Chiche!", vibe: "Convivial à 5", desc: "Cuisine libanaise incroyable à partager. On s'installe bien, on mange chaud." },
            { id: 'charles', name: "Charles Sandwiches", vibe: "Efficace & Gourmand", desc: "Si on préfère manger sur le pouce pour filer vers les boutiques vintage." }
          ],
          icon: <Utensils />
        },
        { 
          time: "15:00", 
          title: "Ascenseur & Sensations", 
          desc: "Pétrusse + Ascenseur du Pfaffenthal. C'est beau, c'est vert, et c'est gratuit. Idéal pour digérer en marchant.",
          icon: <Camera />
        },
        { 
          time: "17:30", 
          title: "L'APÉRO DE TRANSITION", 
          desc: "Oubliez le miroir et le maquillage ! On se trouve une terrasse au Grund ou au centre pour une bière locale ou un Spritz. On profite de la lumière qui baisse sans perdre une minute.",
          icon: <Zap />,
          highlight: true
        },
        { 
          time: "20:00", 
          title: "The Roof – Le Sud", 
          desc: "Direction le Clausen pour un cocktail avec vue. C'est l'heure du coucher de soleil, c'est le moment magique.",
          icon: <Wine />
        },
        { 
          time: "22:30", 
          title: "La Nuit nous appartient", 
          isChoice: true,
          choiceKey: "nightSat",
          options: [
            { id: 'clausen', name: "Rives de Clausen", vibe: "Festif & Facile", desc: "Anciennes brasseries. On passe de bar en bar sans réfléchir." },
            { id: 'rotondes', name: "Rotondes", vibe: "Alternative & Cool", desc: "Plus industriel, immense terrasse, mood moins 'm'as-tu vu'." }
          ],
          icon: <PartyPopper />
        }
      ]
    },
    {
      date: "Dim 21",
      title: "Château & Bye Bye",
      mood: "Mission Vianden avant de retrouver Bruxelles. 🏰✌️",
      moments: [
        { 
          time: "09:00", 
          title: "Check-out Express", 
          desc: "On récupère la voiture. Direction le Nord (45 min de route easy).",
          icon: <Clock />
        },
        { 
          time: "10:30", 
          title: "Château de Vianden", 
          desc: "Le joyau. Silhouette médiévale, vue sur l'Our. C'est le dernier kiff visuel.",
          icon: <Landmark />
        },
        { 
          time: "12:30", 
          title: "Dernier Lunch à Vianden", 
          desc: "Petite terrasse au bord de l'eau avant de reprendre l'autoroute.",
          icon: <Utensils />
        },
        { 
          time: "13:30", 
          title: "Route Bruxelles", 
          desc: "On décolle pour éviter les bouchons et être rentrées vers 17h/18h.",
          icon: <ArrowRight />
        }
      ]
    }
  ];

  const catalog = [
    { id: 1, name: "de Gudde Wëllen", cat: "bar", district: "Grund", desc: "L'épicentre de la culture cool luxembourgeoise. Concerts, DJ sets pointus, stand-up et une magnifique terrasse alternative.", img: "https://images.unsplash.com/photo-1514525253344-99a42994a47a?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "FOMEAUX", cat: "shopping", district: "Centre-Ville", desc: "La pépite ultime pour votre groupe : un concept store de vêtements et accessoires vintage de créateurs et archives de luxe (Prada, Gucci, Balenciaga, Ganni).", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Konrad Café & Bar", cat: "resto", district: "Vieille-Ville", desc: "Café ultra chaleureux à la déco vintage brocante. Réputé pour son carrot cake légendaire et son ambiance parfaite pour papoter.", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Urban's Parlour", cat: "bar", district: "Vieille-Ville", desc: "Un speakeasy secret niché au premier étage du bar Urban. Ambiance tamisée, velours douillet et mixologie sur-mesure d'exception.", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400" },
    { id: 5, name: "Bazaar", cat: "resto", district: "Centre-Ville", desc: "Restaurant d'inspiration gréco-persane avec d'immenses mezzés à partager à 5. Superbes cocktails et ambiance clubbing festive au sous-sol.", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "OiO", cat: "resto", district: "Grund", desc: "Un restaurant de cuisine italienne moderne, fraîche et de saison, niché au bord de l'eau avec une magnifique terrasse longeant l'Alzette.", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400" },
    { id: 7, name: "ThéRâPie", cat: "resto", district: "Centre-Ville", desc: "Un lieu hybride magique : salon de thé japonais, matcha d'exception, pâtisseries Wagashi légères, et concept store de créateurs.", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400" },
    { id: 8, name: "Florence Speciality Coffee", cat: "resto", district: "Gare", desc: "Café de spécialité d'inspiration scandinave, burrata gourmande et ambiance de quartier détendue et locale.", img: "https://images.unsplash.com/photo-1509722747041-619f3936863e?auto=format&fit=crop&q=80&w=400" },
    { id: 9, name: "Beet", cat: "resto", district: "Place Guillaume II", desc: "Un spot végétarien/végan ultra coloré et branché. Burgers de saison incroyables, jus pressés à froid et frites de patates douces croustillantes.", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400" },
    { id: 10, name: "Scott's Pub", cat: "bar", district: "Grund", desc: "Le pub mythique avec terrasse au bord de la rivière. On y boit une pinte fraîche de bière locale les pieds dans l'eau après une belle balade.", img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="min-h-screen bg-[#F0F7FF] text-[#1D2D44] font-sans pb-32 overflow-x-hidden selection:bg-blue-200">
      {/* Header Mobile Optimized */}
      <header className="relative h-56 sm:h-64 bg-[#3A86FF] flex flex-col justify-end p-6 text-white overflow-hidden shadow-xl">
        <div className="absolute top-[-30px] right-[-30px] w-48 h-48 bg-[#4361EE] rounded-full opacity-40 animate-pulse"></div>
        <div className="relative z-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-80 italic">Luxembourg City • 19-21 Juin</p>
          <h1 className="text-4xl sm:text-5xl font-black italic tracking-tighter leading-none mb-3 uppercase">Girls<br/>Trip.</h1>
          <div className="flex gap-2 items-center bg-black/20 w-fit px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
             <Heart className="w-3 h-3 fill-blue-400 text-blue-400" />
             <span className="text-[10px] font-black uppercase tracking-widest text-white">Team de 5 • Blue Mood</span>
          </div>
        </div>
      </header>
      {/* Main Nav */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-xl z-50 border-b border-blue-100 shadow-md mx-4 -mt-6 rounded-2xl p-1">
        <div className="grid grid-cols-4 gap-1">
          {[
            { id: 'plan', label: 'PLAN', icon: <Calendar className="w-4 h-4" /> },
            { id: 'guide', label: 'IDÉES', icon: <Search className="w-4 h-4" /> },
            { id: 'transports', label: 'BUS', icon: <Bus className="w-4 h-4" /> },
            { id: 'tips', label: 'INFOS', icon: <Info className="w-4 h-4" /> }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center gap-1.5 py-2 rounded-xl transition-all ${activeTab === tab.id ? 'text-[#3A86FF] bg-blue-50' : 'text-stone-300 hover:text-stone-400'}`}
            >
              {tab.icon}
              <span className="text-[8px] font-black tracking-widest">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area */}
      <div className="max-w-md mx-auto p-4 mt-2">
        {/* Dynamic Lodging Card (Always visible or prominent on top of PLAN) */}
        {activeTab === 'plan' && (
          <div className="bg-white rounded-3xl p-5 shadow-md border-2 border-blue-100 mb-6 animate-in fade-in duration-300">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[9px] font-black uppercase text-[#3A86FF] tracking-wider">NOTRE BASE DE CAMPEMENT</span>
                <h3 className="font-extrabold text-stone-800 text-sm mt-0.5">Le Logement du Week-end</h3>
              </div>
              <button 
                onClick={() => setIsEditingLodging(!isEditingLodging)}
                className="bg-blue-50 p-2 rounded-xl text-[#3A86FF] hover:bg-blue-100 transition-colors"
              >
                {isEditingLodging ? <Check className="w-4 h-4" onClick={saveLodging} /> : <Edit2 className="w-4 h-4" />}
              </button>
            </div>

            {isEditingLodging ? (
              <div className="mt-3 flex gap-2">
                <input 
                  type="text" 
                  value={tempAddress} 
                  onChange={(e) => setTempAddress(e.target.value)} 
                  className="flex-1 text-xs border border-blue-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A86FF] font-medium"
                />
                <button 
                  onClick={saveLodging}
                  className="bg-[#3A86FF] text-white px-3 py-2 rounded-xl text-xs font-bold"
                >
                  OK
                </button>
              </div>
            ) : (
              <p className="text-xs text-stone-500 font-medium italic mt-2">{lodgingAddress}</p>
            )}

            <div className="mt-4 flex gap-2">
              <button 
                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lodgingAddress)}`, '_blank')}
                className="flex-1 py-2.5 bg-[#F0F7FF] rounded-xl flex items-center justify-center gap-2 text-[#3A86FF] text-[9px] font-black uppercase tracking-widest animate-pulse"
              >
                <Navigation className="w-3 h-3" /> VOIR SUR GOOGLE MAPS
              </button>
            </div>
          </div>
        )}
        {/* 1. PLAN TAB */}
        {activeTab === 'plan' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Day Selector - Fixed and fully visible */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {itinerary.map((day, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveDay(idx)}
                  className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeDay === idx ? 'bg-[#3A86FF] text-white shadow-lg shadow-blue-200' : 'bg-white text-stone-400 border border-blue-50'}`}
                >
                  {day.date}
                </button>
              ))}
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-[#3A86FF] mb-8 flex items-start gap-3">
               <Smile className="w-5 h-5 text-[#3A86FF] flex-shrink-0 mt-0.5" />
               <p className="text-xs font-bold italic text-stone-700 leading-tight">{itinerary[activeDay].mood}</p>
            </div>

            {/* Moments List */}
            <div className="space-y-6">
              {itinerary[activeDay].moments.map((m, i) => (
                <div key={i} className={`relative p-5 rounded-3xl ${m.highlight ? 'bg-[#3A86FF] text-white shadow-xl z-10' : 'bg-white text-[#1D2D44] shadow-sm border border-blue-50'}`}>
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg ${m.highlight ? 'bg-white/20 text-white' : 'bg-[#F0F7FF] text-[#3A86FF]'}`}>{m.time}</span>
                    <div className={m.highlight ? 'text-white opacity-80' : 'text-stone-200'}>{m.icon}</div>
                  </div>
                  
                  <h3 className={`text-lg font-black mb-1.5 uppercase tracking-tighter italic leading-tight ${m.highlight ? 'text-white' : 'text-[#1D2D44]'}`}>{m.title}</h3>
                  
                  {m.isChoice ? (
                    <div className="space-y-2.5 mt-4">
                      {m.options.map(opt => (
                        <button 
                          key={opt.id}
                          onClick={() => toggleChoice(m.choiceKey, opt.id)}
                          className={`w-full p-3.5 rounded-xl border-2 text-left transition-all ${choices[m.choiceKey] === opt.id ? 'border-[#3A86FF] bg-[#F0F7FF]' : 'border-stone-50 bg-white'}`}
                        >
                          <div className="flex justify-between items-center mb-0.5">
                            <span className="font-black text-[11px] uppercase tracking-tight text-[#1D2D44]">{opt.name}</span>
                            {choices[m.choiceKey] === opt.id && <CheckCircle2 className="w-4 h-4 text-[#3A86FF]" />}
                          </div>
                          <p className="text-[9px] font-black text-[#3A86FF] uppercase mb-1 italic">{opt.vibe}</p>
                          <p className="text-[11px] text-stone-500 leading-snug">{opt.desc}</p>
                          
                          {/* Navigation alternative intelligent option choice */}
                          <div className="grid grid-cols-2 gap-2 mt-3">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleGPS(opt.name, '');
                              }}
                              className="py-2 bg-blue-50 hover:bg-blue-100 text-[#3A86FF] rounded-xl text-[9px] font-black uppercase tracking-wider flex items-center justify-center gap-1"
                            >
                              <Compass className="w-3 h-3" /> GPS DIRECT
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleFromLodging(opt.name, '');
                              }}
                              className="py-2 bg-slate-50 hover:bg-slate-100 text-stone-500 rounded-xl text-[9px] font-black uppercase tracking-wider flex items-center justify-center gap-1"
                            >
                              <Navigation className="w-3 h-3" /> DEPUIS LOGT
                            </button>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <p className={`text-xs leading-relaxed font-medium italic ${m.highlight ? 'text-white/90' : 'text-stone-500'}`}>
                        {m.desc}
                      </p>
                      {!m.desc.includes("Bruxelles") && !m.desc.includes("Check-in") && (
                        <div className="flex gap-2 mt-3">
                          <button 
                            onClick={() => handleGPS(m.title, itinerary[activeDay].title)}
                            className={`flex-1 py-2 rounded-xl text-[9px] font-black uppercase tracking-wider flex items-center justify-center gap-1 border ${m.highlight ? 'bg-white/20 text-white border-white/10' : 'bg-blue-50 text-[#3A86FF] border-blue-100'}`}
                          >
                            <Compass className="w-3 h-3" /> GPS DIRECT (EN VILLE)
                          </button>
                          <button 
                            onClick={() => handleFromLodging(m.title, itinerary[activeDay].title)}
                            className={`flex-1 py-2 rounded-xl text-[9px] font-black uppercase tracking-wider flex items-center justify-center gap-1 border ${m.highlight ? 'bg-white/10 text-white border-white/5' : 'bg-slate-50 text-stone-500 border-slate-100'}`}
                          >
                            <Navigation className="w-3 h-3" /> DEPUIS LOGEMENT
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* 2. GUIDE TAB - Rich selection of trendy shops, cafes and restaurants */}
        {activeTab === 'guide' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-black italic tracking-tighter uppercase text-[#1D2D44]">Inspirations locales</h2>
              <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                {['all', 'balade', 'resto', 'bar', 'shopping'].map(c => (
                  <button 
                    key={c} 
                    onClick={() => setActiveCat(c)}
                    className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${activeCat === c ? 'bg-[#3A86FF] text-white border-[#3A86FF]' : 'bg-white text-stone-300 border-stone-100'}`}
                  >
                    {c === 'all' ? 'Tout' : c + 's'}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {catalog.filter(i => activeCat === 'all' || i.cat === activeCat).map((item) => (
                <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-blue-50 flex flex-col">
                   <div className="h-44 overflow-hidden relative">
                      <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-[#3A86FF] shadow-sm">
                        {item.cat}
                      </div>
                   </div>
                   <div className="p-5 flex-1 flex flex-col justify-between">
                     <div>
                       <div className="flex justify-between items-start mb-1">
                          <h4 className="font-black text-lg text-[#1D2D44] tracking-tight leading-tight">{item.name}</h4>
                          <span className="text-[8px] font-bold text-stone-300 uppercase">{item.district}</span>
                       </div>
                       <p className="text-[11px] text-stone-500 italic mb-4 leading-relaxed">{item.desc}</p>
                     </div>
                     
                     <div className="grid grid-cols-3 gap-1.5 mt-2">
                       <button 
                         onClick={() => handleGPS(item.name, item.district)}
                         className="py-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl flex flex-col items-center justify-center gap-1 text-[#3A86FF] text-[8px] font-black uppercase tracking-widest"
                       >
                         <Compass className="w-3.5 h-3.5" /> GPS DIRECT
                       </button>
                       <button 
                         onClick={() => handleFromLodging(item.name, item.district)}
                         className="py-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl flex flex-col items-center justify-center gap-1 text-stone-500 text-[8px] font-black uppercase tracking-widest"
                       >
                         <Navigation className="w-3.5 h-3.5" /> DEPUIS LOGT
                       </button>
                       <button 
                         onClick={() => handleToLodging(item.name, item.district)}
                         className="py-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl flex flex-col items-center justify-center gap-1 text-stone-500 text-[8px] font-black uppercase tracking-widest"
                       >
                         <Moon className="w-3.5 h-3.5" /> RETOUR LOGT
                       </button>
                     </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* 3. TRANSPORTS TAB */}
        {activeTab === 'transports' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-2xl font-black italic tracking-tighter uppercase text-[#1D2D44]">Transport 0€</h2>
            <div className="bg-[#4CC9F0] text-white p-6 rounded-3xl shadow-xl shadow-blue-100 relative overflow-hidden">
               <h3 className="text-3xl font-black italic mb-1">GRATUIT.</h3>
               <p className="text-blue-100 text-[8px] font-black uppercase tracking-widest mb-3">Bus • Tram • Train • Funiculaire</p>
               <p className="text-xs font-medium leading-relaxed italic">
                 Le seul pays au monde où le transport public est 100% gratuit. On monte, on descend, c'est tout.
               </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                { title: "Tramway T1", desc: "Relie Gare, Centre (Hamilius) et Kirchberg toutes les 5 min. Idéal pour rejoindre le Mama Shelter ou le Mudam.", icon: <TramFront className="text-[#3A86FF]" /> },
                { title: "Mobiliteit.lu", desc: "L'appli indispensable pour les horaires en temps réel.", icon: <Phone className="text-[#4361EE]" /> },
                { title: "Ascenseur Grund", desc: "Pour remonter de la vallée en 30 secondes. Gratuit.", icon: <Navigation className="text-[#4895EF]" /> }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-blue-50 flex gap-3 shadow-sm">
                  <div className="bg-blue-50 p-2.5 rounded-xl h-fit">{item.icon}</div>
                  <div>
                    <h4 className="font-extrabold text-[#1D2D44] text-[13px] mb-0.5">{item.title}</h4>
                    <p className="text-[11px] text-stone-500 leading-snug italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => window.open('https://www.mobiliteit.lu', '_blank')}
              className="w-full bg-[#1D2D44] text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 shadow-xl"
            >
              Horaires Réels <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        )}
        {/* 4. TIPS TAB */}
        {activeTab === 'tips' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-2xl font-black italic tracking-tighter uppercase text-[#1D2D44]">Parkings</h2>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-50">
               <div className="space-y-4">
                  <div className="p-4 bg-[#F0F7FF] rounded-xl border border-blue-100">
                    <p className="font-black text-[9px] text-[#3A86FF] uppercase mb-1">Royal-Hamilius</p>
                    <p className="text-xs text-stone-600 font-medium leading-tight">En plein centre. Idéal pour faire la Ville-Haute à pied.</p>
                  </div>
                  <div className="p-4 bg-[#F0F7FF] rounded-xl border border-blue-100">
                    <p className="font-black text-[9px] text-[#3A86FF] uppercase mb-1">Parking Glacis</p>
                    <p className="text-xs text-stone-600 font-medium leading-tight">Souvent plus simple. Accès direct au Tram devant le parking.</p>
                  </div>
               </div>
            </div>
          </div>
        )}

      </div>
      {/* Floating Bottom Bar - Fixed for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto bg-[#1D2D44] text-white rounded-full p-3 shadow-2xl flex items-center justify-between z-50 border border-white/10">
        <div className="flex items-center gap-3 pl-3">
          <PartyPopper className="w-4 h-4 text-[#3A86FF]" />
          <div>
            <p className="text-[8px] font-black uppercase text-blue-300 leading-none mb-1">Girls Trip</p>
            <p className="text-[10px] font-black uppercase text-[#4CC9F0] leading-none italic">Luxembourg City</p>
          </div>
        </div>
        <button 
          onClick={() => window.open('https://www.google.com/maps', '_blank')}
          className="bg-[#3A86FF] text-white px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest active:scale-95 transition-all shadow-lg"
        >
          Maps
        </button>
      </div>
    </div>
  );
};

export default App;