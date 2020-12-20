export interface Post {
    id: number;
    date: string;
    date_gmt: string;
    guid: RenderedType;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: "publish" | string;
    type: "post" | "category"; // chyba category xD
    link: string;
    title: RenderedType;
    content: RenderedType;
    excerpt: RenderedType;
    author: number;
    featured_media: number;
    comment_status: "open" | "closed"; // closed lub close.. i guess
    ping_status: "open" | "closed";
    sticky: boolean;
    template: string;
    format: "standard" | string;
    meta: string[];
    categories: number[];
    _links: LinkDictionary;
}

type RenderedType = {
    rendered: string;
    protected?: boolean;
}

/**
 * Odpowiada za linki doczepione do posta.
 * Trza to rozwinac potem aby uwzglednic np. id w podpolu version-history.
 */
type LinkDictionary = {
    [key: string]: { href: string; embeddable?: boolean; }[]
}

// Przyklad odpowiedzi z serwera dla posta.
// {
//     "id": 438,
//     "date": "2020-12-16T20:15:41",
//     "date_gmt": "2020-12-16T19:15:41",
//     "guid": {
//       "rendered": "https://latwypieniadz.pl/?p=438"
//     },
//     "modified": "2020-12-16T20:15:41",
//     "modified_gmt": "2020-12-16T19:15:41",
//     "slug": "nowy-serwis-zarobkowy",
//     "status": "publish",
//     "type": "post",
//     "link": "https://latwypieniadz.pl/nowy-serwis-zarobkowy/",
//     "title": {
//       "rendered": "Nowy serwis zarobkowy"
//     },
//     "content": {
//       "rendered": "<p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sapien nec nulla pellentesque euismod. Nullam porttitor dui eu turpis blandit consequat ac ut nisi. Donec vitae iaculis lorem, sit amet tincidunt neque. Integer mattis fringilla ipsum sed malesuada. Donec elementum nisi nunc, sed blandit risus consectetur vitae. Nulla tincidunt, velit sed semper semper, metus dui rhoncus nunc, et vestibulum urna ex cursus velit. Mauris at porttitor tellus. Nam rutrum lobortis orci, in interdum sem ultrices sit amet. Curabitur suscipit ac nisi non rhoncus. Mauris ultrices orci arcu, sed finibus sem facilisis vitae. Morbi nulla dui, mattis vitae ultrices in, vehicula eget mauris.</span></p>\n",
//       "protected": false
//     },
//     "excerpt": {
//       "rendered": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sapien nec nulla pellentesque euismod. Nullam porttitor dui eu turpis blandit consequat ac ut nisi. Donec vitae iaculis lorem, sit amet tincidunt neque. Integer mattis fringilla ipsum sed malesuada. Donec elementum nisi nunc, sed blandit risus consectetur vitae. Nulla tincidunt, [&hellip;]</p>\n",
//       "protected": false
//     },
//     "author": 1,
//     "featured_media": 213,
//     "comment_status": "open",
//     "ping_status": "open",
//     "sticky": false,
//     "template": "",
//     "format": "standard",
//     "meta": [],
//     "categories": [
//       7
//     ],
//     "tags": [],
//     "_links": {
//       "self": [
//         {
//           "href": "https://latwypieniadz.pl/wp-json/wp/v2/posts/438"
//         }
//       ],
//       "collection": [
//         {
//           "href": "https://latwypieniadz.pl/wp-json/wp/v2/posts"
//         }
//       ],
//       "about": [
//         {
//           "href": "https://latwypieniadz.pl/wp-json/wp/v2/types/post"
//         }
//       ],
//       "author": [
//         {
//           "embeddable": true,
//           "href": "https://latwypieniadz.pl/wp-json/wp/v2/users/1"
//         }
//       ],
//       "replies": [
//         {
//           "embeddable": true,
//           "href": "https://latwypieniadz.pl/wp-json/wp/v2/comments?post=438"
//         }
//       ],
//       "version-history": [
//         {
//           "count": 1,
//           "href": "https://latwypieniadz.pl/wp-json/wp/v2/posts/438/revisions"
//         }
//       ],
//       "predecessor-version": [
//         {
//           "id": 439,
//           "href": "https://latwypieniadz.pl/wp-json/wp/v2/posts/438/revisions/439"
//         }
//       ],
//       "wp:featuredmedia": [
//         {
//           "embeddable": true,
//           "href": "https://latwypieniadz.pl/wp-json/wp/v2/media/213"
//         }
//       ],
//       "wp:attachment": [
//         {
//           "href": "https://latwypieniadz.pl/wp-json/wp/v2/media?parent=438"
//         }
//       ],
//       "wp:term": [
//         {
//           "taxonomy": "category",
//           "embeddable": true,
//           "href": "https://latwypieniadz.pl/wp-json/wp/v2/categories?post=438"
//         },
//         {
//           "taxonomy": "post_tag",
//           "embeddable": true,
//           "href": "https://latwypieniadz.pl/wp-json/wp/v2/tags?post=438"
//         }
//       ],
//       "curies": [
//         {
//           "name": "wp",
//           "href": "https://api.w.org/{rel}",
//           "templated": true
//         }
//       ]
//     }
//   }