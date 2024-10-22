window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());gtag('config','G-MNX4SFQCYC',{'send_page_view':!0,'cookie_domain':'auto'});let startTime=new Date();let maxScroll=0;let lastInteractionTime=new Date();document.addEventListener('DOMContentLoaded',function(){const sections=['hero','about','experience','pricing','approach','resources','testimonials','safeguarding','contact'];const sectionObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){gtag('event','section_view',{'section_name':entry.target.id,'time_to_view':Math.round((new Date()-startTime)/1000)})}})},{threshold:0.5});sections.forEach(sectionId=>{const section=document.getElementById(sectionId);if(section)sectionObserver.observe(section);});document.querySelectorAll('a[download]').forEach(link=>{link.addEventListener('click',function(){gtag('event','resource_download',{'resource_name':this.download||this.href.split('/').pop(),'resource_type':this.closest('.accordion-item')?.querySelector('.accordion-button')?.textContent.trim()||'unknown','current_section':getCurrentSection()})})});const contactForm=document.getElementById('contactForm');if(contactForm){const formFields=contactForm.querySelectorAll('input, textarea');formFields.forEach(field=>{field.addEventListener('focus',function(){gtag('event','form_field_focus',{'field_name':this.name,'field_type':this.type})});field.addEventListener('blur',function(){if(this.value.trim()){gtag('event','form_field_completed',{'field_name':this.name,'field_type':this.type})}})});contactForm.addEventListener('submit',function(){gtag('event','form_submit',{'form_type':'contact'});const formResponseObserver=new MutationObserver((mutations)=>{mutations.forEach((mutation)=>{if(mutation.target.classList.contains('alert-success')){gtag('event','form_submission_success',{'form_type':'contact'})}else if(mutation.target.classList.contains('alert-danger')){gtag('event','form_submission_error',{'form_type':'contact','error_message':mutation.target.innerText})}})});const formResponse=document.getElementById('formResponse');formResponseObserver.observe(formResponse,{attributes:!0,childList:!0,characterData:!0})})}
const floatingContact=document.querySelector('.floating-contact');if(floatingContact){floatingContact.addEventListener('click',function(){gtag('event','floating_contact_click',{'scroll_position':Math.round((window.scrollY+window.innerHeight)/document.documentElement.scrollHeight*100),'current_section':getCurrentSection()})});const floatingContactObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){gtag('event','floating_contact_visible',{'scroll_position':Math.round((window.scrollY+window.innerHeight)/document.documentElement.scrollHeight*100)})}})});floatingContactObserver.observe(floatingContact)}
const calendlyButtons=document.querySelectorAll('button[onclick*="Calendly"]');calendlyButtons.forEach(button=>{button.addEventListener('click',function(){const location=this.closest('section')?.id||'unknown';gtag('event','calendly_open',{'source':location,'scroll_position':Math.round((window.scrollY+window.innerHeight)/document.documentElement.scrollHeight*100)})})});const footer=document.querySelector('footer');if(footer){footer.addEventListener('click',function(e){const link=e.target.closest('a');if(!link)return;const href=link.getAttribute('href');if(!href)return;if(href==='#'){gtag('event','back_to_top_click',{'scroll_position':Math.round((window.scrollY+window.innerHeight)/document.documentElement.scrollHeight*100),'time_on_page':Math.round((new Date()-startTime)/1000)});return}
const linkText=link.textContent.trim();const isSection=href.includes('#');const isBlog=href.includes('blog');gtag('event','footer_navigation',{'link_text':linkText,'link_type':isSection?'section':(isBlog?'blog':'other'),'destination':href,'scroll_position':Math.round((window.scrollY+window.innerHeight)/document.documentElement.scrollHeight*100)})});const footerObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){gtag('event','footer_view',{'time_to_reach':Math.round((new Date()-startTime)/1000),'scroll_depth':Math.round((window.scrollY+window.innerHeight)/document.documentElement.scrollHeight*100)})}})},{threshold:0.5});footerObserver.observe(footer)}
document.querySelectorAll('.exam-board-logo').forEach(logo=>{logo.closest('tr').addEventListener('click',function(){const examBoard=this.querySelector('img').alt;gtag('event','exam_board_view',{'exam_board':examBoard,'current_section':getCurrentSection()})})});document.querySelectorAll('.testimonial-box').forEach((testimonial,index)=>{const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){gtag('event','testimonial_view',{'testimonial_index':index+1,'testimonial_author':testimonial.querySelector('.blockquote-footer').textContent.trim()})}})},{threshold:0.7});observer.observe(testimonial)});document.querySelectorAll('.pricing .card').forEach(card=>{card.addEventListener('click',function(){const planTitle=this.querySelector('.card-title').textContent;const planPrice=this.querySelector('.card-subtitle').textContent;gtag('event','pricing_view',{'plan_name':planTitle,'plan_price':planPrice})})});document.querySelectorAll('.accordion-button').forEach(button=>{button.addEventListener('click',function(){const isExpanding=this.classList.contains('collapsed');gtag('event','resource_category_view',{'category':this.textContent.trim(),'action':isExpanding?'expand':'collapse'})})});window.addEventListener('scroll',debounce(function(){const scrollPercent=Math.round((window.scrollY+window.innerHeight)/document.documentElement.scrollHeight*100);if(scrollPercent>maxScroll){maxScroll=scrollPercent;if(maxScroll%25===0){gtag('event','scroll_milestone',{'scroll_depth':maxScroll,'time_on_page':Math.round((new Date()-startTime)/1000)})}}},250));document.addEventListener('mousemove',updateLastInteraction);document.addEventListener('keypress',updateLastInteraction);document.addEventListener('scroll',updateLastInteraction);document.addEventListener('click',updateLastInteraction)});window.addEventListener('beforeunload',function(){const endTime=new Date();const totalTime=Math.round((endTime-startTime)/1000);const activeTime=Math.round((lastInteractionTime-startTime)/1000);gtag('event','session_end',{'total_time':totalTime,'active_time':activeTime,'max_scroll':maxScroll,'ended_section':getCurrentSection(),'footer_visible':isElementInViewport(document.querySelector('footer'))})});function debounce(func,wait){let timeout;return function executedFunction(...args){const later=()=>{clearTimeout(timeout);func(...args)};clearTimeout(timeout);timeout=setTimeout(later,wait)}}
function getCurrentSection(){const sections=document.querySelectorAll('section');let currentSection='none';sections.forEach(section=>{const rect=section.getBoundingClientRect();if(rect.top<=window.innerHeight/2&&rect.bottom>=window.innerHeight/2){currentSection=section.id||'unnamed-section'}});return currentSection}
function updateLastInteraction(){lastInteractionTime=new Date()}
function isElementInViewport(el){if(!el)return!1;const rect=el.getBoundingClientRect();return(rect.top>=0&&rect.left>=0&&rect.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&rect.right<=(window.innerWidth||document.documentElement.clientWidth))}