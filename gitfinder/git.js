class GitHub{
    constructor(){
        this.client_id = 'ce5ae3376fdd3653196c';
        this.client_secret = 'd2ab50fde3001cd4cc38814b457a025c58a1e93d';

    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id ${this.client_id}&client_secret${this.client_secret}`);
        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}