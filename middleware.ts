import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);
const isWebhookRoute = createRouteMatcher(['/api/webhooks(.*)', "/", "/api/uploadthing", "/:username", "/search"]);

export default clerkMiddleware((auth, request) => {
    // Kiểm tra xem route hiện tại có phải là route công khai hoặc route webhook không
    if (!isPublicRoute(request) && !isWebhookRoute(request)) {
        auth().protect(); // Bảo vệ các route không công khai và không phải webhook
    }
});

export const config = {
    matcher: [
        // Bỏ qua các nội bộ của Next.js và tất cả các tệp tĩnh
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Luôn chạy cho các route API
        '/(api|trpc)(.*)',
    ],
};