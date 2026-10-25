(function() {
            // 1. CATEGORIES DEFINITION (All 9 requested categories)
            const CATEGORIES = [
                { id: 'all', name: 'Tất Cả Tác Phẩm', icon: 'sparkles' },
                { id: 'chan-dung', name: 'Chân dung nghệ thuật', icon: 'user' },
                { id: 'phong-canh', name: 'Phong cảnh', icon: 'mountain-snow' },
                { id: 'hoa-thien-nhien', name: 'Hoa và thiên nhiên', icon: 'flower-2' },
                { id: 'tranh-mau-nuoc', name: 'Tranh màu nước', icon: 'palette' },
                { id: 'thoi-trang', name: 'Ảnh thời trang', icon: 'shirt' },
                { id: 'poster', name: 'Poster', icon: 'clapperboard' },
                { id: 'phuc-che', name: 'Ảnh phục chế', icon: 'history' },
                { id: 'mv-ca-nhac', name: 'Ảnh MV ca nhạc', icon: 'music-4' },
                { id: 'bo-suu-tap-khac', name: 'Các bộ sưu tập khác', icon: 'layers' }
            ];

            // 2. INITIAL CURATED AI ARTWORKS DATASET (Easily replaceable in Admin or data/gallery.json)
            const DEFAULT_ARTWORKS = [
                {
                    id: 'td-art-01',
                    title: 'Nàng Thơ Áo Dài Tinh Tú & Ngọc Trai',
                    category: 'chan-dung',
                    aspectRatio: '9:16',
                    collection: 'Tuyển Tập Ánh Dương 2026',
                    createdAt: '2026-10-20',
                    description: 'Chân dung nghệ thuật AI khắc họa vẻ đẹp thanh tao của người phụ nữ Việt trong tà áo dài lụa dệt ánh sao vàng và ngọc trai, sử dụng kỹ thuật ánh sáng Chiaroscuro cổ điển.',
                    keywords: ['chân dung nghệ thuật', 'áo dài', 'nàng thơ', 'ánh sáng bảo tàng', 'thái dương'],
                    imageUrl: 'assets/images/chan-dung-nang-tho-ao-dai.jpg',
                    thumbUrl: 'assets/images/chan-dung-nang-tho-ao-dai.jpg',
                    featured: true,
                    allowDownload: true,
                    views: 1420,
                    order: 1
                },
                {
                    id: 'td-art-02',
                    title: 'Đêm Ngân Hà & Hoa Đăng Vịnh Hạ Long',
                    category: 'phong-canh',
                    aspectRatio: '16:9',
                    collection: 'Di Sản Thiên Nhiên Kỳ Vĩ',
                    createdAt: '2026-10-18',
                    description: 'Toàn cảnh Vịnh Hạ Long huyền ảo dưới dải Ngân Hà tím biếc, mặt nước ngọc lục bảo phát광 cùng hàng ngàn đèn hoa đăng trôi nhẹ giữa kỳ quan đá vôi.',
                    keywords: ['phong cảnh', 'vịnh hạ long', 'ngân hà', 'hoa đăng', '16:9'],
                    imageUrl: 'assets/images/phong-canh-vinh-ha-long.jpg',
                    thumbUrl: 'assets/images/phong-canh-vinh-ha-long.jpg',
                    featured: true,
                    allowDownload: true,
                    views: 1890,
                    order: 2
                },
                {
                    id: 'td-art-03',
                    title: 'Bạch Liên Pha Lê Kết Sương Vàng',
                    category: 'hoa-thien-nhien',
                    aspectRatio: '1:1',
                    collection: 'Thiền Định & Thực Vật Nghệ Thuật',
                    createdAt: '2026-10-15',
                    description: 'Tác phẩm macro nghệ thuật tái hiện đóa sen trắng trong suốt như pha lê với đường gân dát vàng 24K bung nở trên mặt hồ tĩnh lặng.',
                    keywords: ['hoa sen', 'thiên nhiên', 'pha lê', 'vàng 24k', 'ảnh vuông 1:1'],
                    imageUrl: 'assets/images/hoa-sen-pha-le-vang.jpg',
                    thumbUrl: 'assets/images/hoa-sen-pha-le-vang.jpg',
                    featured: true,
                    allowDownload: true,
                    views: 1250,
                    order: 3
                },
                {
                    id: 'td-art-04',
                    title: 'Thu Vàng Phố Cổ Hội An Trên Giấy Dó',
                    category: 'tranh-mau-nuoc',
                    aspectRatio: '3:4',
                    collection: 'Ký Ức Màu Nước Đông Dương',
                    createdAt: '2026-10-12',
                    description: 'Sự kết hợp tinh tế giữa kỹ thuật thủy mặc phương Đông và màu nước hiện đại, tái hiện Chùa Cầu và thuyền đèn lồng Hội An dưới tán lá phong thu.',
                    keywords: ['tranh màu nước', 'hội an', 'chùa cầu', 'giấy dó', 'hoài niệm'],
                    imageUrl: 'assets/images/tranh-mau-nuoc-hoi-an.jpg',
                    thumbUrl: 'assets/images/tranh-mau-nuoc-hoi-an.jpg',
                    featured: false,
                    allowDownload: true,
                    views: 980,
                    order: 4
                },
                {
                    id: 'td-art-05',
                    title: 'Hoàng Kim & Hắc Diện — Haute Couture Lookbook',
                    category: 'thoi-trang',
                    aspectRatio: '9:16',
                    collection: 'Thái Dương Avant-Garde Fashion',
                    createdAt: '2026-10-10',
                    description: 'Thiết kế đầm điêu khắc Origami kết hợp chất liệu vàng lỏng và nhung đen tuyền trong không gian kiến trúc bê tông đương đại.',
                    keywords: ['ảnh thời trang', 'haute couture', 'lookbook', 'origami', '9:16'],
                    imageUrl: 'assets/images/thoi-trang-hoang-kim.jpg',
                    thumbUrl: 'assets/images/thoi-trang-hoang-kim.jpg',
                    featured: false,
                    allowDownload: false,
                    views: 1120,
                    order: 5
                },
                {
                    id: 'td-art-06',
                    title: 'Khúc Độc Tấu Vĩ Cầm Giữa Nhật Thực Toàn Phần',
                    category: 'mv-ca-nhac',
                    aspectRatio: '3:4',
                    collection: 'Visual MV & Điện Ảnh Siêu Thực',
                    createdAt: '2026-10-08',
                    description: 'Key visual chính thức dành cho dự án MV ca nhạc giao hưởng: nghệ sĩ vĩ cầm đứng trên đài kính lơ lửng giữa biển mây vàng dưới vầng nhật thực.',
                    keywords: ['ảnh mv ca nhạc', 'nhật thực', 'vĩ cầm', 'key visual', 'điện ảnh'],
                    imageUrl: 'assets/images/mv-ca-nhac-nhat-thuc.jpg',
                    thumbUrl: 'assets/images/mv-ca-nhac-nhat-thuc.jpg',
                    featured: false,
                    allowDownload: true,
                    views: 1640,
                    order: 6
                },
                {
                    id: 'td-art-07',
                    title: 'Poster Triển Lãm: Giao Lộ Ánh Sáng Vũ Trụ',
                    category: 'poster',
                    aspectRatio: '3:4',
                    collection: 'Visual MV & Điện Ảnh Siêu Thực',
                    createdAt: '2026-10-05',
                    description: 'Tác phẩm thiết kế bố cục Poster điện ảnh tỷ lệ 3:4 với khoảng thở thị giác dành cho tiêu đề sự kiện âm nhạc và triển lãm nghệ thuật số.',
                    keywords: ['poster', 'thiết kế poster', 'triển lãm', 'ánh sáng', '3:4'],
                    imageUrl: 'assets/images/mv-ca-nhac-nhat-thuc.jpg',
                    thumbUrl: 'assets/images/mv-ca-nhac-nhat-thuc.jpg',
                    featured: false,
                    allowDownload: true,
                    views: 870,
                    order: 7
                },
                {
                    id: 'td-art-08',
                    title: 'Phục Chế Màu Di Sản: Dinh Thự Đông Dương 1925',
                    category: 'phuc-che',
                    aspectRatio: '1:1',
                    collection: 'Hồi Sinh Ký Ức Thời Gian',
                    createdAt: '2026-10-02',
                    description: 'Tác phẩm phục chế và lên màu AI độ phân giải cực cao từ tư liệu kiến trúc cổ Việt Nam thập niên 1920, tái tạo từng viên gạch tàu và tà áo ngũ thân.',
                    keywords: ['ảnh phục chế', 'đông dương', 'di sản', 'cổ điển', '1:1'],
                    imageUrl: 'assets/images/phuc-che-dinh-thu-dong-duong.jpg',
                    thumbUrl: 'assets/images/phuc-che-dinh-thu-dong-duong.jpg',
                    featured: false,
                    allowDownload: true,
                    views: 1530,
                    order: 8
                },
                {
                    id: 'td-art-09',
                    title: 'Thánh Đường Nghệ Thuật Thái Dương & Hồ Sen Mây',
                    category: 'bo-suu-tap-khac',
                    aspectRatio: '16:9',
                    collection: 'Tuyển Tập Ánh Dương 2026',
                    createdAt: '2026-10-24',
                    description: 'Tác phẩm kiến trúc ý niệm kết hợp bảo tàng nghệ thuật đương đại với ruộng bậc thang Tây Bắc và hồ sen phản chiếu ánh mặt trời vàng rực rỡ.',
                    keywords: ['bộ sưu tập khác', 'kiến trúc ý niệm', 'bảo tàng số', 'thái dương', '16:9'],
                    imageUrl: 'assets/images/hero-exhibition-thai-duong.jpg',
                    thumbUrl: 'assets/images/hero-exhibition-thai-duong.jpg',
                    featured: false,
                    allowDownload: true,
                    views: 2150,
                    order: 9
                }
            ];

            const DEFAULT_REQUESTS = [
                {
                    id: 'req-01',
                    name: 'Trần Hoàng Nhật Minh',
                    phone: '0912 345 678',
                    email: 'nhatminh.media@gmail.com',
                    service: 'Thiết kế Poster / Ảnh MV Ca nhạc',
                    ratio: '16:9 (Ngang Điện ảnh)',
                    desc: 'Cần đặt bộ 8 ảnh visual MV ballad cổ trang kết hợp hiệu ứng sương mù và trăng vàng.',
                    createdAt: '2026-10-24 14:20'
                },
                {
                    id: 'req-02',
                    name: 'Lê Ngọc Bảo Trân',
                    phone: '0987 654 321',
                    email: 'baotran.design@gmail.com',
                    service: 'Khóa học: Làm Chủ Nghệ Thuật Prompt & Nhiếp Ảnh AI',
                    ratio: 'Tư vấn theo dự án',
                    desc: 'Đăng ký lớp học 1-1 cuối tuần để ứng dụng cho studio thời trang cá nhân.',
                    createdAt: '2026-10-25 09:15'
                }
            ];

            // 3. APPLICATION STATE
            const state = {
                artworks: [],
                requests: [],
                activeCategory: 'all',
                activeRatio: 'all',
                searchQuery: '',
                sortBy: 'order',
                layoutMode: 'masonry', // 'masonry' | 'even' | 'collection'
                isAdminAuthenticated: false,
                adminPass: 'thaiduong2026',
                cloudConfig: {
                    cloudinaryName: '',
                    cloudinaryPreset: '',
                    cloudinaryFolder: 'thai-duong-gallery',
                    githubOwner: '',
                    githubRepo: '',
                    githubBranch: 'main',
                    githubPath: 'data/gallery.json',
                    githubToken: ''
                },
                lightbox: {
                    isOpen: false,
                    currentIndex: 0,
                    filteredIds: [],
                    zoom: 1,
                    slideshowTimer: null
                },
                pendingUploads: []
            };

            // 4. SAFE PERSISTENCE LAYER (Cloud JSON + Local Cache Sync)
            function loadInitialData() {
                try {
                    const savedArtworks = localStorage.getItem('td_gallery_artworks_v1');
                    if (savedArtworks) {
                        const parsed = JSON.parse(savedArtworks);
                        if (Array.isArray(parsed) && parsed.length > 0) {
                            state.artworks = parsed;
                        } else {
                            state.artworks = JSON.parse(JSON.stringify(DEFAULT_ARTWORKS));
                        }
                    } else {
                        state.artworks = JSON.parse(JSON.stringify(DEFAULT_ARTWORKS));
                    }

                    const savedReqs = localStorage.getItem('td_gallery_requests_v1');
                    state.requests = savedReqs ? JSON.parse(savedReqs) : JSON.parse(JSON.stringify(DEFAULT_REQUESTS));

                    const savedCloud = localStorage.getItem('td_gallery_cloud_v1');
                    if (savedCloud) {
                        state.cloudConfig = Object.assign(state.cloudConfig, JSON.parse(savedCloud));
                    }

                    const savedPass = localStorage.getItem('td_gallery_admin_pass_v1');
                    if (savedPass) state.adminPass = savedPass;
                } catch (e) {
                    state.artworks = JSON.parse(JSON.stringify(DEFAULT_ARTWORKS));
                    state.requests = JSON.parse(JSON.stringify(DEFAULT_REQUESTS));
                }
            }

            function saveArtworksState() {
                try {
                    localStorage.setItem('td_gallery_artworks_v1', JSON.stringify(state.artworks));
                } catch (e) {
                    // Fallback if quota exceeded
                }
                updateCounters();
            }

            function saveRequestsState() {
                try {
                    localStorage.setItem('td_gallery_requests_v1', JSON.stringify(state.requests));
                } catch (e) {}
                updateCounters();
            }

            // 5. TOAST NOTIFICATION HELPER
            function showToast(message, type = 'success') {
                const container = document.getElementById('toastContainer');
                if (!container) return;
                const toast = document.createElement('div');
                const borderClass = type === 'error' ? 'border-rose-500/50 bg-rose-950/90 text-rose-200' : 'border-amber-400/50 bg-stone-900/95 text-amber-200';
                toast.className = `pointer-events-auto p-4 rounded-xl border ${borderClass} shadow-2xl backdrop-blur-md flex items-start gap-3 text-xs sm:text-sm transition-all duration-300`;
                toast.innerHTML = `
                    <i data-lucide="${type === 'error' ? 'alert-circle' : 'sparkles'}" class="w-4 h-4 shrink-0 mt-0.5 text-amber-400"></i>
                    <div class="flex-grow leading-relaxed">${message}</div>
                `;
                container.appendChild(toast);
                if (window.lucide) window.lucide.createIcons();
                setTimeout(() => {
                    toast.style.opacity = '0';
                    setTimeout(() => toast.remove(), 300);
                }, 4200);
            }

            // 6. CATEGORY NAME LOOKUP
            function getCategoryName(catId) {
                const found = CATEGORIES.find(c => c.id === catId);
                return found ? found.name : 'Bộ sưu tập khác';
            }

            function getRatioBadgeClass(ratio) {
                if (ratio === '16:9') return 'ratio-16-9';
                if (ratio === '9:16') return 'ratio-9-16';
                if (ratio === '1:1') return 'ratio-1-1';
                return 'ratio-3-4';
            }

            // 7. RENDER FEATURED MASTERPIECES
            function renderFeaturedSpotlights() {
                const container = document.getElementById('featuredGridContainer');
                if (!container) return;
                const featuredList = state.artworks.filter(a => a.featured).slice(0, 3);
                const listToRender = featuredList.length > 0 ? featuredList : state.artworks.slice(0, 3);

                container.innerHTML = listToRender.map(item => `
                    <article class="museum-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col" data-open-lightbox="${item.id}">
                        <div class="relative h-72 sm:h-80 overflow-hidden bg-stone-950">
                            <img src="${item.thumbUrl || item.imageUrl}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80"></div>
                            <div class="absolute top-3 left-3 flex items-center gap-1.5">
                                <span class="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-500 text-stone-950">Tiêu Biểu</span>
                                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-950/80 text-amber-300 border gold-border">${item.aspectRatio}</span>
                            </div>
                            <div class="absolute bottom-3 left-3 right-3">
                                <span class="text-[11px] text-amber-300 font-medium">${getCategoryName(item.category)}</span>
                                <h4 class="font-serif-art text-xl font-bold text-white leading-snug">${item.title}</h4>
                            </div>
                        </div>
                        <div class="p-4 flex-grow flex flex-col justify-between space-y-3">
                            <p class="text-xs text-stone-400 line-clamp-2">${item.description}</p>
                            <div class="flex items-center justify-between text-[11px] text-amber-300 pt-2 border-t gold-border">
                                <span><i data-lucide="folder" class="w-3.5 h-3.5 inline mr-1"></i>${item.collection}</span>
                                <span class="font-semibold group-hover:translate-x-1 transition inline-flex items-center gap-1">Thưởng lãm <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i></span>
                            </div>
                        </div>
                    </article>
                `).join('');

                if (window.lucide) window.lucide.createIcons();
            }

            // 8. RENDER CATEGORY PILLS
            function renderCategoryFilterBar() {
                const bar = document.getElementById('categoryFilterBar');
                if (!bar) return;

                bar.innerHTML = CATEGORIES.map(cat => {
                    const count = cat.id === 'all'
                        ? state.artworks.length
                        : state.artworks.filter(a => a.category === cat.id).length;
                    const isActive = state.activeCategory === cat.id;
                    const btnStyle = isActive
                        ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 font-semibold shadow-md'
                        : 'bg-stone-900/80 hover:bg-amber-500/15 text-stone-300 border gold-border';
                    return `
                        <button type="button" data-category-id="${cat.id}" class="cat-pill-btn shrink-0 px-3.5 py-2 rounded-xl text-xs transition flex items-center gap-1.5 ${btnStyle}">
                            <i data-lucide="${cat.icon}" class="w-3.5 h-3.5"></i>
                            <span>${cat.name}</span>
                            <span class="px-1.5 py-0.2 rounded-full text-[10px] ${isActive ? 'bg-stone-950/25 text-stone-950' : 'bg-stone-800 text-amber-400'}">${count}</span>
                        </button>
                    `;
                }).join('');

                if (window.lucide) window.lucide.createIcons();
            }

            // 9. FILTER & SORT ARTWORKS
            function getFilteredArtworks() {
                const q = state.searchQuery.trim().toLowerCase();
                let list = state.artworks.filter(item => {
                    const matchCategory = state.activeCategory === 'all' || item.category === state.activeCategory;
                    const matchRatio = state.activeRatio === 'all'
                        || item.aspectRatio === state.activeRatio
                        || (state.activeRatio === '3:4' && (item.aspectRatio === '3:4' || item.aspectRatio === '4:3'));
                    const matchQuery = !q
                        || item.title.toLowerCase().includes(q)
                        || item.description.toLowerCase().includes(q)
                        || (item.collection && item.collection.toLowerCase().includes(q))
                        || (Array.isArray(item.keywords) && item.keywords.some(k => k.toLowerCase().includes(q)));
                    return matchCategory && matchRatio && matchQuery;
                });

                list.sort((a, b) => {
                    if (state.sortBy === 'newest') return (b.createdAt || '').localeCompare(a.createdAt || '');
                    if (state.sortBy === 'oldest') return (a.createdAt || '').localeCompare(b.createdAt || '');
                    if (state.sortBy === 'title') return a.title.localeCompare(b.title, 'vi');
                    if (state.sortBy === 'views') return (b.views || 0) - (a.views || 0);
                    return (a.order || 999) - (b.order || 999);
                });

                return list;
            }

            // 10. RENDER MAIN GALLERY (Masonry / Even Grid / By Collection)
            function renderMainGallery() {
                const container = document.getElementById('galleryContainer');
                const summary = document.getElementById('galleryResultSummary');
                const resetBtn = document.getElementById('btnResetAllFilters');
                if (!container) return;

                const filtered = getFilteredArtworks();
                state.lightbox.filteredIds = filtered.map(a => a.id);

                if (summary) {
                    summary.innerHTML = `Đang hiển thị <strong class="text-amber-400">${filtered.length}</strong> / ${state.artworks.length} tác phẩm nghệ thuật`;
                }

                const hasFilter = state.activeCategory !== 'all' || state.activeRatio !== 'all' || state.searchQuery.trim() !== '';
                if (resetBtn) {
                    resetBtn.classList.toggle('hidden', !hasFilter);
                }

                if (filtered.length === 0) {
                    container.innerHTML = `
                        <div class="museum-card rounded-2xl p-12 text-center space-y-4">
                            <i data-lucide="search-x" class="w-10 h-10 text-amber-400 mx-auto"></i>
                            <h4 class="font-serif-art text-2xl font-bold">Không tìm thấy tác phẩm phù hợp với bộ lọc hiện tại</h4>
                            <p class="text-xs sm:text-sm text-stone-400 max-w-md mx-auto">Bạn hãy thử từ khóa khác hoặc nhấn đặt lại bộ lọc để xem toàn bộ kho lưu trữ hình ảnh Thái Dương.</p>
                            <button type="button" id="btnEmptyResetFilter" class="px-5 py-2.5 rounded-xl bg-amber-500 text-stone-950 font-semibold text-xs">Xem Tất Cả Tác Phẩm</button>
                        </div>
                    `;
                    if (window.lucide) window.lucide.createIcons();
                    const emptyBtn = document.getElementById('btnEmptyResetFilter');
                    if (emptyBtn) emptyBtn.addEventListener('click', resetFilters);
                    return;
                }

                if (state.layoutMode === 'collection') {
                    // Group by collection name
                    const groups = {};
                    filtered.forEach(art => {
                        const col = art.collection || 'Tuyển Tập Ánh Dương';
                        if (!groups[col]) groups[col] = [];
                        groups[col].push(art);
                    });

                    container.innerHTML = Object.keys(groups).map(colName => `
                        <div class="mb-12 space-y-4">
                            <div class="flex items-center justify-between border-b gold-border pb-2">
                                <h4 class="font-serif-art text-2xl font-bold text-amber-300 flex items-center gap-2">
                                    <i data-lucide="folder-heart" class="w-5 h-5"></i>
                                    <span>Bộ Sưu Tập: ${colName}</span>
                                </h4>
                                <span class="text-xs text-stone-400">${groups[colName].length} tác phẩm</span>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                ${groups[colName].map(item => buildArtworkCardHTML(item, false)).join('')}
                            </div>
                        </div>
                    `).join('');
                } else if (state.layoutMode === 'even') {
                    container.innerHTML = `
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            ${filtered.map(item => buildArtworkCardHTML(item, false)).join('')}
                        </div>
                    `;
                } else {
                    // Default Masonry Multi-Ratio Layout
                    container.innerHTML = `
                        <div class="gallery-masonry">
                            ${filtered.map(item => buildArtworkCardHTML(item, true)).join('')}
                        </div>
                    `;
                }

                if (window.lucide) window.lucide.createIcons();
            }

            function buildArtworkCardHTML(item, isMasonry) {
                const ratioClass = isMasonry ? getRatioBadgeClass(item.aspectRatio) : 'ratio-4-3';
                const wrapperClass = isMasonry ? 'gallery-masonry-item' : '';
                const tagsHtml = (item.keywords || []).slice(0, 3).map(t => `<span class="text-[10px] px-2 py-0.5 rounded bg-stone-900 text-stone-400 border border-stone-800">#${t}</span>`).join('');

                return `
                    <article class="museum-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col ${wrapperClass}" data-open-lightbox="${item.id}">
                        <div class="relative w-full ${ratioClass} overflow-hidden bg-stone-950">
                            <img src="${item.thumbUrl || item.imageUrl}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition duration-300 flex flex-col justify-end p-4">
                                <span class="text-[11px] text-amber-300 font-medium flex items-center gap-1">
                                    <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i> Nhấn để xem toàn màn hình & phóng to
                                </span>
                            </div>
                            <div class="absolute top-3 left-3 flex items-center gap-1.5">
                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-stone-950/80 text-amber-300 border gold-border backdrop-blur-sm">${getCategoryName(item.category)}</span>
                            </div>
                            <div class="absolute top-3 right-3">
                                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-950/80 text-stone-200 border gold-border">${item.aspectRatio}</span>
                            </div>
                        </div>
                        <div class="p-4 space-y-2.5 flex-grow flex flex-col justify-between">
                            <div>
                                <h4 class="font-serif-art text-xl font-bold leading-snug group-hover:text-amber-300 transition">${item.title}</h4>
                                <p class="text-xs text-stone-400 line-clamp-2 mt-1 leading-relaxed">${item.description}</p>
                            </div>
                            <div class="space-y-2 pt-2 border-t gold-border">
                                <div class="flex flex-wrap gap-1">${tagsHtml}</div>
                                <div class="flex items-center justify-between text-[11px] text-stone-400">
                                    <span>${item.createdAt || '2026'}</span>
                                    <span class="flex items-center gap-1 text-amber-400/90">
                                        <i data-lucide="${item.allowDownload ? 'download' : 'shield'}" class="w-3 h-3"></i>
                                        ${item.allowDownload ? 'Cho phép tải gốc' : 'Bảo vệ bản quyền'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                `;
            }

            function resetFilters() {
                state.activeCategory = 'all';
                state.activeRatio = 'all';
                state.searchQuery = '';
                state.sortBy = 'order';
                const searchEl = document.getElementById('searchArtworkInput');
                const ratioEl = document.getElementById('filterRatioSelect');
                const sortEl = document.getElementById('sortArtworkSelect');
                const clearBtn = document.getElementById('btnClearSearch');
                if (searchEl) searchEl.value = '';
                if (ratioEl) ratioEl.value = 'all';
                if (sortEl) sortEl.value = 'order';
                if (clearBtn) clearBtn.classList.add('hidden');
                renderCategoryFilterBar();
                renderMainGallery();
            }

            // 11. LIGHTBOX VIEWER FUNCTIONS
            function openLightboxById(artId) {
                const idx = state.lightbox.filteredIds.indexOf(artId);
                if (idx !== -1) {
                    state.lightbox.currentIndex = idx;
                } else {
                    state.lightbox.filteredIds = state.artworks.map(a => a.id);
                    state.lightbox.currentIndex = Math.max(0, state.lightbox.filteredIds.indexOf(artId));
                }
                state.lightbox.isOpen = true;
                state.lightbox.zoom = 1;
                const modal = document.getElementById('lightboxModal');
                if (modal) modal.classList.remove('hidden');
                updateLightboxView();
            }

            function updateLightboxView() {
                const artId = state.lightbox.filteredIds[state.lightbox.currentIndex];
                const item = state.artworks.find(a => a.id === artId) || state.artworks[0];
                if (!item) return;

                item.views = (item.views || 0) + 1;
                saveArtworksState();

                const imgEl = document.getElementById('lightboxImage');
                if (imgEl) {
                    imgEl.src = item.imageUrl;
                    imgEl.alt = item.title;
                    imgEl.style.transform = `scale(${state.lightbox.zoom})`;
                }

                document.getElementById('lbZoomLevel').textContent = `${Math.round(state.lightbox.zoom * 100)}%`;
                document.getElementById('lbCategoryBadge').textContent = getCategoryName(item.category);
                document.getElementById('lbTitle').textContent = item.title;
                document.getElementById('lbAspectBadge').textContent = item.aspectRatio;
                document.getElementById('lbDetailTitle').textContent = item.title;
                document.getElementById('lbDetailDate').innerHTML = `<i data-lucide="calendar" class="w-3.5 h-3.5 text-amber-400"></i> ${item.createdAt || '2026'}`;
                document.getElementById('lbDetailViews').innerHTML = `<i data-lucide="eye" class="w-3.5 h-3.5 text-amber-400"></i> ${item.views} lượt xem`;
                document.getElementById('lbDetailDesc').textContent = item.description;
                document.getElementById('lbDetailCollection').textContent = item.collection || 'Tuyển Tập Ánh Dương';
                document.getElementById('lbDetailRatio').textContent = item.aspectRatio;

                const tagsEl = document.getElementById('lbDetailTags');
                if (tagsEl) {
                    tagsEl.innerHTML = (item.keywords || []).map(k => `
                        <button type="button" data-lb-tag="${k}" class="px-2.5 py-1 rounded-lg bg-stone-900 hover:bg-amber-500/20 border gold-border text-amber-300 text-xs transition">#${k}</button>
                    `).join('');
                }

                const dlBtn = document.getElementById('btnLbDownloadOriginal');
                const dlText = document.getElementById('lbDownloadBtnText');
                if (dlBtn && dlText) {
                    if (item.allowDownload) {
                        dlBtn.disabled = false;
                        dlBtn.className = 'w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition';
                        dlText.textContent = 'Tải Ảnh Gốc Chất Lượng Cao';
                    } else {
                        dlBtn.disabled = true;
                        dlBtn.className = 'w-full py-3 rounded-xl bg-stone-800 text-stone-400 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 cursor-not-allowed';
                        dlText.textContent = 'Tác Phẩm Bảo Vệ Bản Quyền (Liên hệ Tác giả)';
                    }
                }

                if (window.lucide) window.lucide.createIcons();
            }

            function closeLightbox() {
                stopSlideshow();
                state.lightbox.isOpen = false;
                const modal = document.getElementById('lightboxModal');
                if (modal) modal.classList.add('hidden');
            }

            function stepLightbox(delta) {
                const len = state.lightbox.filteredIds.length;
                if (len === 0) return;
                state.lightbox.currentIndex = (state.lightbox.currentIndex + delta + len) % len;
                state.lightbox.zoom = 1;
                updateLightboxView();
            }

            function toggleSlideshow() {
                const txt = document.getElementById('lbSlideshowText');
                if (state.lightbox.slideshowTimer) {
                    stopSlideshow();
                    showToast('Đã tạm dừng trình chiếu tự động.');
                } else {
                    state.lightbox.slideshowTimer = setInterval(() => stepLightbox(1), 3500);
                    if (txt) txt.textContent = 'Đang chạy...';
                    showToast('Đang trình chiếu triển lãm tự động (3.5 giây / tác phẩm).');
                }
            }

            function stopSlideshow() {
                if (state.lightbox.slideshowTimer) {
                    clearInterval(state.lightbox.slideshowTimer);
                    state.lightbox.slideshowTimer = null;
                }
                const txt = document.getElementById('lbSlideshowText');
                if (txt) txt.textContent = 'Trình chiếu';
            }

            // 12. CLIENT-SIDE THUMBNAIL GENERATOR & CLOUDINARY UPLOADER
            function processImageFile(file) {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = function(evt) {
                        const img = new Image();
                        img.onload = function() {
                            const w = img.width || 1200;
                            const h = img.height || 1200;
                            const ratioVal = w / h;
                            let detectedRatio = '1:1';
                            if (ratioVal > 1.45) detectedRatio = '16:9';
                            else if (ratioVal < 0.68) detectedRatio = '9:16';
                            else if (ratioVal < 0.88 || ratioVal > 1.15) detectedRatio = '3:4';

                            // Create optimized WebP thumbnail while keeping high quality display
                            const canvas = document.createElement('canvas');
                            const maxDim = 1280;
                            let tw = w, th = h;
                            if (tw > maxDim || th > maxDim) {
                                if (tw > th) {
                                    th = Math.round((th * maxDim) / tw);
                                    tw = maxDim;
                                } else {
                                    tw = Math.round((tw * maxDim) / th);
                                    th = maxDim;
                                }
                            }
                            canvas.width = tw;
                            canvas.height = th;
                            const ctx = canvas.getContext('2d');
                            ctx.drawImage(img, 0, 0, tw, th);
                            const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.86);

                            resolve({
                                file,
                                name: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
                                originalUrl: optimizedDataUrl,
                                thumbUrl: optimizedDataUrl,
                                detectedRatio
                            });
                        };
                        img.src = evt.target.result;
                    };
                    reader.readAsDataURL(file);
                });
            }

            async function uploadToCloudinaryIfConfigured(itemObj) {
                const { cloudinaryName, cloudinaryPreset, cloudinaryFolder } = state.cloudConfig;
                if (!cloudinaryName || !cloudinaryPreset || !itemObj.file) {
                    return itemObj;
                }
                try {
                    const formData = new FormData();
                    formData.append('file', itemObj.file);
                    formData.append('upload_preset', cloudinaryPreset);
                    if (cloudinaryFolder) formData.append('folder', cloudinaryFolder);

                    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload`, {
                        method: 'POST',
                        body: formData
                    });
                    if (res.ok) {
                        const data = await res.json();
                        const secureUrl = data.secure_url;
                        const thumbUrl = secureUrl.replace('/upload/', '/upload/c_limit,w_900,f_auto,q_auto/');
                        return Object.assign({}, itemObj, {
                            originalUrl: secureUrl,
                            thumbUrl: thumbUrl
                        });
                    }
                } catch (err) {
                    // Fallback to processed data URL if network blocked in sandbox
                }
                return itemObj;
            }

            // 13. ADMIN TABLE & DASHBOARD RENDERING
            function renderAdminDashboard() {
                const tbody = document.getElementById('adminArtworksTableBody');
                if (!tbody) return;

                const sorted = [...state.artworks].sort((a, b) => (a.order || 999) - (b.order || 999));
                tbody.innerHTML = sorted.map((art, index) => `
                    <tr class="hover:bg-stone-900/60 transition">
                        <td class="py-3 px-4 font-mono text-xs text-stone-400">
                            <div class="flex items-center gap-1">
                                <span>#${index + 1}</span>
                                <button type="button" data-move-up="${art.id}" class="p-1 hover:text-amber-400" title="Đưa lên"><i data-lucide="chevron-up" class="w-3.5 h-3.5"></i></button>
                                <button type="button" data-move-down="${art.id}" class="p-1 hover:text-amber-400" title="Đưa xuống"><i data-lucide="chevron-down" class="w-3.5 h-3.5"></i></button>
                            </div>
                        </td>
                        <td class="py-3 px-4">
                            <img src="${art.thumbUrl || art.imageUrl}" alt="${art.title}" class="w-16 h-12 object-cover rounded-lg border gold-border">
                        </td>
                        <td class="py-3 px-4 max-w-xs">
                            <div class="font-semibold text-stone-100 truncate">${art.title}</div>
                            <div class="text-xs text-stone-400 truncate">${art.description}</div>
                            <div class="text-[10px] text-amber-400/80 mt-0.5">${art.collection} • ${art.createdAt}</div>
                        </td>
                        <td class="py-3 px-4">
                            <span class="px-2 py-0.5 rounded-full text-[11px] bg-amber-500/15 text-amber-300 border border-amber-500/30">${getCategoryName(art.category)}</span>
                            <span class="ml-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-stone-800 text-stone-300">${art.aspectRatio}</span>
                        </td>
                        <td class="py-3 px-4 text-center">
                            <button type="button" data-toggle-featured="${art.id}" class="px-2.5 py-1 rounded-lg text-xs font-medium ${art.featured ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-400'}">
                                ${art.featured ? 'Đang bật' : 'Tắt'}
                            </button>
                        </td>
                        <td class="py-3 px-4 text-center">
                            <button type="button" data-toggle-download="${art.id}" class="px-2.5 py-1 rounded-lg text-xs font-medium ${art.allowDownload ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-stone-800 text-stone-400'}">
                                ${art.allowDownload ? 'Cho phép' : 'Khóa'}
                            </button>
                        </td>
                        <td class="py-3 px-4 text-right whitespace-nowrap">
                            <button type="button" data-edit-art="${art.id}" class="p-2 rounded-lg border gold-border hover:bg-amber-500/15 text-amber-300 mr-1" title="Chỉnh sửa">
                                <i data-lucide="edit-3" class="w-4 h-4"></i>
                            </button>
                            <button type="button" data-delete-art="${art.id}" class="p-2 rounded-lg border border-rose-500/30 hover:bg-rose-500/20 text-rose-300" title="Xóa tác phẩm">
                                <i data-lucide="trash-2" class="w-4 h-4"></i>
                            </button>
                        </td>
                    </tr>
                `).join('');

                // Render Requests List
                const reqContainer = document.getElementById('adminRequestsList');
                if (reqContainer) {
                    if (state.requests.length === 0) {
                        reqContainer.innerHTML = `<div class="text-xs text-stone-400 py-6 text-center">Chưa có yêu cầu mới nào.</div>`;
                    } else {
                        reqContainer.innerHTML = state.requests.map(r => `
                            <div class="p-4 rounded-xl bg-stone-900/80 border gold-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div class="space-y-1">
                                    <div class="flex flex-wrap items-center gap-2">
                                        <span class="font-semibold text-amber-300 text-sm">${r.name}</span>
                                        <span class="text-xs text-stone-400">• SĐT/Zalo: <strong class="text-stone-200">${r.phone}</strong></span>
                                        ${r.email ? `<span class="text-xs text-stone-400">• ${r.email}</span>` : ''}
                                        <span class="text-[11px] text-stone-500">(${r.createdAt})</span>
                                    </div>
                                    <div class="text-xs font-medium text-emerald-300">${r.service} — Khung hình: ${r.ratio}</div>
                                    <p class="text-xs text-stone-300">${r.desc}</p>
                                </div>
                                <button type="button" data-delete-req="${r.id}" class="self-start sm:self-center px-3 py-1.5 rounded-lg border border-rose-500/30 hover:bg-rose-500/20 text-rose-300 text-xs shrink-0">
                                    Đã xử lý / Xóa
                                </button>
                            </div>
                        `).join('');
                    }
                }

                // Populate Cloud Config Inputs
                document.getElementById('cfgCloudinaryName').value = state.cloudConfig.cloudinaryName || '';
                document.getElementById('cfgCloudinaryPreset').value = state.cloudConfig.cloudinaryPreset || '';
                document.getElementById('cfgCloudinaryFolder').value = state.cloudConfig.cloudinaryFolder || 'thai-duong-gallery';
                document.getElementById('cfgGithubOwner').value = state.cloudConfig.githubOwner || '';
                document.getElementById('cfgGithubRepo').value = state.cloudConfig.githubRepo || '';
                document.getElementById('cfgGithubBranch').value = state.cloudConfig.githubBranch || 'main';
                document.getElementById('cfgGithubPath').value = state.cloudConfig.githubPath || 'data/gallery.json';
                document.getElementById('cfgGithubToken').value = state.cloudConfig.githubToken || '';

                updateCounters();
                if (window.lucide) window.lucide.createIcons();
            }

            function updateCounters() {
                const totalArtEl = document.getElementById('statTotalArtworks');
                const adminArtCountEl = document.getElementById('adminCountArtworks');
                const adminReqCountEl = document.getElementById('adminCountRequests');
                if (totalArtEl) totalArtEl.textContent = state.artworks.length;
                if (adminArtCountEl) adminArtCountEl.textContent = state.artworks.length;
                if (adminReqCountEl) adminReqCountEl.textContent = state.requests.length;
            }

            // 14. VIEW SWITCHING (Public / Admin / Architecture)
            function switchView(targetView) {
                const vPublic = document.getElementById('viewPublic');
                const vAdmin = document.getElementById('viewAdmin');
                const vArch = document.getElementById('viewArchitecture');

                vPublic.classList.add('hidden');
                vAdmin.classList.add('hidden');
                vArch.classList.add('hidden');

                if (targetView === 'admin') {
                    if (!state.isAdminAuthenticated) {
                        vPublic.classList.remove('hidden');
                        document.getElementById('loginModal').classList.remove('hidden');
                        return;
                    }
                    vAdmin.classList.remove('hidden');
                    renderAdminDashboard();
                } else if (targetView === 'architecture') {
                    vArch.classList.remove('hidden');
                } else {
                    vPublic.classList.remove('hidden');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // 15. OPEN ADD / EDIT ARTWORK MODAL
            function openArtworkModal(editItem = null) {
                state.pendingUploads = [];
                document.getElementById('uploadPreviewContainer').classList.add('hidden');
                document.getElementById('uploadPreviewGrid').innerHTML = '';
                document.getElementById('inputArtworkFiles').value = '';

                if (editItem) {
                    document.getElementById('artworkModalTitle').textContent = 'Chỉnh Sửa Thông Tin Tác Phẩm';
                    document.getElementById('editArtworkId').value = editItem.id;
                    document.getElementById('inputArtworkExternalUrl').value = editItem.imageUrl.startsWith('data:') ? '' : editItem.imageUrl;
                    document.getElementById('inputArtTitle').value = editItem.title;
                    document.getElementById('inputArtCategory').value = editItem.category;
                    document.getElementById('inputArtRatio').value = editItem.aspectRatio;
                    document.getElementById('inputArtCollection').value = editItem.collection || 'Tuyển Tập Ánh Dương 2026';
                    document.getElementById('inputArtDate').value = editItem.createdAt || '2026-10-25';
                    document.getElementById('inputArtDesc').value = editItem.description;
                    document.getElementById('inputArtKeywords').value = (editItem.keywords || []).join(', ');
                    document.getElementById('inputArtFeatured').checked = !!editItem.featured;
                    document.getElementById('inputArtAllowDownload').checked = !!editItem.allowDownload;
                } else {
                    document.getElementById('artworkModalTitle').textContent = 'Thêm Tác Phẩm Mới (Hỗ Trợ Tải Nhiều Ảnh Cùng Lúc)';
                    document.getElementById('editArtworkId').value = '';
                    document.getElementById('inputArtworkExternalUrl').value = '';
                    document.getElementById('inputArtTitle').value = '';
                    document.getElementById('inputArtCategory').value = 'chan-dung';
                    document.getElementById('inputArtRatio').value = 'auto';
                    document.getElementById('inputArtCollection').value = 'Tuyển Tập Ánh Dương 2026';
                    document.getElementById('inputArtDate').value = '2026-10-25';
                    document.getElementById('inputArtDesc').value = '';
                    document.getElementById('inputArtKeywords').value = 'thái dương, nghệ thuật ai, triển lãm';
                    document.getElementById('inputArtFeatured').checked = false;
                    document.getElementById('inputArtAllowDownload').checked = true;
                }

                document.getElementById('artworkModal').classList.remove('hidden');
            }

            // 16. COPY & SOCIAL SHARE HELPERS
            function copyTextFallbacked(text) {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
                } else {
                    fallbackCopy(text);
                }
            }

            function fallbackCopy(text) {
                const ta = document.createElement('textarea');
                ta.value = text;
                document.body.appendChild(ta);
                ta.select();
                try { document.execCommand('copy'); } catch (e) {}
                ta.remove();
            }

            function shareToPlatform(platform, customTitle = '') {
                const shareUrl = window.location.href.startsWith('http') ? window.location.href : 'https://thuvienthaiduong.vn';
                const title = customTitle || 'THƯ VIỆN HÌNH ẢNH THÁI DƯƠNG — Triển Lãm Nghệ Thuật Trí Tuệ Nhân Tạo';
                if (platform === 'facebook') {
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(title)}`, '_blank', 'noopener,noreferrer');
                    showToast('Đã mở cửa sổ chia sẻ lên Facebook.');
                } else if (platform === 'zalo') {
                    copyTextFallbacked(`${title} - ${shareUrl}`);
                    window.open(`https://zalo.me/share?url=${encodeURIComponent(shareUrl)}`, '_blank', 'noopener,noreferrer');
                    showToast('Đã sao chép liên kết & mở chia sẻ Zalo.');
                } else {
                    copyTextFallbacked(`${title} - ${shareUrl}`);
                    showToast('Đã sao chép đường dẫn liên kết vào bộ nhớ tạm!');
                }
            }

            // 17. EVENT LISTENERS INITIALIZATION
            function bindEvents() {
                // Theme Toggle
                document.getElementById('btnThemeToggle').addEventListener('click', () => {
                    document.body.classList.toggle('light-museum');
                    const isLight = document.body.classList.contains('light-museum');
                    document.getElementById('themeToggleLabel').textContent = isLight ? 'Sảnh Sáng (Ivory)' : 'Sảnh Tối (Obsidian)';
                });

                // Cloud Status Quick Trigger
                document.getElementById('btnCloudStatusTrigger').addEventListener('click', () => {
                    switchView('architecture');
                });

                // Mobile Menu Toggle
                document.getElementById('btnMobileMenu').addEventListener('click', () => {
                    document.getElementById('mobileNavDrawer').classList.toggle('hidden');
                });

                // Navigation View & Scroll Links
                document.addEventListener('click', (e) => {
                    const navTargetBtn = e.target.closest('[data-view-target]');
                    if (navTargetBtn) {
                        const targetView = navTargetBtn.getAttribute('data-view-target');
                        const scrollToId = navTargetBtn.getAttribute('data-scroll-to');
                        document.getElementById('mobileNavDrawer').classList.add('hidden');
                        switchView(targetView);
                        if (scrollToId) {
                            setTimeout(() => {
                                const el = document.getElementById(scrollToId);
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }, 80);
                        }
                        return;
                    }

                    const scrollOnlyBtn = e.target.closest('[data-scroll-to]');
                    if (scrollOnlyBtn && !scrollOnlyBtn.hasAttribute('data-view-target')) {
                        const id = scrollOnlyBtn.getAttribute('data-scroll-to');
                        const el = document.getElementById(id);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                        return;
                    }

                    // Category Filter Pill Click
                    const catBtn = e.target.closest('[data-category-id]');
                    if (catBtn) {
                        state.activeCategory = catBtn.getAttribute('data-category-id');
                        renderCategoryFilterBar();
                        renderMainGallery();
                        return;
                    }

                    // Layout Mode Switcher
                    const layoutBtn = e.target.closest('[data-layout-mode]');
                    if (layoutBtn) {
                        state.layoutMode = layoutBtn.getAttribute('data-layout-mode');
                        document.querySelectorAll('.layout-mode-btn').forEach(b => {
                            const active = b.getAttribute('data-layout-mode') === state.layoutMode;
                            b.classList.toggle('bg-amber-500/20', active);
                            b.classList.toggle('text-amber-300', active);
                        });
                        renderMainGallery();
                        return;
                    }

                    // Open Lightbox on Card Click
                    const cardEl = e.target.closest('[data-open-lightbox]');
                    if (cardEl) {
                        openLightboxById(cardEl.getAttribute('data-open-lightbox'));
                        return;
                    }

                    // Lightbox Tag Filter Click
                    const lbTagBtn = e.target.closest('[data-lb-tag]');
                    if (lbTagBtn) {
                        const tag = lbTagBtn.getAttribute('data-lb-tag');
                        closeLightbox();
                        state.searchQuery = tag;
                        document.getElementById('searchArtworkInput').value = tag;
                        document.getElementById('btnClearSearch').classList.remove('hidden');
                        renderMainGallery();
                        document.getElementById('gallerySection').scrollIntoView({ behavior: 'smooth' });
                        return;
                    }

                    // Service Quick Select
                    const srvBtn = e.target.closest('[data-select-service]');
                    if (srvBtn) {
                        const srvName = srvBtn.getAttribute('data-select-service');
                        const selectEl = document.getElementById('reqServiceType');
                        if (selectEl) selectEl.value = srvName;
                        document.getElementById('reqName').focus();
                        showToast(`Đã chọn hạng mục: "${srvName}". Mời bạn điền thông tin liên hệ.`);
                        return;
                    }

                    // Share Site Buttons
                    const shareBtn = e.target.closest('[data-share-platform]');
                    if (shareBtn) {
                        shareToPlatform(shareBtn.getAttribute('data-share-platform'));
                        return;
                    }

                    // Admin Sub-tab Switcher
                    const adminTabBtn = e.target.closest('[data-admin-tab]');
                    if (adminTabBtn) {
                        const tab = adminTabBtn.getAttribute('data-admin-tab');
                        document.querySelectorAll('.admin-tab-btn').forEach(b => {
                            const active = b.getAttribute('data-admin-tab') === tab;
                            b.className = active
                                ? 'admin-tab-btn px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-semibold text-xs sm:text-sm flex items-center gap-2'
                                : 'admin-tab-btn px-4 py-2 rounded-xl border gold-border hover:bg-amber-500/10 text-xs sm:text-sm flex items-center gap-2';
                        });
                        document.getElementById('adminTabArtworks').classList.toggle('hidden', tab !== 'artworks');
                        document.getElementById('adminTabCloud').classList.toggle('hidden', tab !== 'cloud');
                        document.getElementById('adminTabRequests').classList.toggle('hidden', tab !== 'requests');
                        document.getElementById('adminTabSecurity').classList.toggle('hidden', tab !== 'security');
                        return;
                    }

                    // Admin Table Actions
                    const toggleFeatBtn = e.target.closest('[data-toggle-featured]');
                    if (toggleFeatBtn) {
                        const id = toggleFeatBtn.getAttribute('data-toggle-featured');
                        const art = state.artworks.find(a => a.id === id);
                        if (art) {
                            art.featured = !art.featured;
                            saveArtworksState();
                            renderFeaturedSpotlights();
                            renderAdminDashboard();
                            showToast(`Đã cập nhật trạng thái tiêu biểu cho "${art.title}".`);
                        }
                        return;
                    }

                    const toggleDlBtn = e.target.closest('[data-toggle-download]');
                    if (toggleDlBtn) {
                        const id = toggleDlBtn.getAttribute('data-toggle-download');
                        const art = state.artworks.find(a => a.id === id);
                        if (art) {
                            art.allowDownload = !art.allowDownload;
                            saveArtworksState();
                            renderMainGallery();
                            renderAdminDashboard();
                            showToast(`Đã ${art.allowDownload ? 'mở' : 'khóa'} quyền tải ảnh gốc cho "${art.title}".`);
                        }
                        return;
                    }

                    const moveUpBtn = e.target.closest('[data-move-up]');
                    if (moveUpBtn) {
                        const id = moveUpBtn.getAttribute('data-move-up');
                        const sorted = [...state.artworks].sort((a, b) => (a.order || 999) - (b.order || 999));
                        const idx = sorted.findIndex(a => a.id === id);
                        if (idx > 0) {
                            const temp = sorted[idx - 1].order;
                            sorted[idx - 1].order = sorted[idx].order;
                            sorted[idx].order = temp;
                            saveArtworksState();
                            renderMainGallery();
                            renderAdminDashboard();
                        }
                        return;
                    }

                    const moveDownBtn = e.target.closest('[data-move-down]');
                    if (moveDownBtn) {
                        const id = moveDownBtn.getAttribute('data-move-down');
                        const sorted = [...state.artworks].sort((a, b) => (a.order || 999) - (b.order || 999));
                        const idx = sorted.findIndex(a => a.id === id);
                        if (idx !== -1 && idx < sorted.length - 1) {
                            const temp = sorted[idx + 1].order;
                            sorted[idx + 1].order = sorted[idx].order;
                            sorted[idx].order = temp;
                            saveArtworksState();
                            renderMainGallery();
                            renderAdminDashboard();
                        }
                        return;
                    }

                    const editArtBtn = e.target.closest('[data-edit-art]');
                    if (editArtBtn) {
                        const id = editArtBtn.getAttribute('data-edit-art');
                        const art = state.artworks.find(a => a.id === id);
                        if (art) openArtworkModal(art);
                        return;
                    }

                    const delArtBtn = e.target.closest('[data-delete-art]');
                    if (delArtBtn) {
                        const id = delArtBtn.getAttribute('data-delete-art');
                        const art = state.artworks.find(a => a.id === id);
                        if (art) {
                            state.artworks = state.artworks.filter(a => a.id !== id);
                            saveArtworksState();
                            renderFeaturedSpotlights();
                            renderCategoryFilterBar();
                            renderMainGallery();
                            renderAdminDashboard();
                            showToast(`Đã xóa tác phẩm "${art.title}" khỏi thư viện.`);
                        }
                        return;
                    }

                    const delReqBtn = e.target.closest('[data-delete-req]');
                    if (delReqBtn) {
                        const id = delReqBtn.getAttribute('data-delete-req');
                        state.requests = state.requests.filter(r => r.id !== id);
                        saveRequestsState();
                        renderAdminDashboard();
                        showToast('Đã đánh dấu xử lý xong yêu cầu khách hàng.');
                        return;
                    }
                });

                // Search, Ratio & Sort Listeners
                const searchInput = document.getElementById('searchArtworkInput');
                const clearSearchBtn = document.getElementById('btnClearSearch');
                searchInput.addEventListener('input', (e) => {
                    state.searchQuery = e.target.value;
                    clearSearchBtn.classList.toggle('hidden', !state.searchQuery);
                    renderMainGallery();
                });

                clearSearchBtn.addEventListener('click', () => {
                    state.searchQuery = '';
                    searchInput.value = '';
                    clearSearchBtn.classList.add('hidden');
                    renderMainGallery();
                });

                document.getElementById('filterRatioSelect').addEventListener('change', (e) => {
                    state.activeRatio = e.target.value;
                    renderMainGallery();
                });

                document.getElementById('sortArtworkSelect').addEventListener('change', (e) => {
                    state.sortBy = e.target.value;
                    renderMainGallery();
                });

                document.getElementById('btnResetAllFilters').addEventListener('click', resetFilters);

                // Hero Start Slideshow
                document.getElementById('btnHeroStartSlideshow').addEventListener('click', () => {
                    if (state.artworks.length > 0) {
                        openLightboxById(state.artworks[0].id);
                        toggleSlideshow();
                    }
                });

                // Lightbox Controls
                document.getElementById('btnLbClose').addEventListener('click', closeLightbox);
                document.getElementById('btnLbPrev').addEventListener('click', () => stepLightbox(-1));
                document.getElementById('btnLbNext').addEventListener('click', () => stepLightbox(1));
                document.getElementById('btnLbSlideshow').addEventListener('click', toggleSlideshow);

                document.getElementById('btnLbZoomIn').addEventListener('click', () => {
                    state.lightbox.zoom = Math.min(3, +(state.lightbox.zoom + 0.25).toFixed(2));
                    document.getElementById('lightboxImage').style.transform = `scale(${state.lightbox.zoom})`;
                    document.getElementById('lbZoomLevel').textContent = `${Math.round(state.lightbox.zoom * 100)}%`;
                });

                document.getElementById('btnLbZoomOut').addEventListener('click', () => {
                    state.lightbox.zoom = Math.max(0.5, +(state.lightbox.zoom - 0.25).toFixed(2));
                    document.getElementById('lightboxImage').style.transform = `scale(${state.lightbox.zoom})`;
                    document.getElementById('lbZoomLevel').textContent = `${Math.round(state.lightbox.zoom * 100)}%`;
                });

                document.getElementById('btnLbFullscreen').addEventListener('click', () => {
                    const modal = document.getElementById('lightboxModal');
                    if (!document.fullscreenElement && modal.requestFullscreen) {
                        modal.requestFullscreen().catch(() => {});
                    } else if (document.exitFullscreen) {
                        document.exitFullscreen().catch(() => {});
                    }
                });

                document.getElementById('btnLbDownloadOriginal').addEventListener('click', () => {
                    const artId = state.lightbox.filteredIds[state.lightbox.currentIndex];
                    const item = state.artworks.find(a => a.id === artId);
                    if (!item || !item.allowDownload) return;
                    const a = document.createElement('a');
                    a.href = item.imageUrl;
                    a.download = `${item.title.toLowerCase().replace(/\s+/g, '-')}-thai-duong.jpg`;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    showToast(`Đang tải ảnh gốc "${item.title}" về thiết bị.`);
                });

                document.getElementById('btnLbShareFB').addEventListener('click', () => {
                    const artId = state.lightbox.filteredIds[state.lightbox.currentIndex];
                    const item = state.artworks.find(a => a.id === artId);
                    shareToPlatform('facebook', item ? `${item.title} — Thư Viện Hình Ảnh Thái Dương` : '');
                });

                document.getElementById('btnLbShareZalo').addEventListener('click', () => {
                    const artId = state.lightbox.filteredIds[state.lightbox.currentIndex];
                    const item = state.artworks.find(a => a.id === artId);
                    shareToPlatform('zalo', item ? `${item.title} — Thư Viện Hình Ảnh Thái Dương` : '');
                });

                document.getElementById('btnLbCopyLink').addEventListener('click', () => {
                    const artId = state.lightbox.filteredIds[state.lightbox.currentIndex];
                    const item = state.artworks.find(a => a.id === artId);
                    shareToPlatform('copy', item ? `${item.title} — Thư Viện Hình Ảnh Thái Dương` : '');
                });

                // Keyboard Navigation in Lightbox
                window.addEventListener('keydown', (e) => {
                    if (!state.lightbox.isOpen) return;
                    if (e.key === 'Escape') closeLightbox();
                    if (e.key === 'ArrowRight') stepLightbox(1);
                    if (e.key === 'ArrowLeft') stepLightbox(-1);
                });

                // Admin Authentication & Quick Upload Triggers
                document.getElementById('btnSwitchAdmin').addEventListener('click', () => switchView('admin'));
                document.getElementById('btnFooterAdmin').addEventListener('click', () => switchView('admin'));
                document.getElementById('btnAdminExitToPublic').addEventListener('click', () => switchView('public'));

                document.getElementById('btnAdminLogout').addEventListener('click', () => {
                    state.isAdminAuthenticated = false;
                    document.getElementById('adminBtnLabel').textContent = 'Quản Trị Viên';
                    switchView('public');
                    showToast('Đã đăng xuất khỏi phiên Quản trị viên.');
                });

                document.getElementById('btnCloseLoginModal').addEventListener('click', () => {
                    document.getElementById('loginModal').classList.add('hidden');
                });

                document.getElementById('loginForm').addEventListener('submit', (e) => {
                    e.preventDefault();
                    const pass = document.getElementById('loginPassword').value.trim();
                    const errEl = document.getElementById('loginErrorMsg');
                    if (pass === state.adminPass) {
                        state.isAdminAuthenticated = true;
                        errEl.classList.add('hidden');
                        document.getElementById('loginModal').classList.add('hidden');
                        document.getElementById('adminBtnLabel').textContent = 'Bảng Quản Trị';
                        switchView('admin');
                        showToast('Chào mừng Chủ sở hữu Thương hiệu THÁI DƯƠNG!');
                    } else {
                        errEl.classList.remove('hidden');
                    }
                });

                // Open Add Artwork Modal from Public or Admin
                const openUploadHandler = () => {
                    if (!state.isAdminAuthenticated) {
                        state.isAdminAuthenticated = true;
                        document.getElementById('adminBtnLabel').textContent = 'Bảng Quản Trị';
                    }
                    openArtworkModal(null);
                };
                document.getElementById('btnOpenQuickUpload').addEventListener('click', openUploadHandler);
                document.getElementById('btnMobileQuickUpload').addEventListener('click', openUploadHandler);
                document.getElementById('btnGalleryUploadTrigger').addEventListener('click', openUploadHandler);
                document.getElementById('btnAdminAddArtwork').addEventListener('click', () => openArtworkModal(null));

                document.getElementById('btnCloseArtworkModal').addEventListener('click', () => {
                    document.getElementById('artworkModal').classList.add('hidden');
                });
                document.getElementById('btnCancelArtworkModal').addEventListener('click', () => {
                    document.getElementById('artworkModal').classList.add('hidden');
                });

                // Multi-file Input Selection Handler
                document.getElementById('inputArtworkFiles').addEventListener('change', async (e) => {
                    const files = Array.from(e.target.files || []);
                    if (files.length === 0) return;

                    showToast(`Đang xử lý ${files.length} ảnh và tạo ảnh thu nhỏ tối ưu...`);
                    const processed = [];
                    for (const f of files) {
                        const res = await processImageFile(f);
                        processed.push(res);
                    }
                    state.pendingUploads = processed;

                    const previewContainer = document.getElementById('uploadPreviewContainer');
                    const previewGrid = document.getElementById('uploadPreviewGrid');
                    const countText = document.getElementById('uploadQueueCountText');

                    previewContainer.classList.remove('hidden');
                    countText.textContent = `Đã sẵn sàng ${processed.length} ảnh mới`;
                    previewGrid.innerHTML = processed.map(p => `
                        <div class="relative rounded-lg overflow-hidden border gold-border bg-stone-900">
                            <img src="${p.thumbUrl}" alt="${p.name}" class="w-full h-20 object-cover">
                            <span class="absolute top-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-mono bg-stone-950/80 text-amber-300">${p.detectedRatio}</span>
                        </div>
                    `).join('');

                    if (!document.getElementById('inputArtTitle').value && processed.length === 1) {
                        document.getElementById('inputArtTitle').value = processed[0].name;
                    }
                });

                // Submit Add / Edit Artwork Form
                document.getElementById('artworkForm').addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const editId = document.getElementById('editArtworkId').value;
                    const titleBase = document.getElementById('inputArtTitle').value.trim();
                    const category = document.getElementById('inputArtCategory').value;
                    const ratioChoice = document.getElementById('inputArtRatio').value;
                    const collection = document.getElementById('inputArtCollection').value.trim() || 'Tuyển Tập Ánh Dương 2026';
                    const createdAt = document.getElementById('inputArtDate').value || '2026-10-25';
                    const description = document.getElementById('inputArtDesc').value.trim();
                    const keywords = document.getElementById('inputArtKeywords').value.split(',').map(k => k.trim()).filter(Boolean);
                    const featured = document.getElementById('inputArtFeatured').checked;
                    const allowDownload = document.getElementById('inputArtAllowDownload').checked;
                    const externalUrl = document.getElementById('inputArtworkExternalUrl').value.trim();

                    if (editId) {
                        const existing = state.artworks.find(a => a.id === editId);
                        if (existing) {
                            existing.title = titleBase;
                            existing.category = category;
                            if (ratioChoice !== 'auto') existing.aspectRatio = ratioChoice;
                            existing.collection = collection;
                            existing.createdAt = createdAt;
                            existing.description = description;
                            existing.keywords = keywords;
                            existing.featured = featured;
                            existing.allowDownload = allowDownload;
                            if (state.pendingUploads.length > 0) {
                                const uploaded = await uploadToCloudinaryIfConfigured(state.pendingUploads[0]);
                                existing.imageUrl = uploaded.originalUrl;
                                existing.thumbUrl = uploaded.thumbUrl;
                                if (ratioChoice === 'auto') existing.aspectRatio = uploaded.detectedRatio;
                            } else if (externalUrl) {
                                existing.imageUrl = externalUrl;
                                existing.thumbUrl = externalUrl;
                            }
                            saveArtworksState();
                            showToast(`Đã cập nhật tác phẩm "${existing.title}" thành công!`);
                        }
                    } else {
                        // Adding new artwork(s) (Supports single or multi-file batch upload)
                        if (state.pendingUploads.length > 0) {
                            const total = state.pendingUploads.length;
                            for (let i = 0; i < total; i++) {
                                const uploaded = await uploadToCloudinaryIfConfigured(state.pendingUploads[i]);
                                const itemTitle = total > 1 ? `${titleBase} #${i + 1}` : titleBase;
                                const finalRatio = ratioChoice === 'auto' ? uploaded.detectedRatio : ratioChoice;
                                state.artworks.unshift({
                                    id: 'td-art-' + Date.now() + '-' + i,
                                    title: itemTitle,
                                    category,
                                    aspectRatio: finalRatio,
                                    collection,
                                    createdAt,
                                    description,
                                    keywords,
                                    imageUrl: uploaded.originalUrl,
                                    thumbUrl: uploaded.thumbUrl,
                                    featured: i === 0 ? featured : false,
                                    allowDownload,
                                    views: 1,
                                    order: 1
                                });
                            }
                            showToast(`Đã tải lên thành công ${total} tác phẩm mới vào Thư Viện Thái Dương!`);
                        } else {
                            const fallbackUrl = externalUrl || 'assets/images/hero-exhibition-thai-duong.jpg';
                            state.artworks.unshift({
                                id: 'td-art-' + Date.now(),
                                title: titleBase,
                                category,
                                aspectRatio: ratioChoice === 'auto' ? '16:9' : ratioChoice,
                                collection,
                                createdAt,
                                description,
                                keywords,
                                imageUrl: fallbackUrl,
                                thumbUrl: fallbackUrl,
                                featured,
                                allowDownload,
                                views: 1,
                                order: 1
                            });
                            showToast(`Đã thêm tác phẩm "${titleBase}" vào thư viện!`);
                        }
                        // Re-index order
                        state.artworks.forEach((a, idx) => { a.order = idx + 1; });
                        saveArtworksState();
                    }

                    document.getElementById('artworkModal').classList.add('hidden');
                    renderFeaturedSpotlights();
                    renderCategoryFilterBar();
                    renderMainGallery();
                    renderAdminDashboard();
                });

                // Export & Import JSON Catalog
                document.getElementById('btnAdminExportJSON').addEventListener('click', () => {
                    const dataStr = JSON.stringify({
                        brand: 'THÁI DƯƠNG',
                        galleryName: 'THƯ VIỆN HÌNH ẢNH THÁI DƯƠNG',
                        exportedAt: new Date().toISOString(),
                        artworks: state.artworks
                    }, null, 2);
                    const blob = new Blob([dataStr], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'gallery.json';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    URL.revokeObjectURL(url);
                    showToast('Đã xuất tệp dữ liệu `gallery.json` chuẩn triển khai GitHub Pages.');
                });

                document.getElementById('inputAdminImportJSON').addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = function(evt) {
                        try {
                            const parsed = JSON.parse(evt.target.result);
                            const list = Array.isArray(parsed) ? parsed : parsed.artworks;
                            if (Array.isArray(list) && list.length > 0) {
                                state.artworks = list;
                                saveArtworksState();
                                renderFeaturedSpotlights();
                                renderCategoryFilterBar();
                                renderMainGallery();
                                renderAdminDashboard();
                                showToast(`Đã nhập thành công ${list.length} tác phẩm từ tệp JSON!`);
                            }
                        } catch (err) {
                            showToast('Tệp JSON không hợp lệ. Vui lòng kiểm tra lại.', 'error');
                        }
                    };
                    reader.readAsText(file);
                });

                document.getElementById('btnAdminResetDefaultData').addEventListener('click', () => {
                    state.artworks = JSON.parse(JSON.stringify(DEFAULT_ARTWORKS));
                    saveArtworksState();
                    renderFeaturedSpotlights();
                    renderCategoryFilterBar();
                    renderMainGallery();
                    renderAdminDashboard();
                    showToast('Đã khôi phục bộ sưu tập mẫu mặc định của Thái Dương.');
                });

                // Save Cloud Config & Push to GitHub API
                document.getElementById('btnSaveCloudConfig').addEventListener('click', () => {
                    state.cloudConfig = {
                        cloudinaryName: document.getElementById('cfgCloudinaryName').value.trim(),
                        cloudinaryPreset: document.getElementById('cfgCloudinaryPreset').value.trim(),
                        cloudinaryFolder: document.getElementById('cfgCloudinaryFolder').value.trim() || 'thai-duong-gallery',
                        githubOwner: document.getElementById('cfgGithubOwner').value.trim(),
                        githubRepo: document.getElementById('cfgGithubRepo').value.trim(),
                        githubBranch: document.getElementById('cfgGithubBranch').value.trim() || 'main',
                        githubPath: document.getElementById('cfgGithubPath').value.trim() || 'data/gallery.json',
                        githubToken: document.getElementById('cfgGithubToken').value.trim()
                    };
                    try {
                        localStorage.setItem('td_gallery_cloud_v1', JSON.stringify(state.cloudConfig));
                    } catch (e) {}

                    const badge = document.getElementById('cloudStatusBadgeText');
                    if (state.cloudConfig.cloudinaryName) {
                        badge.textContent = `Lưu trữ: Cloudinary (${state.cloudConfig.cloudinaryName}) Đã kết nối`;
                    }
                    showToast('Đã lưu cấu hình kết nối Lưu trữ Đám mây & GitHub API!');
                });

                document.getElementById('btnPushToGithubNow').addEventListener('click', async () => {
                    const { githubOwner, githubRepo, githubBranch, githubPath, githubToken } = state.cloudConfig;
                    if (!githubOwner || !githubRepo || !githubToken) {
                        showToast('Vui lòng điền GitHub Owner, Repo và Personal Access Token trước khi đồng bộ.', 'error');
                        return;
                    }
                    showToast('Đang đồng bộ `data/gallery.json` lên GitHub Repository...');
                    try {
                        const apiUrl = `https://api.github.com/repos/${githubOwner}/${githubRepo}/contents/${githubPath}`;
                        let sha = undefined;
                        const getRes = await fetch(`${apiUrl}?ref=${githubBranch}`, {
                            headers: { 'Authorization': `Bearer ${githubToken}` }
                        });
                        if (getRes.ok) {
                            const existingFile = await getRes.json();
                            sha = existingFile.sha;
                        }
                        const contentBase64 = btoa(unescape(encodeURIComponent(JSON.stringify(state.artworks, null, 2))));
                        const putRes = await fetch(apiUrl, {
                            method: 'PUT',
                            headers: {
                                'Authorization': `Bearer ${githubToken}`,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                message: 'Cập nhật Thư Viện Hình Ảnh Thái Dương từ Bảng Quản Trị',
                                content: contentBase64,
                                branch: githubBranch,
                                sha
                            })
                        });
                        if (putRes.ok) {
                            showToast('Đã đồng bộ thành công `data/gallery.json` lên GitHub Pages!');
                        } else {
                            showToast('Không thể kết nối GitHub API (Kiểm tra lại quyền Token hoặc mạng).', 'error');
                        }
                    } catch (err) {
                        showToast('Môi trường xem trước hiện tại chặn kết nối ra ngoài; khi chạy trên GitHub Pages của bạn sẽ đồng bộ trực tiếp.', 'error');
                    }
                });

                // Update Admin Password
                document.getElementById('btnUpdateAdminPass').addEventListener('click', () => {
                    const newPass = document.getElementById('inputNewAdminPass').value.trim();
                    if (newPass.length < 4) {
                        showToast('Mật khẩu mới cần có ít nhất 4 ký tự.', 'error');
                        return;
                    }
                    state.adminPass = newPass;
                    try { localStorage.setItem('td_gallery_admin_pass_v1', newPass); } catch (e) {}
                    document.getElementById('inputNewAdminPass').value = '';
                    showToast('Đã cập nhật mật khẩu Quản trị viên thành công!');
                });

                // Commission & Course Form Submit
                document.getElementById('commissionForm').addEventListener('submit', (e) => {
                    e.preventDefault();
                    const newReq = {
                        id: 'req-' + Date.now(),
                        name: document.getElementById('reqName').value.trim(),
                        phone: document.getElementById('reqPhone').value.trim(),
                        email: document.getElementById('reqEmail').value.trim(),
                        service: document.getElementById('reqServiceType').value,
                        ratio: document.getElementById('reqAspectRatio').value,
                        desc: document.getElementById('reqDescription').value.trim(),
                        createdAt: new Date().toLocaleString('vi-VN')
                    };
                    state.requests.unshift(newReq);
                    saveRequestsState();
                    e.target.reset();
                    showToast(`Cảm ơn ${newReq.name}! Yêu cầu "${newReq.service}" đã được chuyển tới Quản trị viên Thái Dương.`);
                });
            }

            // INITIALIZE APP ON LOAD
            function init() {
                loadInitialData();
                renderFeaturedSpotlights();
                renderCategoryFilterBar();
                renderMainGallery();
                updateCounters();
                bindEvents();
                if (window.lucide) window.lucide.createIcons();
            }

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
            } else {
                init();
            }
        })();