import React, { MouseEventHandler } from 'react'

function Icon({
    name,
    className,
    size = '18',
    onClick

}: {
    className?: string,
    size?: string,
    onClick?: MouseEventHandler<SVGSVGElement>,
    name: 'plus' | 'edit' | 'x-close' | 'chevron-left' | 'sun' | 'half-moon' | 'search' | 'filter-funnel' | 'sort-down' | 'sort-up' | 'chevron-left-double' | 'chevron-right-double' | 'dots-horizontal' | 'chevron-right' |'full-plus'
    | 'filter-lines' | 'arrow-down' | 'arrow-up' | 'chevron-down' | 'lock' | 'news' | 'check' | 'location-point' | 'taxi-car' | 'homes' | 'empty-user' | 'home' | 'user' | 'car' | 'settings' | 'reservation' | 'report' | 'download' | 'board' | 'sprint' | 'issue' | 'all-issues' | 'my-issues' | 'reported' | 'backlog' | string
}) {
    switch (name) {
        case 'plus':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case 'x-close':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'chevron-left':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'sun':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'half-moon':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case 'search':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'filter-funnel':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M3.38589 5.66687C2.62955 4.82155 2.25138 4.39889 2.23712 4.03968C2.22473 3.72764 2.35882 3.42772 2.59963 3.22889C2.87684 3 3.44399 3 4.57828 3H19.4212C20.5555 3 21.1227 3 21.3999 3.22889C21.6407 3.42772 21.7748 3.72764 21.7624 4.03968C21.7481 4.39889 21.3699 4.82155 20.6136 5.66687L14.9074 12.0444C14.7566 12.2129 14.6812 12.2972 14.6275 12.3931C14.5798 12.4781 14.5448 12.5697 14.5236 12.6648C14.4997 12.7721 14.4997 12.8852 14.4997 13.1113V18.4584C14.4997 18.6539 14.4997 18.7517 14.4682 18.8363C14.4403 18.911 14.395 18.9779 14.336 19.0315C14.2692 19.0922 14.1784 19.1285 13.9969 19.2012L10.5969 20.5612C10.2293 20.7082 10.0455 20.7817 9.89802 20.751C9.76901 20.7242 9.6558 20.6476 9.583 20.5377C9.49975 20.4122 9.49975 20.2142 9.49975 19.8184V13.1113C9.49975 12.8852 9.49975 12.7721 9.47587 12.6648C9.45469 12.5697 9.41971 12.4781 9.37204 12.3931C9.31828 12.2972 9.2429 12.2129 9.09213 12.0444L3.38589 5.66687Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'sort-down':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" ><path d="m6 20 4-4H7V4H5v12H2zm5-12h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5z"></path></svg>

            )

        case 'sort-up':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" ><path d="M11 9h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5zm-6 3h2V8h3L6 4 2 8h3z"></path></svg>
            )

        case 'chevron-left-double':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M18 17L13 12L18 7M11 17L6 12L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case 'chevron-right-double':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M6 17L11 12L6 7M13 17L18 12L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case 'dots-horizontal':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case 'chevron-right':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case 'filter-lines':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18M3 6H21M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case 'arrow-down':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case 'arrow-up':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case 'chevron-down':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case 'lock':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                    <path d="M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'news':
            return (
                <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" ><path d="M19.875 3H4.125C2.953 3 2 3.897 2 5v14c0 1.103.953 2 2.125 2h15.75C21.047 21 22 20.103 22 19V5c0-1.103-.953-2-2.125-2zm0 16H4.125c-.057 0-.096-.016-.113-.016-.007 0-.011.002-.012.008L3.988 5.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012 13.946c-.007.01-.052.046-.137.046z"></path><path d="M6 7h6v6H6zm7 8H6v2h12v-2h-4zm1-4h4v2h-4zm0-4h4v2h-4z"></path></svg>
            )

        case 'check':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'user':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="currentColor" />
                    <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="currentColor" />
                </svg>
            )
        case 'car':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z" fill="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            )
        case 'settings':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clipRule="evenodd" d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z" fill="currentColor" />
                </svg>

            )

        case 'location-point':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z" /></svg>
            )

        case 'taxi-car':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="currenColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M30.18 72.92c-.95.86-19.68 2.95-23.47 5.89c-2.24 1.74-3.05 4.53-3.37 12.94s-.11 14.1.21 16c.17 1.04 1.7 4.97 4.1 5.47c2.53.53 110.28.21 111.97.21c1.68 0 5.16-3.68 5.05-6.31s-.11-25.89-.21-27.99s-4.53-4.31-5.89-5.16c-1.37-.84-4-5.79-5.89-8.31c-1.42-1.89-8.1-9.68-14.84-12.94c-5.68-2.75-10.73-3.79-23.68-3.68c-12.1.1-20.31 1.26-26.73 5.58s-16.2 17.35-17.25 18.3z" fill="#ffd61c"></path><path d="M5.91 94.64s5.73.09 6.51-.14c1.58-.47 4.47-8.37 3.26-9.45c-.5-.44-8.34-.26-8.34-.26l-1.43 9.85z" fill="#ffffff"></path><path d="M3.26 94.64l3.89.01l.22-9.87l-3.49.01s-.48 3.5-.55 5.28c-.07 1.77-.07 4.57-.07 4.57z" fill="#feead0"></path><path d="M57.96 50.36h33.09s-4.19-11.95-5.35-12.57c-.7-.38-22.28-.11-22.79.16c-1.29.71-4.95 12.41-4.95 12.41z" fill="#9a9a9a"></path><path d="M33.15 79.14c1 1 4.62.97 12.08 1.14c7.46.16 59.76.41 60.57.16s5.43-5.6 5.6-7.05c.16-1.46-9.01-14.52-15.77-17.54c-6.22-2.78-30.68-4.33-40.89-.38c-6.38 2.46-13.8 10.22-18.75 16.79c-2.01 2.66-4.05 5.67-2.84 6.88z" fill="#536f7d"></path><path d="M75.48 57.66s-4.71-.27-9.77.08c-3.98.27-8.27.82-11.88 2.92c-8.19 4.78-13.22 12.89-12.73 14.03c.49 1.14 1.46 1.87 9.89 1.95c8.43.08 24 .05 24.21-.18c0-.25.28-18.8.28-18.8z" fill="#afe3fb"></path><path d="M38.06 82.89c.28.73 2.69 2.34 7.52 2.02c3.94-.27 4.91-4.03 5.11-6.76c.27-3.72-2.37-5.91-2.37-5.91s-3.05.9-3.18 1.12c-.13.22-6.72 6.81-6.72 6.81s-.72 1.78-.36 2.72z" fill="#dd801b"></path><path d="M43.03 81.77c3.9-.13 7.3-7.21 5.73-9.23c-1.57-2.02-5.15-.08-7.17 2.1c-2.73 2.96-3.18 5.51-3.18 5.51s.6 1.76 4.62 1.62z" fill="#ffd61c"></path><path d="M80.12 57.72s-.07 18.67-.04 18.68c.85.15 23.6.09 23.83-.09c.22-.18 2.69-2.87 2.69-3.31c0-.45-6.31-10.12-12.5-13.3c-4.43-2.28-13.98-1.98-13.98-1.98z" fill="#afe3fb"></path><path d="M124.55 82.54s-5.55-.33-6.34.2c-1.02.7-.86 10.39.25 10.93c1.1.53 6.13.09 6.13.09s.02-2.94.02-5.89c0-3.68-.06-5.33-.06-5.33z" fill="#ff2825"></path><path fill="#4e433d" d="M43.73 94.2h6.56v6.78h-6.56z"></path><path fill="#4e433d" d="M50.26 87.45h6.56v6.78h-6.56z"></path><path fill="#4e433d" d="M56.82 94.2h6.56v6.78h-6.56z"></path><path fill="#4e433d" d="M63.35 87.42h6.56v6.78h-6.56z"></path><path fill="#4e433d" d="M69.83 94.17h6.56v6.78h-6.56z"></path><path fill="#4e433d" d="M76.33 87.4h6.56v6.78h-6.56z"></path><path fill="#4e433d" d="M82.84 94.12h6.56v6.78h-6.56z"></path><path d="M17.81 110.31c.09 5.52 4.49 13.46 14.07 13.52s14.55-7.28 14.25-14.8c-.31-7.64-6.25-13.04-14.8-12.8c-8 .24-13.64 6.44-13.52 14.08z" fill="#4e433d"></path><path d="M24.48 109.85c.05 2.91 2.41 7.1 7.56 7.13c5.15.03 7.64-3.62 7.48-7.58c-.17-4.03-3.46-7.03-7.78-6.97c-4.3.07-7.33 3.39-7.26 7.42z" fill="#c8c8c8"></path><path d="M88.53 110.78c.09 5.48 4.39 13.36 13.77 13.42s14.24-7.22 13.95-14.68c-.3-7.59-6.11-12.94-14.48-12.7c-7.83.22-13.36 6.37-13.24 13.96z" fill="#4e433d"></path><path d="M94.79 110.34c.05 2.91 2.41 7.1 7.56 7.13s7.64-3.62 7.48-7.58c-.17-4.03-3.46-7.03-7.78-6.97c-4.29.07-7.32 3.39-7.26 7.42z" fill="#c8c8c8"></path></g></svg>
            )


        case 'home':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M12 16C13.6569 16 15 14.6568 15 13C15 11.3431 13.6569 9.99998 12 9.99998C10.3431 9.99998 9 11.3431 9 13C9 14.6568 10.3431 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 10.5651C3 9.9907 3 9.70352 3.07403 9.43905C3.1396 9.20478 3.24737 8.98444 3.39203 8.78886C3.55534 8.56806 3.78202 8.39175 4.23539 8.03912L11.0177 2.764C11.369 2.49075 11.5447 2.35412 11.7387 2.3016C11.9098 2.25526 12.0902 2.25526 12.2613 2.3016C12.4553 2.35412 12.631 2.49075 12.9823 2.764L19.7646 8.03913C20.218 8.39175 20.4447 8.56806 20.608 8.78886C20.7526 8.98444 20.8604 9.20478 20.926 9.43905C21 9.70352 21 9.9907 21 10.5651V17.8C21 18.9201 21 19.4801 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4801 3 18.9201 3 17.8V10.5651Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )

        case 'homes':
            return (
                <svg onClick={onClick} className={className} width={size} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    strokeLinejoin
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z" fill="currentColor" /> </g>

                </svg>
            )

        case 'empty-user':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#b3b3b3" />
                    <circle cx="12" cy="8" r="4" fill="#f0f0f0" />
                    <path d="M18 20c0-3.31-2.69-6-6-6s-6 2.69-6 6" fill="#f0f0f0" />
                </svg>
            )
        case 'reservation':
            return (
                <svg fill="currentColor" onClick={onClick} className={className} width={size} height={size} viewBox="0 0 16 16" id="register-16px" xmlns="http://www.w3.org/2000/svg">
                    <path id="Path_184" data-name="Path 184" d="M57.5,41a.5.5,0,0,0-.5.5V43H47V31h2v.5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V31h2v.5a.5.5,0,0,0,1,0v-1a.5.5,0,0,0-.5-.5H55v-.5A1.5,1.5,0,0,0,53.5,28h-3A1.5,1.5,0,0,0,49,29.5V30H46.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,57.5,41ZM50,29.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V31H50Zm11.854,4.646-2-2a.5.5,0,0,0-.708,0l-6,6A.5.5,0,0,0,53,38.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.354-.146l6-6A.5.5,0,0,0,61.854,34.146ZM54,40V38.707l5.5-5.5L60.793,34.5l-5.5,5.5Zm-2,.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1,0-1h2A.5.5,0,0,1,52,40.5Zm0-3a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1,0-1h2A.5.5,0,0,1,52,37.5ZM54.5,35h-5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z" transform="translate(-46 -28)" />
                </svg>
            )
        case 'report':
            return (
                <svg fill="currentColor" onClick={onClick} className={className} width={size} height={size} viewBox="0 0 16 16" id="register-16px" xmlns="http://www.w3.org/2000/svg">
                    <path id="Path_184" data-name="Path 184" d="M57.5,41a.5.5,0,0,0-.5.5V43H47V31h2v.5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V31h2v.5a.5.5,0,0,0,1,0v-1a.5.5,0,0,0-.5-.5H55v-.5A1.5,1.5,0,0,0,53.5,28h-3A1.5,1.5,0,0,0,49,29.5V30H46.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,57.5,41ZM50,29.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V31H50Zm11.854,4.646-2-2a.5.5,0,0,0-.708,0l-6,6A.5.5,0,0,0,53,38.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.354-.146l6-6A.5.5,0,0,0,61.854,34.146ZM54,40V38.707l5.5-5.5L60.793,34.5l-5.5,5.5Zm-2,.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1,0-1h2A.5.5,0,0,1,52,40.5Zm0-3a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1,0-1h2A.5.5,0,0,1,52,37.5ZM54.5,35h-5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z" transform="translate(-46 -28)" />
                </svg>
            )
        case 'download':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )



        case 'settings':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )

        case 'report':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )

        case 'reported':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )

        case 'my-issues':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )


        case 'all-issues':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )



        case 'sprint':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path d="M5,5 L19,5 L19,4.5 C19,3.67157288 18.3284271,3 17.5,3 L6.5,3 C5.67157288,3 5,3.67157288 5,4.5 L5,5 Z M4,5.5 L4,4.5 C4,3.11928813 5.11928813,2 6.5,2 L17.5,2 C18.8807119,2 20,3.11928813 20,4.5 L20,5.5 C20,5.77614237 19.7761424,6 19.5,6 L4.5,6 C4.22385763,6 4,5.77614237 4,5.5 Z M4,10.5 L4,7.5 C4,7.22385763 4.22385763,7 4.5,7 L19.5,7 C19.7761424,7 20,7.22385763 20,7.5 L20,10.5 C20,10.7761424 19.7761424,11 19.5,11 L4.5,11 C4.22385763,11 4,10.7761424 4,10.5 Z M5,10 L19,10 L19,8 L5,8 L5,10 Z M6,15.5 L6,12.5 C6,12.2238576 6.22385763,12 6.5,12 L21.5,12 C21.7761424,12 22,12.2238576 22,12.5 L22,15.5 C22,15.7761424 21.7761424,16 21.5,16 L6.5,16 C6.22385763,16 6,15.7761424 6,15.5 Z M7,15 L21,15 L21,13 L7,13 L7,15 Z M4,18.5 L4,17.5 C4,17.2238576 4.22385763,17 4.5,17 L19.5,17 C19.7761424,17 20,17.2238576 20,17.5 L20,18.5 C20,19.8807119 18.8807119,21 17.5,21 L6.5,21 C5.11928813,21 4,19.8807119 4,18.5 Z M5,18 L5,18.5 C5,19.3284271 5.67157288,20 6.5,20 L17.5,20 C18.3284271,20 19,19.3284271 19,18.5 L19,18 L5,18 Z" />
                </svg>
            )

        case 'backlog':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <g fill="currentColor" >
                        <path d="M8.04 10.471 2.938 7.953l2.085-1.03-.932-.46-3.017 1.49L8.04 11.39l6.965-3.437-3.017-1.49-.93.46 2.084 1.03z" transform="matrix(1.1485 0 0 1.2471 -1.233 -1.917)" fill="currentColor" />
                        <path d="M8.04 13.448 2.938 10.93 5.023 9.9l-.932-.46-3.017 1.49 6.966 3.437 6.965-3.437-3.017-1.49-.93.46 2.084 1.03z" transform="matrix(1.1485 0 0 1.2471 -1.233 -1.917)" fill="currentColor" />
                        <path d="M8.04 1.537 1.074 4.974 8.04 8.41l6.965-3.437zm0 .919 5.102 2.518L8.04 7.492 2.938 4.974z" transform="matrix(1.1485 0 0 1.2471 -1.233 -1.917)" fill="currentColor" />
                    </g>
                </svg>
            )

        case 'board':
            return (
                <svg onClick={onClick} className={className} width={size} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z" fill="currentColor" /> </g>
                </svg>
            )

        case 'issue':
            return (
                <svg onClick={onClick} className={className} width={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm6 0H4v14h4V5zm2 0v14h4V5h-4zm6 0v14h4V5h-4z" fill="currentColor" /></svg>
            )

        case 'full-plus':
            return (
                <svg onClick={onClick} className={className} width={size} height={size} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g id="Page-1" stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd" >
                        <g id="Icon-Set-Filled"  transform="translate(-466.000000, -1089.000000)" fill="currentColor">
                            <path d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z" id="plus-circle" >
                            </path>
                        </g>
                    </g>
                </svg>
            )
    }

}

export default Icon