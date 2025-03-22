export async function GET() {
    try {
        const response = await fetch('https://backend.saytyarat.com/api/products/',
            {
                next: {
                    revalidate: 200
                }
            }
        );
        const data = await response.json();

        return Response.json(data);
    } catch (error) {
        return Response.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}
