// ============================================================
    // EDITABLE WEDDING DATA
    // Change values here to reuse this site as a template.
    // ============================================================
    const weddingData = {
      bride: "Dimple",
      groom: "Rusbel",
      weddingDate: "2026-12-18T15:00:00+08:00",
      weddingDateLong: "December 18, 2026",
      weddingDateShort: "12 · 18 · 2026",
      location: "Batangas",

      ceremony: {
        day: "Friday",
        time: "3:00 PM",
        timeDisplay: "3:00 in the afternoon",
        arrivalNote: "Please arrive 20–30 minutes early",
        venue: "Batangas Events and Villas"
      },

      reception: {
        time: "5:30 PM",
        venue: "Batangas Events and Villas"
      },

      schedule: [
        { time: "2:30 PM", title: "Guest Arrival", description: "Welcome, registration, and seating before the ceremony." },
        { time: "3:00 PM", title: "Wedding Ceremony", description: "We exchange vows surrounded by family and friends." },
        { time: "4:30 PM", title: "Photos & Cocktails", description: "Portraits, refreshments, and relaxed conversations." },
        { time: "5:30 PM", title: "Reception", description: "Dinner, speeches, cake, music, and dancing." }
      ],

      entourage: {
        brideParentMother: "Christina Aromin",
        brideParentFather: "Alfredo Aromin",
        groomParentMother: "Antonina Bulanan",
        groomParentFather: "Ferdinand Bulanan",

        ninang1: "Corazon Garcia",
        ninang2: "Violeta Aromin",
        ninang3: "Rosabelle Razon",
        ninang4: "Kherr F. Meneses",
        ninang5: "Name5",

        ninong1: "Tony Garcia",
        ninong2: "Sir Topei",
        ninong3: "Sir Michael Aldover",
        ninong4: "Dr Fridz Crespillo",
        ninong5: "James Bella",

        bestMan: "Niño Salonga Palma",
        coBestMan: "Daniel Dionisio",
        maidOfHonor: "Gleselle De Guzman",
        matronOfHonor: "Christine Dionisio",

        cordFemale: "Cheryl ann Garcia",
        cordMale: "Jer-C Dogillo",
        veilFemale: "Jovi Rose Pasay",
        veilMale: "Jay Quimson",
        candleFemale: "Erika Bea",
        candleMale: "Bryan Austine Braza",

        bridesmaid: "Name",
        groomsman: "Ya Fernie Bulanan",

        bibleBearer: "King Ethan Dane Dionisio",
        coinBearer: "Rylie Chad Bulanan",
        ringBearer: "Charles Nick Khaden Bulanan",

        bannerBearer1: "Charm Kathleen Bulanan",
        bannerBearer2: "Franzkierra Cassie Bulanan",
        bannerBearer3: "Chanelle Kiersten Bulanan"
      },

      media: {
        heroImage: "dimple-rusbel-hero.png",
        desktopIntroVideo: "video/pc_and_tablet.mp4",
        mobileIntroVideo: "video/mobile.mp4"
      }
    };

    function renderWeddingData(){
      const coupleNames = `${weddingData.bride} & ${weddingData.groom}`;

      document.title = `${coupleNames} | Wedding Invitation`;

      document.querySelectorAll('[data-bind="coupleNames"]').forEach(el => el.textContent = coupleNames);
      document.querySelectorAll('[data-bind="weddingDateLong"]').forEach(el => el.textContent = weddingData.weddingDateLong);
      document.querySelectorAll('[data-bind="weddingDateShort"]').forEach(el => el.textContent = weddingData.weddingDateShort);
      document.querySelectorAll('[data-bind="footerLine"]').forEach(el => el.textContent = `${weddingData.weddingDateLong} · ${weddingData.location}`);

      const detailGrid = document.getElementById("detailGrid");
      if(detailGrid){
        detailGrid.innerHTML = `
          <article class="detail-card"><div class="icon">☀</div><h3>Date</h3><p>${weddingData.ceremony.day}</p><strong>${weddingData.weddingDateLong}</strong></article>
          <article class="detail-card"><div class="icon">⌚</div><h3>Time</h3><p>${weddingData.ceremony.arrivalNote}</p><strong>${weddingData.ceremony.timeDisplay}</strong></article>
          <article class="detail-card"><div class="icon">⌖</div><h3>Venue</h3><p>Ceremony and reception</p><strong>${weddingData.ceremony.venue}</strong></article>
        `;
      }

      const scheduleTimeline = document.getElementById("scheduleTimeline");
      if(scheduleTimeline){
        scheduleTimeline.innerHTML = weddingData.schedule.map(item => `
          <article class="event">
            <div class="event-time">${item.time}</div>
            <div class="event-mark"></div>
            <div class="event-info"><h3>${item.title}</h3><p>${item.description}</p></div>
          </article>
        `).join("");
      }

      // Entourage values
      const entourageBindings = {
        brideParentMother: weddingData.entourage.brideParentMother,
        brideParentFather: weddingData.entourage.brideParentFather,
        groomParentMother: weddingData.entourage.groomParentMother,
        groomParentFather: weddingData.entourage.groomParentFather,

        ninang1: weddingData.entourage.ninang1,
        ninang2: weddingData.entourage.ninang2,
        ninang3: weddingData.entourage.ninang3,
        ninang4: weddingData.entourage.ninang4,

        ninong1: weddingData.entourage.ninong1,
        ninong2: weddingData.entourage.ninong2,
        ninong3: weddingData.entourage.ninong3,
        ninong4: weddingData.entourage.ninong4,
        ninong5: weddingData.entourage.ninong5,

        bestMan: weddingData.entourage.bestMan,
        coBestMan: weddingData.entourage.coBestMan,
        maidOfHonor: weddingData.entourage.maidOfHonor,
        matronOfHonor: weddingData.entourage.matronOfHonor,

        cordFemale: weddingData.entourage.cordFemale,
        cordMale: weddingData.entourage.cordMale,
        veilFemale: weddingData.entourage.veilFemale,
        veilMale: weddingData.entourage.veilMale,
        candleFemale: weddingData.entourage.candleFemale,
        candleMale: weddingData.entourage.candleMale,

        bridesmaid: weddingData.entourage.bridesmaid,
        groomsman: weddingData.entourage.groomsman,

        bibleBearer: weddingData.entourage.bibleBearer,
        coinBearer: weddingData.entourage.coinBearer,
        ringBearer: weddingData.entourage.ringBearer,

        bannerBearer1: weddingData.entourage.bannerBearer1,
        bannerBearer2: weddingData.entourage.bannerBearer2,
        bannerBearer3: weddingData.entourage.bannerBearer3
      };

      document.querySelectorAll("[data-entourage]").forEach(el => {
        const key = el.dataset.entourage;
        if (entourageBindings[key] !== undefined) {
          el.textContent = entourageBindings[key];
        }
      });
    }

    const opening=document.getElementById('opening');
    const envelopeStage=document.getElementById('envelopeStage');
    const videoStage=document.getElementById('videoStage');
    const introVideo=document.getElementById('introVideo');
    const introVideoSource=document.getElementById('introVideoSource');
    const openInvitation=document.getElementById('openInvitation');

    function chooseIntroVideo(){
      const isMobile = window.matchMedia('(max-width: 600px)').matches;
      const desiredSrc = isMobile ? weddingData.media.mobileIntroVideo : weddingData.media.desktopIntroVideo;

      if(!introVideoSource.getAttribute('src') || !introVideoSource.getAttribute('src').endsWith(desiredSrc)){
        introVideoSource.setAttribute('src', desiredSrc);
        introVideo.load();
      }
    }

    chooseIntroVideo();

    function finishOpening(){
      opening.classList.add('hidden');
      sessionStorage.setItem('invitationOpened','yes');
    }

    openInvitation.addEventListener('click',()=>{
      envelopeStage.classList.add('is-hidden');
      window.setTimeout(async()=>{
        chooseIntroVideo();
        videoStage.classList.remove('is-hidden');
        videoStage.setAttribute('aria-hidden','false');
        try{
          introVideo.currentTime=0;
          await introVideo.play();
        }catch(error){
          console.warn('Intro video could not autoplay after click:',error);
          window.setTimeout(finishOpening,1800);
        }
      },420);
    });

    introVideo.addEventListener('ended',finishOpening);
    introVideo.addEventListener('error',()=>window.setTimeout(finishOpening,1200));

    // Keep repeat visits smooth within the same tab.
    if(sessionStorage.getItem('invitationOpened')==='yes') opening.classList.add('hidden');
    const target=new Date(weddingData.weddingDate).getTime();
    function tick(){const d=Math.max(0,target-Date.now()),s=Math.floor(d/1000);days.textContent=String(Math.floor(s/86400)).padStart(2,'0');hours.textContent=String(Math.floor((s%86400)/3600)).padStart(2,'0');minutes.textContent=String(Math.floor((s%3600)/60)).padStart(2,'0');seconds.textContent=String(s%60).padStart(2,'0')};tick();setInterval(tick,1000);
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
    renderWeddingData();



    const introMediaQuery = window.matchMedia('(max-width: 600px)');
    if(introMediaQuery.addEventListener){
      introMediaQuery.addEventListener('change',()=>{
        if(videoStage.classList.contains('is-hidden')) chooseIntroVideo();
      });
    }

    // FAQ accordion — one open item at a time, matching the reference animation.
    const faqItems=[...document.querySelectorAll('.faq-item')];
    faqItems.forEach(item=>{
      const button=item.querySelector('.faq-question');
      button.addEventListener('click',()=>{
        const willOpen=!item.classList.contains('open');

        faqItems.forEach(other=>{
          other.classList.remove('open');
          const otherButton=other.querySelector('.faq-question');
          otherButton.setAttribute('aria-expanded','false');
        });

        if(willOpen){
          item.classList.add('open');
          button.setAttribute('aria-expanded','true');
        }
      });
    });

    // Swipeable photo gallery
    const galleryTrack=document.getElementById('galleryTrack');
    const gallerySlides=[...galleryTrack.children];
    const galleryDots=document.getElementById('galleryDots');
    const galleryPrev=document.getElementById('galleryPrev');
    const galleryNext=document.getElementById('galleryNext');
    let galleryIndex=0,startX=0,currentX=0,isDragging=false;

    gallerySlides.forEach((_,i)=>{const dot=document.createElement('button');dot.className='gallery-dot'+(i===0?' active':'');dot.type='button';dot.setAttribute('aria-label',`Go to photo ${i+1}`);dot.addEventListener('click',()=>goToSlide(i));galleryDots.appendChild(dot)});
    const dotButtons=[...galleryDots.children];

    function goToSlide(i){galleryIndex=(i+gallerySlides.length)%gallerySlides.length;galleryTrack.style.transform=`translateX(-${galleryIndex*100}%)`;dotButtons.forEach((d,n)=>d.classList.toggle('active',n===galleryIndex));}
    galleryPrev.addEventListener('click',()=>goToSlide(galleryIndex-1));
    galleryNext.addEventListener('click',()=>goToSlide(galleryIndex+1));

    const viewport=galleryTrack.parentElement;
    viewport.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse') viewport.setPointerCapture(e.pointerId);isDragging=true;startX=e.clientX;currentX=startX;galleryTrack.style.transition='none'});
    viewport.addEventListener('pointermove',e=>{if(!isDragging)return;currentX=e.clientX;const delta=currentX-startX;const pct=(delta/viewport.clientWidth)*100;galleryTrack.style.transform=`translateX(calc(-${galleryIndex*100}% + ${pct}%))`});
    function endSwipe(){if(!isDragging)return;isDragging=false;galleryTrack.style.transition='transform .5s cubic-bezier(.22,.61,.36,1)';const delta=currentX-startX;if(Math.abs(delta)>Math.min(70,viewport.clientWidth*.16)){goToSlide(galleryIndex+(delta<0?1:-1))}else{goToSlide(galleryIndex)}}
    viewport.addEventListener('pointerup',endSwipe);viewport.addEventListener('pointercancel',endSwipe);viewport.addEventListener('pointerleave',e=>{if(isDragging&&e.pointerType==='mouse')endSwipe()});
