class Github {
    constructor() {
        this.client_id = 'a2c74d85bebeb940a0a7';
        this.client_secret = 'fb2cbf110675f16d80c61dccf11fbc4dbd5a819a';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}