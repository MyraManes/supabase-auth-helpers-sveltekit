export async function POST({ locals }: { locals: App.Locals }) {
    const { user, accessToken, error } = locals;
    return {
        status: 200,
        body: {
            user,
            accessToken,
            error
        }
    };
}
