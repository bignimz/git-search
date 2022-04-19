export class User {
      constructor(
            public name: string,
            public login: string,
            public avatar_url: string,
            public html_url: string,
            public location: string,
            public bio: string,
            public public_repos: number,
            public followers: number,
            public public_gists: number,
            public following: number,
            public company: string,
            public created_at: Date,
        ){}
}
