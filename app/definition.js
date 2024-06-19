// This is an auto-generated file, do not edit manually
export const definition = {"models":{"IdealiteAccountResources":{"interface":false,"implements":[],"id":"kjzl6hvfrbw6c8keuyodpm1i6aukt75xch1avyalye7b4hxqfxv8hawcqk3jrp0","accountRelation":{"type":"list"}},"IdealiteCardv1":{"interface":false,"implements":[],"id":"kjzl6hvfrbw6c68yvid3cot03hddrssvee810bevu1dvkqs4siyij5ljvl21z0p","accountRelation":{"type":"list"}},"IdealiteProfilev1":{"interface":false,"implements":[],"id":"kjzl6hvfrbw6c9zjnga2fkwerxk3urnq52l89qr97ptjtphzmzkv2z54nv5yuia","accountRelation":{"type":"single"}},"IdealiteProject":{"interface":false,"implements":[],"id":"kjzl6hvfrbw6c5yvp1y11dqp8j5awj253awjp8y7rurz07c4sopnjr5f5l2x54x","accountRelation":{"type":"list"}},"IdealiteProjectCardCollection":{"interface":false,"implements":[],"id":"kjzl6hvfrbw6c93wuun81g3b6g16kj7nq36qk3q7160d9mlvyky64jp1h8ha5lw","accountRelation":{"type":"list"}},"IdealiteResourcev2":{"interface":false,"implements":[],"id":"kjzl6hvfrbw6c7byyxr2qc1kw6sgmljw37w8k69pokztfzeke3vpdli6350ngzg","accountRelation":{"type":"list"}},"IdealiteStatsv1":{"interface":false,"implements":[],"id":"kjzl6hvfrbw6c9p64vpmjgglnqrkrrovwmxwqg0ys38zqf8afrxohll2ephqrz7","accountRelation":{"type":"single"}},"IdealiteTag":{"interface":false,"implements":[],"id":"kjzl6hvfrbw6c8lu2ub7q3zue5uzrjxbdlplcmlhjyg3e9vgbvcvxraujjtrxsp","accountRelation":{"type":"list"}}},"objects":{"IdealiteAccountResources":{"url":{"type":"string","required":false,"immutable":false,"indexed":true},"tags":{"type":"list","required":false,"immutable":false,"item":{"type":"reference","refType":"object","refName":"Tag","required":false,"immutable":false}},"createdAt":{"type":"datetime","required":false,"immutable":false},"recipient":{"type":"did","required":true,"immutable":false,"indexed":true},"updatedAt":{"type":"datetime","required":false,"immutable":false,"indexed":true},"resourceId":{"type":"streamid","required":false,"immutable":false,"indexed":true},"readingStatus":{"type":"reference","refType":"enum","refName":"IdealiteAccountResourcesResourceStatus","required":false,"immutable":false,"indexed":true},"resource":{"type":"view","viewType":"relation","relation":{"source":"document","model":"kjzl6hvfrbw6c7byyxr2qc1kw6sgmljw37w8k69pokztfzeke3vpdli6350ngzg","property":"resourceId"}}},"IdealiteCardv1":{"cid":{"type":"string","required":false,"immutable":false},"url":{"type":"string","required":false,"immutable":false,"indexed":true},"tags":{"type":"list","required":false,"immutable":false,"item":{"type":"reference","refType":"object","refName":"Tag","required":false,"immutable":false}},"quote":{"type":"string","required":false,"immutable":false},"altText":{"type":"string","required":false,"immutable":false},"deleted":{"type":"boolean","required":false,"immutable":false,"indexed":true},"pinSize":{"type":"integer","required":false,"immutable":false},"mimeType":{"type":"string","required":false,"immutable":false},"createdAt":{"type":"datetime","required":false,"immutable":false},"updatedAt":{"type":"datetime","required":false,"immutable":false,"indexed":true},"videoTime":{"type":"string","required":false,"immutable":false},"annotation":{"type":"string","required":false,"immutable":false,"indexed":true},"resourceId":{"type":"streamid","required":false,"immutable":false},"pageYOffset":{"type":"float","required":false,"immutable":false},"lastReviewed":{"type":"datetime","required":false,"immutable":false},"scrollHeight":{"type":"float","required":false,"immutable":false},"learningStatus":{"type":"reference","refType":"enum","refName":"IdealiteCardv1LearningStatus","required":false,"immutable":false,"indexed":true},"timesForgotten":{"type":"integer","required":false,"immutable":false},"googleBooksPage":{"type":"string","required":false,"immutable":false},"originalAuthorDid":{"type":"string","required":false,"immutable":false},"account":{"type":"view","viewType":"documentAccount"},"resource":{"type":"view","viewType":"relation","relation":{"source":"document","model":"kjzl6hvfrbw6c7byyxr2qc1kw6sgmljw37w8k69pokztfzeke3vpdli6350ngzg","property":"resourceId"}},"collection":{"type":"view","viewType":"relation","relation":{"source":"queryConnection","model":"kjzl6hvfrbw6c93wuun81g3b6g16kj7nq36qk3q7160d9mlvyky64jp1h8ha5lw","property":"projectId"}}},"IdealiteProfilev1":{"bio":{"type":"string","required":false,"immutable":false},"tags":{"type":"string","required":false,"immutable":false},"pinSize":{"type":"integer","required":false,"immutable":false},"mimeType":{"type":"string","required":false,"immutable":false},"avatarCid":{"type":"string","required":false,"immutable":false},"createdAt":{"type":"datetime","required":false,"immutable":false},"favorites":{"type":"list","required":false,"immutable":false,"item":{"type":"reference","refType":"object","refName":"IdealiteProfilev1Favorites","required":false,"immutable":false}},"updatedAt":{"type":"datetime","required":false,"immutable":false},"displayName":{"type":"string","required":false,"immutable":false},"farcasterId":{"type":"string","required":false,"immutable":false,"indexed":true},"account":{"type":"view","viewType":"documentAccount"}},"IdealiteProfilev1Favorites":{"id":{"type":"string","required":false,"immutable":false},"title":{"type":"string","required":false,"immutable":false}},"IdealiteProject":{"cid":{"type":"string","required":false,"immutable":false},"url":{"type":"string","required":false,"immutable":false,"indexed":true},"tags":{"type":"list","required":false,"immutable":false,"item":{"type":"reference","refType":"object","refName":"Tag","required":false,"immutable":false}},"title":{"type":"string","required":false,"immutable":false,"indexed":true},"status":{"type":"reference","refType":"enum","refName":"IdealiteProjectProjectStatus","required":false,"immutable":false,"indexed":true},"deleted":{"type":"boolean","required":false,"immutable":false,"indexed":true},"priority":{"type":"reference","refType":"enum","refName":"IdealiteProjectProjectPriority","required":false,"immutable":false,"indexed":true},"createdAt":{"type":"datetime","required":false,"immutable":false},"updatedAt":{"type":"datetime","required":false,"immutable":false,"indexed":true},"description":{"type":"string","required":false,"immutable":false},"account":{"type":"view","viewType":"documentAccount"}},"IdealiteProjectCardCollection":{"deleted":{"type":"boolean","required":false,"immutable":false,"indexed":true},"projectId":{"type":"streamid","required":false,"immutable":false,"indexed":true},"idealiteCardId":{"type":"streamid","required":true,"immutable":false},"project":{"type":"view","viewType":"relation","relation":{"source":"document","model":"kjzl6hvfrbw6c5yvp1y11dqp8j5awj253awjp8y7rurz07c4sopnjr5f5l2x54x","property":"projectId"}},"idealiteCard":{"type":"view","viewType":"relation","relation":{"source":"document","model":"kjzl6hvfrbw6c68yvid3cot03hddrssvee810bevu1dvkqs4siyij5ljvl21z0p","property":"idealiteCardId"}}},"IdealiteResourcev2":{"cid":{"type":"string","required":false,"immutable":false},"doi":{"type":"string","required":false,"immutable":false},"url":{"type":"string","required":false,"immutable":false,"indexed":true},"isbn":{"type":"string","required":false,"immutable":false},"tags":{"type":"list","required":false,"immutable":false,"item":{"type":"reference","refType":"object","refName":"Tag","required":false,"immutable":false}},"title":{"type":"string","required":false,"immutable":false,"indexed":true},"author":{"type":"string","required":false,"immutable":false,"indexed":true},"deleted":{"type":"boolean","required":false,"immutable":false},"createdAt":{"type":"datetime","required":false,"immutable":false},"mediaType":{"type":"string","required":false,"immutable":false},"updatedAt":{"type":"datetime","required":false,"immutable":false,"indexed":true},"description":{"type":"string","required":false,"immutable":false},"publishedAt":{"type":"integer","required":false,"immutable":false},"openLibraryKey":{"type":"string","required":false,"immutable":false,"indexed":true},"clientMutationId":{"type":"string","required":false,"immutable":false},"idealiteCardv1":{"type":"view","viewType":"relation","relation":{"source":"queryConnection","model":"kjzl6hvfrbw6c68yvid3cot03hddrssvee810bevu1dvkqs4siyij5ljvl21z0p","property":"resourceId"}}},"IdealiteStatsv1":{"publicKey":{"type":"string","required":false,"immutable":false,"indexed":true},"updatedAt":{"type":"datetime","required":false,"immutable":false},"farcasterId":{"type":"string","required":false,"immutable":false,"indexed":true},"cardsReviewed":{"type":"string","required":false,"immutable":false},"numCardsMature":{"type":"integer","required":false,"immutable":false},"actionsOverTime":{"type":"string","required":false,"immutable":false},"numCardsLearning":{"type":"integer","required":false,"immutable":false},"numCardsMastered":{"type":"integer","required":false,"immutable":false},"idealiteProfileId":{"type":"string","required":false,"immutable":false,"indexed":true},"cardsReviewedSaved":{"type":"string","required":false,"immutable":false},"cardsMasteredOverTime":{"type":"string","required":false,"immutable":false}},"IdealiteTag":{"name":{"type":"string","required":false,"immutable":false,"indexed":true},"value":{"type":"integer","required":false,"immutable":false},"parent":{"type":"string","required":false,"immutable":false},"deleted":{"type":"boolean","required":false,"immutable":false,"indexed":true},"tagTree":{"type":"string","required":false,"immutable":false},"children":{"type":"list","required":false,"immutable":false,"item":{"type":"reference","refType":"object","refName":"Tag","required":false,"immutable":false}},"createdAt":{"type":"datetime","required":false,"immutable":false,"indexed":true},"updatedAt":{"type":"datetime","required":false,"immutable":false}},"Tag":{"name":{"type":"string","required":false,"immutable":false},"tagId":{"type":"string","required":false,"immutable":false}}},"enums":{"IdealiteAccountResourcesResourceStatus":["ARCHIVED","DROPPED","READING"],"IdealiteCardv1LearningStatus":["STASHED","FORGETTING","LEARNING","MATURE","MASTERED"],"IdealiteProjectProjectPriority":["LOW","MEDIUM","HIGH"],"IdealiteProjectProjectStatus":["TODO","DOING","DONE","DROPPED","ARCHIVED"]},"accountData":{"idealiteAccountResourcesList":{"type":"connection","name":"IdealiteAccountResources"},"idealiteCardv1List":{"type":"connection","name":"IdealiteCardv1"},"idealiteProfilev1":{"type":"node","name":"IdealiteProfilev1"},"idealiteProjectCardCollectionList":{"type":"connection","name":"IdealiteProjectCardCollection"},"idealiteProjectList":{"type":"connection","name":"IdealiteProject"},"idealiteResourcev2List":{"type":"connection","name":"IdealiteResourcev2"},"idealiteStatsv1":{"type":"node","name":"IdealiteStatsv1"},"idealiteTagList":{"type":"connection","name":"IdealiteTag"},"recipientOfIdealiteAccountResourcesList":{"type":"account","name":"IdealiteAccountResources","property":"recipient"}}}